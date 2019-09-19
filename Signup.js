import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SecureTextEntry} from 'react-native';
import Favorites from "./Favorites"

class Signup extends Component {
    state={
        username: "",
        password: ""
    }



    // signup handler prob not working rn
    signupHandler=(state)=>{
        fetch("http://localhost:3000/users", {
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
              },
          method: 'POST',
          body: JSON.stringify({
            username: state.username,
            password: state.password
          }),
        })
          .then(response => response.json())
          .then(data => console.log(data))
    }




    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.centerTitle}>JOIN US JOIN US JOIN US</Text>
                <TextInput style={styles.inputBox}
                onChangeText={(email) => this.setState({email})}
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
                    <Text onPress={()=>this.signupHandler(this.state)} style={styles.buttonText} >Sign Up</Text>
                </TouchableOpacity>

                <Text>Have An Account Already? <Text style={{color: 'blue'}}
      onPress={() => this.props.loginHandler()}>Log In</Text></Text>
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
        width: 300,
        backgroundColor: '#eeeeee', 
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#002f6c',
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: '#4f83cc',
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
        fontSize: 30,
        textAlign: "center",
        // fontFamily: "Pacifico-Regular"
      },
});




export default Signup;