import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import RestaurantsCard from "./RestaurantsCard"
import Favorites from './Favorites';

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
    
    // inside the return, a conditional render is needed for the button based on whether or not this specific object is found inside of the favRestaurants array that is in its passed down props
    
    


    render(){
        console.log("This is FavRestaurants Array from props: ", this.props.favRestaurants, 
        "And this is the props obj i want to compare: ", this.props.obj)
        return (
            <View>

            {this.state.cardClicked ? <RestaurantsCard addHandler={this.props.addHandler} obj={this.props.obj}/> : 
                <Card title={this.props.obj.name} >

                    <Text onPress={() => this.restHandler(this.props.obj)}>{this.props.obj.location}</Text>
                    <Text onPress={() => this.restHandler(this.props.obj)}></Text>
                    <Text onPress={() => this.restHandler(this.props.obj)}>{this.props.obj.description}</Text>
                    <Text onPress={() => this.restHandler(this.props.obj)}></Text>
                    <Text onPress={() => this.restHandler(this.props.obj)}>Allergies Accommodated: </Text>
                    { this.props.obj.peanut ? 
                    <Text style={styles.allergy} onPress={() => this.restHandler(this.props.obj)}>   • Peanuts</Text> : null}
                    { this.props.obj.gluten ? <Text onPress={() => this.restHandler(this.props.obj)}>   • Gluten</Text> : null}
                    { this.props.obj.wheat ? <Text onPress={() => this.restHandler(this.props.obj)}>   • Wheat</Text> : null}
                    { this.props.obj.dairy ? <Text onPress={() => this.restHandler(this.props.obj)}>   • Dairy</Text> : null}
                    { this.props.obj.treenut ? <Text onPress={() => this.restHandler(this.props.obj)}>   • Treenut</Text> : null}
                    { this.props.obj.eggs ? <Text onPress={() => this.restHandler(this.props.obj)}>   • Egg</Text> : null}
                    <Text></Text>
                    {/* {
                    this.props.favRestaurants.map(rest => 
                    rest.restaurant_id === this.props.obj.restaurant_id ? <Button title="Already Favorited!" /> : 
                    <Button onPress={() => this.props.addHandler(this.props.obj.restaurant_id)} title="Add to Favorites" icon={{name: "add", color: "white"}} />
                    )
                } */}
                <Button onPress={() => this.props.addHandler(this.props.obj.restaurant_id)} title="Add to Favorites" icon={{name: "add", color: "white"}} />
                
                    {/* {this.props.favRestaurants.includes(this.props.obj) ?  <Button title="Already Favorited!" />  : 
                    <Button onPress={() => this.props.addHandler(this.props.obj.restaurant_id)} title="Add to Favorites" icon={{name: "add", color: "white"}} />
                    }  */}
                </Card>
        }
        </View>
        )
    }
}

// make sure to remove that curly boy from line 44 if conditional is taken out!

const styles = StyleSheet.create({
    // allergy: {
        //     fontSize: 20
        // }
    })
    
export default RestaurantSpecs;