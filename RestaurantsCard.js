import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import RestaurantSpecs from "./RestaurantSpecs"

class RestaurantsCard extends React.Component {
    state = {
        cardClicked: false
    }

    restHandler=(obj)=>{
        console.log("Been clicked", obj)
        this.setState({
            cardClicked: !this.state.cardClicked
        })
    }
 // Wanted the card to be clickable all over, however, only the description TEXT tag is clickable
 // Could solve this via a designated button? 
    render(){
        return (
            <View onPress={() => this.restHandler(this.props.obj)}>

                <View onPress={() => this.restHandler(this.props.obj)}>

                {this.state.cardClicked ? <RestaurantSpecs favRestaurants={this.props.favRestaurants} addHandler={this.props.addHandler} user={this.props.user} obj={this.props.obj}/> : 
                <Card title={this.props.obj.name} onPress={() => this.restHandler()}>
                    <Text onPress={() => this.restHandler(this.props.obj)}>{this.props.obj.description} </Text>
                    <Text></Text>
                </Card>
                }
                </View>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    // allergy: {
    //     fontSize: 20
    // }
})

export default RestaurantsCard;