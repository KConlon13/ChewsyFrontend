import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ThemeProvider, Button } from 'react-native-elements';

class Favorites extends React.Component {
    render(){
        return (
        <ThemeProvider>
            <Button title="Hi This is Favorites Page"/>
        </ThemeProvider>
        )
    }
}

export default Favorites;