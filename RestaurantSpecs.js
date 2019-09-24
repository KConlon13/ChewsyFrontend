import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import RestaurantsCard from "./RestaurantsCard"
import Favorites from './Favorites';

class RestaurantSpecs extends React.Component {

    
    // inside the return, a conditional render is needed for the button based on whether or not this specific object is found inside of the favRestaurants array that is in its passed down props
    
    
    
    render(){
        console.log("This is favorited restaurants of that user from props: ", this.props.user.restaurants, 
        "And this is the props obj i want to compare: ", this.props.obj)
        
        // debugger
        return (
            <View>
                <Card title={this.props.obj.name} >

                    <Text onPress={() => this.props.toggleHandler(this.props.obj)}>{this.props.obj.location}</Text>
                    <Text onPress={() => this.props.toggleHandler(this.props.obj)}></Text>
                    <Text onPress={() => this.props.toggleHandler(this.props.obj)}>{this.props.obj.description}</Text>
                    <Text onPress={() => this.props.toggleHandler(this.props.obj)}></Text>
                    <Text onPress={() => this.props.toggleHandler(this.props.obj)}>Allergies Accommodated: </Text>
                    { this.props.obj.peanut ? 
                    <Text style={styles.allergy} onPress={() => this.props.toggleHandler(this.props.obj)}>   • Peanuts</Text> : null}
                    { this.props.obj.gluten ? <Text onPress={() => this.props.toggleHandler(this.props.obj)}>   • Gluten</Text> : null}
                    { this.props.obj.wheat ? <Text onPress={() => this.props.toggleHandler(this.props.obj)}>   • Wheat</Text> : null}
                    { this.props.obj.dairy ? <Text onPress={() => this.props.toggleHandler(this.props.obj)}>   • Dairy</Text> : null}
                    { this.props.obj.treenut ? <Text onPress={() => this.props.toggleHandler(this.props.obj)}>   • Treenut</Text> : null}
                    { this.props.obj.eggs ? <Text onPress={() => this.props.toggleHandler(this.props.obj)}>   • Egg</Text> : null}
                    <Text></Text>

                    {this.props.favRestaurants.map(rest => rest.restaurant_id).includes(this.props.obj.restaurant_id) ? 
                    <Text>Already Favorited!</Text> : 
                    <Button onPress={() => this.props.addHandler(this.props.obj.restaurant_id)} title="Add to Favorites" icon={{name: "add", color: "white"}} />
                    }

                 </Card>
            </View>
    
        )
    }
}
// could also do the logic on line 47 using state inside render above


const styles = StyleSheet.create({

    })
    
export default RestaurantSpecs;