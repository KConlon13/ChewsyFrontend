import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import RestaurantsCard from "./RestaurantsCard"

class RestaurantSpecs extends React.Component {
    state = {
        cardClicked: false
    }

    restHandler=(obj)=>{
        console.log("Been clicked", obj)
        this.setState({
            cardClicked: !this.state.cardClicked
        })
    }

    render(){
        return (
            <View>

            {this.state.cardClicked ? <RestaurantsCard obj={this.props.obj}/> : 
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
                    <Button title="Add to Favorites" icon={{name: "add", color: "white"}}/>
                </Card>
        }
        </View>
        )
    }
}

const styles = StyleSheet.create({
    // allergy: {
    //     fontSize: 20
    // }
})

export default RestaurantSpecs;