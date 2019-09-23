import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

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

                <Card title={this.props.obj.name} >

                    <Text onPress={() => this.restHandler(this.props.obj)}>{this.props.obj.location}</Text>
                    <Text onPress={() => this.restHandler(this.props.obj)}></Text>
                    <Text onPress={() => this.restHandler(this.props.obj)}>{this.props.obj.description}</Text>
                    <Text onPress={() => this.restHandler(this.props.obj)}></Text>
                    <Text onPress={() => this.restHandler(this.props.obj)}>Allergies Accommodated: </Text>
                    { this.props.obj.peanut ? <Text style={styles.allergy} onPress={() => this.restHandler(this.props.obj)}>   • Peanuts</Text> : null}
                    { this.props.obj.gluten ? <Text onPress={() => this.restHandler(this.props.obj)}>   • Gluten</Text> : null}
                    { this.props.obj.wheat ? <Text onPress={() => this.restHandler(this.props.obj)}>   • Wheat</Text> : null}
                    { this.props.obj.dairy ? <Text onPress={() => this.restHandler(this.props.obj)}>   • Dairy</Text> : null}
                    { this.props.obj.treenut ? <Text onPress={() => this.restHandler(this.props.obj)}>   • Treenut</Text> : null}
                    { this.props.obj.eggs ? <Text onPress={() => this.restHandler(this.props.obj)}>   • Egg</Text> : null}
                    <Text></Text>
                    <Button title="Remove From Favorites" icon={{color: "white"}} />
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