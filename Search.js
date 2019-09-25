import React from 'react'
import { Picker, StyleSheet } from 'react-native'

class Search extends React.Component {
    render(){
        return (
                <Picker 
                style={styles.picker}
                onChange={(e) => this.props.changeHandler(e.target.value)}
                >
                <Picker.Item label="Sort by Allergy" value="" />
                <Picker.Item label="Peanut-Friendly" value="peanut" />
                <Picker.Item label="Gluten-Friendly" value="gluten" />
                </Picker>
        )
    }
}

const styles = StyleSheet.create({
    picker: {
        height: -100,
        width: 400,
    }
})


export default Search;