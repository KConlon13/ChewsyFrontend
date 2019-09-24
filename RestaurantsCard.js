import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import RestaurantSpecs from "./RestaurantSpecs"

class RestaurantsCard extends React.Component {


 // Wanted the card to be clickable all over, however, only the description TEXT tag is clickable
 // Could solve this via a designated button? 

    render(){
        return(
            <View>
                <View>
                <Card title={this.props.obj.name}>
                    <Text onPress={() => this.props.toggleHandler(this.props.obj)}>{this.props.obj.description} </Text>
                    <Text> </Text>
                </Card> 
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