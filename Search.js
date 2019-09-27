import React from 'react'
import { Picker, StyleSheet, View } from 'react-native'

class Search extends React.Component {
    state={
        selectedAllergy: ''
    }

    async allergyChanger(itemValue) {
       await this.setState({selectedAllergy: itemValue})
    }

    render(){
        return (
            <Picker 
            selectedValue={this.state.selectedAllergy}
            onValueChange={(itemValue, itemIndex)=> {
                this.allergyChanger(itemValue).then(() => 
                    this.props.changeHandler(this.state.selectedAllergy))
            }}
            itemStyle={{height:80, backgroundColor: "white", color: "#FF6700"}} >
                <Picker.Item label="Sort Restaurants by Allergy:" value="" />
                <Picker.Item label="Peanut-Friendly" value="peanut" />
                <Picker.Item label="Gluten-Friendly" value="gluten"  />
                <Picker.Item label="Wheat-Friendly" value="wheat"  />
                <Picker.Item label="Dairy-Friendly" value="dairy"  />
                <Picker.Item label="Treenut-Friendly" value="treenut"  />
                <Picker.Item label="Egg-Friendly" value="eggs"  />
            </Picker>
        )
    }
}

export default Search;