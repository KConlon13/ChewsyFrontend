import React from 'react'
import { Picker, StyleSheet, View } from 'react-native'

class Search extends React.Component {
    state={
        selectedAllergy: ""
    }

    render(){
        
        // console.log(this.state.selectedAllergy)
        return (
                <Picker 
                selectedValue={this.state.selectedAllergy}
                onValueChange={(itemValue, itemIndex)=> 
                    this.setState({selectedAllergy: itemValue})}
                    itemStyle={{height:80}}
                onChange={()=>this.props.changeHandler(this.state.selectedAllergy)}
                >
                <Picker.Item label="Sort Restaurants by Allergy" value="" />
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

// there is a delay in what is being console logged after the onChange occurs and state changes
// need to figure this out

// need to get this wired up and running, right now it just displays how i want it to

const styles = StyleSheet.create({

})


export default Search;