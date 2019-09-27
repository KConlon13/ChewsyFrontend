import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

class RestaurantSpecs extends React.Component {
    
    render(){
        console.log("This is favorited restaurants of that user from props: ", this.props.user.restaurants, 
        "And this is the props obj i want to compare: ", this.props.obj)
        
        return (
            <View>
                <Card title={this.props.obj.name} containerStyle={{borderColor: "orange", shadowRadius: 5}}>

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
                    <Button title="Already Favorited!" buttonStyle={{backgroundColor: "#FF6700", opacity: 0.4}} /> : 
                    <Button raised onPress={() => this.props.addHandler(this.props.obj.restaurant_id)} title="Add to Favorites" icon={{name: "star", color: "white"}} buttonStyle={{backgroundColor: "#FF6700"}} />
                    }

                 </Card>
            </View>
    
        )
    }
}


const styles = StyleSheet.create({

    })
    
export default RestaurantSpecs;