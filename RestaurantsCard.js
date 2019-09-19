import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

class RestaurantsCard extends React.Component {
    render(){
        return (
                <Card title={this.props.obj.name} >
                    <Text>{this.props.obj.location}</Text>
                    <Text></Text>
                    <Text>{this.props.obj.description}</Text>
                    <Text></Text>
                    <Text>Allergies Accommodated: </Text>
                    { this.props.obj.peanut ? <Text style={styles.allergy}>   • Peanuts</Text> : null}
                    { this.props.obj.gluten ? <Text>   • Gluten</Text> : null}
                    { this.props.obj.wheat ? <Text>   • Wheat</Text> : null}
                    { this.props.obj.dairy ? <Text>   • Dairy</Text> : null}
                    { this.props.obj.treenut ? <Text>   • Treenut</Text> : null}
                    { this.props.obj.eggs ? <Text>   • Egg</Text> : null}
                    <Text></Text>
                    <Button title="Add to Favorites" icon={{name: "add", color: "white"}}/>
                </Card>
        )
    }
}

const styles = StyleSheet.create({
    // allergy: {
    //     fontSize: 20
    // }
})

export default RestaurantsCard;