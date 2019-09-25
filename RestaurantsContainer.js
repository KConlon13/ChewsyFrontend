import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { ThemeProvider, Text, Header } from 'react-native-elements';
import RestaurantsCardToggle from './RestaurantsCardToggle'
import Search from "./Search"


class RestaurantsContainer extends React.Component {
    static navigationOptions = {
        header: null,
        searchTerm: ""
     };


    changeHandler = (searchterm) => {
        this.setState({searchTerm: searchterm})
        console.log(searchterm)
    } 

    // filterArtists = (prop) =>{
    //     return this.props.restaurantsArray.filter(rest => rest.prop === true)
    // }


    render(){
        let restaurantsComponent = this.props.restaurantsArray.map(rest => {
            return <RestaurantsCardToggle favRestaurants={this.props.favRestaurants} addHandler={this.props.addHandler} user={this.props.user} key={rest.restaurant_id} obj={rest}/>
        })
        
        // attempt at a searchbar

        // let restaurantsComponent = this.filterRestaurants().map(rest => {
        //     return <RestaurantsCardToggle favRestaurants={this.props.favRestaurants} addHandler={this.props.addHandler} user={this.props.user} key={rest.restaurant_id} obj={rest}/>
        // })


        return (
            <View style={styles.page}>
                <Text style={styles.title} h5>All Restaurants</Text>

                {/* <Search style={styles.search} changeHandler={this.changeHandler}/> */}
            <ScrollView contentContainerstyle={styles.contentContainer } ref={ref => this.scrollView = ref}
            onContentSizeChange={(contentWidth, contentHeight)=>{  
                
                // this.scrollView.scrollTo({x: 0, y: 0, animated: true})
                // this.scrollView.scrollToEnd({animated: true});
            }}>
                {restaurantsComponent}
            </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        height: 700
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        textDecorationLine: "underline",
        // paddingBottom: 15
    },
    search: {
        marginTop: 0,
        marginBottom: 0
    }
})

export default RestaurantsContainer;