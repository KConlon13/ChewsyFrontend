import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import RestaurantSpecs from "./RestaurantSpecs"
import RestaurantsCard from "./RestaurantsCard"

class RestaurantsCardToggle extends React.Component {
    state= {
        toggle: false
    }

    toggleHandler=()=>{
        this.setState({
            toggle: !this.state.toggle
        })
    }


    render(){
        return (

        <View>

        {this.state.toggle ? 
        <RestaurantSpecs favRestaurants={this.props.favRestaurants} addHandler={this.props.addHandler} user={this.props.user} obj={this.props.obj} toggleHandler={this.toggleHandler}/> : 
        <RestaurantsCard favRestaurants={this.props.favRestaurants} addHandler={this.props.addHandler} obj={this.props.obj} user={this.props.user} toggleHandler={this.toggleHandler}/> }

        </View>

        )

    }
}

export default RestaurantsCardToggle;