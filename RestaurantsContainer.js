import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { ThemeProvider, Text, Header } from 'react-native-elements';
import RestaurantsCardToggle from './RestaurantsCardToggle'
import Search from "./Search"


class RestaurantsContainer extends React.Component {
    static navigationOptions = {
        header: null
     };

     state={
        searchTerm: ""
     }


    changeHandler = (searchterm) => {
        this.setState({searchTerm: searchterm})
        console.log("SEARCH TERM :", this.state.searchTerm)
    } 

    filterRestaurants = () =>{
        if (this.state.searchTerm === "peanut") {
            return this.props.restaurantsArray.filter(rest => rest.peanut === true)
        } else if (this.state.searchTerm === "gluten") {
            return this.props.restaurantsArray.filter(rest => rest.gluten === true)
        } else if (this.state.searchTerm === "wheat") {
            return this.props.restaurantsArray.filter(rest => rest.wheat === true)            
        } else if (this.state.searchTerm === "dairy") {
            return this.props.restaurantsArray.filter(rest => rest.dairy === true)
        } else if (this.state.searchTerm === "treenut") {
            return this.props.restaurantsArray.filter(rest => rest.treenut === true)
        } else if (this.state.searchTerm === "eggs") {
            return this.props.restaurantsArray.filter(rest => rest.eggs === true)
        } else if (this.state.searchTerm === ""){
            return this.props.restaurantsArray
        }
    }


    render(){
        // let restaurantsComponent = this.props.restaurantsArray.map(rest => {
        //     return <RestaurantsCardToggle favRestaurants={this.props.favRestaurants} addHandler={this.props.addHandler} user={this.props.user} key={rest.restaurant_id} obj={rest}/>
        // })
        
        // attempt at a searchbar

        let restaurantsComponent = this.filterRestaurants().map(rest => {
            return <RestaurantsCardToggle favRestaurants={this.props.favRestaurants} addHandler={this.props.addHandler} user={this.props.user} key={rest.restaurant_id} obj={rest}/>
        })


        return (
            <View style={styles.page}>
                <Search style={styles.search} changeHandler={this.changeHandler} />
                <ScrollView contentContainerstyle={styles.contentContainer} 
                ref={ref => this.scrollView = ref}
                    onContentSizeChange={(contentWidth, contentHeight)=>{  
                // this.scrollView.scrollTo({x: 0, y: 0, animated: true})
                // this.scrollView.scrollToEnd({animated: true});
                }}>
                    {/* <Text style={styles.title} h5>All Restaurants</Text> */}
                    {restaurantsComponent}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        height: 690
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        textDecorationLine: "underline"
    },
    search: {
        marginTop: 0,
        marginBottom: 0
    }
})

export default RestaurantsContainer;