import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SecureTextEntry, Linking} from 'react-native';

 
class Login extends Component {
    state={
        username: "",
        password: ""
    }
 
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.centerTitle}>Welcome Back</Text>
                <TextInput style={styles.inputBox}
                onChangeText={(username) => this.setState({username})}
                placeholder="Username"
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"/>
                
                <TextInput style={styles.inputBox}
                onChangeText={(password) => this.setState({password})} 
                placeholder="Password"
                secureTextEntry={true}
                type="password"
                placeholderTextColor = "#002f6c"
                />
 
                <TouchableOpacity style={styles.button}> 
                    <Text onPress={()=>this.props.clickHandler(this.state)} style={styles.buttonText} >Log In</Text>
                </TouchableOpacity>

                <Text>Don't Have An Account? <Text style={{color: 'blue'}}
      onPress={() => this.props.loginHandler()}>Sign Up</Text></Text>
            </View>
            
        )
    }
}
 
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        width: 290,
        backgroundColor: '#eeeeee', 
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#002f6c',
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: '#FF6700',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    centerTitle: {
        color: "black",
        fontWeight: "bold",
        fontSize: 25,
        textAlign: "center",
        marginTop: 20,
        marginBottom: 10
        // fontFamily: "Pacifico-Regular"
      },
});

export default Login;