import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { ThemeProvider, Text, Header } from 'react-native-elements';
import RestaurantsCard from './RestaurantsCard'


class RestaurantsContainer extends React.Component {
    static navigationOptions = {
        header: null,
     };
    render(){
        let restaurantsComponent = this.props.restaurantsArray.map(rest => {
            return <RestaurantsCard favRestaurants={this.props.favRestaurants} addHandler={this.props.addHandler} user={this.props.user} key={rest.restaurant_id} obj={rest}/>
        })

        // let restaurantsComponent = this.props.restaurantsArray.map(rest => {
        //     console.log("iterated rests from restaurants array:", rest, "rests from favs", this.props.favRestaurants, "the entire restaurantsArray: ", this.props.restaurantsArray)
        //     this.props.favRestaurants.filter(rest => ) ? 
        //     null
        //     : <RestaurantsCard addHandler={this.props.addHandler} user={this.props.user} key={rest.restaurant_id} obj={rest}/> 
        // })

        // if a rest is found inside the favRestaurants array, remove it
        // OR return an array to iterate through that doesnt have that element
        
        return (
            <View style={styles.page}>
                <Text style={styles.title} h5>All Restaurants</Text>
            <ScrollView contentContainerstyle={styles.contentContainer } ref={ref => this.scrollView = ref}
            onContentSizeChange={(contentWidth, contentHeight)=>{        
                this.scrollView.scrollToEnd({animated: true});
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
        paddingBottom: 15
    }
})

export default RestaurantsContainer;