import React from 'react';
import { StyleSheet, Text, View, Image, AsyncStorage } from 'react-native';
import { SearchBar, Header } from 'react-native-elements'
// import Map from "./Map"
import chewsyLogo from "./assets/chewsyLogo.png"
import Login from "./Login"
import Signup from "./Signup"
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Favorites from "./Favorites"
import RestaurantsContainer from './RestaurantsContainer';




class App extends React.Component {
  state={
    restaurantsArray: [],
    memberAlready: false
  }

  static navigationOptions = {
    header: null,
 };


  componentDidMount(){
    fetch("http://localhost:3000/restaurants")
    .then(response=>response.json())
    .then(data => this.setState({restaurantsArray: data})) 
  }






  clickHandler=(state)=>{
      console.log(state.Object)
      let username = state.username
      let password = state.password
      alert(username)
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
      .then(response=>response.json())
      .then(data=>{
        if (data.error){
          alert("Invalid Username/Password")
        } else {
          _storeData = async () => {
            try {
              alert("storing")
              await AsyncStorage.setItem('token', data.token);
            } catch (error) {
              alert("storing error")
            }
          };
        this.navigation.navigate('Favorites')
        }
      })
      .catch(()=>alert("Oops, our app might be having an allergic reaction"))
  }






  loginHandler=(state)=>{
    this.setState({
      memberAlready: !this.state.memberAlready
    })
    console.log(this.state.memberAlready)
  }







render(){
  let restaurantComponents = this.state.restaurantsArray.map(rest => <Text style={styles.restList} key={rest.restaurant_id}>{rest.name}</Text>)

  return (
    <View style={styles.page}>

      <Header style={styles.header}>
      <Image style={styles.logo} source={chewsyLogo}/>
      </Header>

        <View style={styles.centerForm}>
        <Text></Text>
        {/* {this.state.memberAlready ? < Login clickHandler={this.clickHandler} loginHandler={this.loginHandler}/> : < Signup clickHandler={this.clickHandler} loginHandler={this.loginHandler}/>} */}

        {/* <Favorites /> */}
        <RestaurantsContainer restaurantsArray={this.state.restaurantsArray} style={styles.restaurants}/>

        {/* <Text style={styles.restListTitle} >Restaurant List</Text>
        {restaurantComponents} */}
        {/* <Map /> */}
        {/* <SearchBar
          placeholder='Type Here...' style={styles.searchbar}/> */}

      </View>

    </View>
  );
}
}





const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
  },
  Login: {
    screen: Login,
  },
  Signup: {
    screen: Signup,
  },
  Favorites: {
    screen: Favorites,
  },
}, {
initialRouteName: 'Home'
},
);





const styles = StyleSheet.create({
  centerTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  // centerForm: {
  //   marginTop: 80
  // },
  page: {
    flex: 1,
    backgroundColor: "powderblue"
  },
  restList: {
    textAlign: "center"
  },
  restListTitle: {
    fontSize: 22, 
    textAlign: "center",
    paddingTop: 30,
    textDecorationLine: "underline"
  },
  logo: {
    marginTop: 0,
    resizeMode:'contain',
    height: 120,
    width: 120,
    marginLeft: 125,
  }
})




export default createAppContainer(AppNavigator);

