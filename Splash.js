import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import chewsyLogo from "./assets/chewsyLogo.png"
import App from "./App"

class Splash extends React.Component {
    render(){
        return(
            <View style={styles.page}>
            <Image style={styles.logo} source={chewsyLogo}/>
            {/* <App/> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#FF6700"
    },
    logo: {
        marginTop: 300,
        alignSelf: "center",
        resizeMode:'contain',
        height: 150,
        width: 150,
        marginLeft: 15,
    }
})


export default Splash;