import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import RestaurantSpecs from "./RestaurantSpecs"

class RestaurantsCard extends React.Component {
 // Wanted the card to be clickable all over, however, only the description TEXT tag is clickable
 // Could solve this via a designated button? 

    render(){
        return(
            <View>
                <TouchableOpacity onPress={() => this.props.toggleHandler(this.props.obj)}>
                <Card title={this.props.obj.name} containerStyle={{backgroundColor: "white", borderColor: "#FF6700", shadowRadius: 5 }}>
                    <Text onPress={() => this.props.toggleHandler(this.props.obj)}>{this.props.obj.description} </Text>
                    <Text> </Text>
                </Card> 
                </TouchableOpacity>
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