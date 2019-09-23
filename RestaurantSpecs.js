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

    // addHandler=(id)=>{
    //     console.log("addhandler user", this.props.user.user_id, "addhandler restaurant", id)
    //     fetch("http://localhost:3000/favorites/", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify({
    //             restaurant_id: id,
    //             user_id: this.props.user.user_id
    //         })
    //     })
    //     .then(resp=>resp.json())
    //     .then(data=>
    //         // console.log("post fav fetch data", data.user)
    //         <Favorites user={data.user}/>
    //         )

    // }

    render(){
        return (
            <View>

            {this.state.cardClicked ? <RestaurantsCard addHandler={this.props.addHandler} obj={this.props.obj}/> : 
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
                    <Button onPress={() => this.props.addHandler(this.props.obj.restaurant_id)} title="Add to Favorites" icon={{name: "add", color: "white"}} />
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