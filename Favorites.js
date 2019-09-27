import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { ThemeProvider, Text } from 'react-native-elements';
import FavRestaurantsCard from './FavRestaurantsCard'


class Favorites extends React.Component {
    static navigationOptions = {
        header: null,
     };
    render(){
        let restaurantsComponent = this.props.favRestaurants.map(rest => {
            return <FavRestaurantsCard deleteHandler={this.props.deleteHandler} key={rest.restaurant_id} obj={rest}/>
        })
        
        return (
            <View style={styles.page}>
            <ScrollView contentContainerstyle={styles.contentContainer } ref={ref => this.scrollView = ref}
            onContentSizeChange={(contentWidth, contentHeight)=>{        
                // this.scrollView.scrollToEnd({animated: true});
            }}>
            <Text style={styles.title} h5>Favorite Restaurants</Text>
                {restaurantsComponent}
            </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        height: 700
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        paddingBottom: 15,
        color: "#FF6700",
        fontSize: 22,
        paddingTop: 23,
        paddingBottom: 32
    }
})

export default Favorites;