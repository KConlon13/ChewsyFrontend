import React from 'react';
import { StyleSheet, Text, View, Image, AsyncStorage } from 'react-native';
import { SearchBar, Header, Icon } from 'react-native-elements'
// import Map from "./Map"
import chewsyLogo from "./assets/chewsyLogo.png"
import Login from "./Login"
import Signup from "./Signup"
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Favorites from "./Favorites"
import RestaurantsContainer from './RestaurantsContainer';
// import { Icon } from 'react-native-material-ui'


class App extends React.Component {
  state={
    restaurantsArray: [],
    memberAlready: false,
    favButtonClicked: false,
    loggedIn: false,
    user: "", 
    favRestaurants: []
  }
  
  static navigationOptions = {
    header: null,
  };
  
  // autologin
  // componentWillMount(){
  //   autoLogin()
  // }
  
  // autoLogin = () => {
  //   _retrieveData = async () => {
  //  try {
  //    const value = await AsyncStorage.getItem('token');
  //    if (value !== null) {
  //      fetch(`http://localhost:3000/autologin`, {
  //        headers: {
  //          'accept': 'application/json', 
  //          Authorization: value
  //         }
  //       })
  //       .then(resp=>resp.json())
  //       .then(data => {
  //         if (data.error){
  //           alert(date.error)
  //         }else {
  //           // AsyncStorage.setItem('user', data.user_name)
  //           this.setState({
  //               user: data
  //             })
  //             console.log("autologin data", data)
  //           }
  //         }
  //         )
  //       }
  //     } catch (error) {
  //       alert("user not found")
  //     }
  //   };
  //   _retrieveData()
  // }
  // end of autologin
  
  
  componentDidMount(){
    fetch("http://localhost:3000/restaurants")
    .then(response=>response.json())
    .then(data => this.setState({restaurantsArray: data})) 
  }
  
  
  clickHandler=(state)=>{
    console.log("LOGIN STATE: ", state)
    let username = state.username
      let password = state.password
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
        console.log("DATA AFTER FETCH", data)
        if (data.token === undefined){
          alert("Invalid Username/Password")
        } else {
          this.setState({
              loggedIn: true
          })
          console.log(data.user.restaurants, this.state.loggedIn, data.token)
          _storeData = async () => {
            try {
              alert("storing")
              await AsyncStorage.setItem('token', data.token);
            } catch (error) {
              alert("storing error")
            }
          };
          _storeData();
          this.setState({
            user: data.user,
            favRestaurants: data.user.restaurants
          })
          console.log(data.user.restaurants)

          // {<Favorites user={data.user}/>}
        }
      })
  }


// Could pass data.user down as state and if its true then render each component as necessary
// Maybe as a log out you would set up a clickhandler to go up to App and clear that state so that 
// it would take you back to the log in page?
// not sure if we should be using token 



  loginHandler=(state)=>{
    this.setState({
      memberAlready: !this.state.memberAlready
    })
    console.log(this.state.memberAlready)
  }


  logoutHandler=()=>{
    this.setState({
      loggedIn: false,
      user: ""
    })
    _removeData = async () => {
      alert("You have successfully logged out?")
      try {
        alert("removing")
        await AsyncStorage.removeItem('token', (err) => {
          console.log('Local storage user info removed!');
      });
      } catch (error) {
        alert("removing error")
        return false
      }
    };
    _removeData();

    {< Login clickHandler={this.clickHandler} loginHandler={this.loginHandler}/>}
  }

  favButtonHandler=(e)=>{
    // {name} = e.target
    this.setState({
      favButtonClicked: !this.state.favButtonClicked
    })
  }

  addHandler=(id)=>{
    console.log("addhandler user", this.state.user.id, "addhandler restaurant", id)
    fetch("http://localhost:3000/favorites/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            restaurant_id: id,
            user_id: this.state.user.id
        })
    })
    .then(resp=>resp.json())
    .then(data=> {
        console.log("post fav fetch data", data)
        this.setState({
          favButtonClicked: true,
          favRestaurants: [...this.state.favRestaurants, data.favorite.restaurant],
          user: data.user
        })
      })
      console.log(this.state.user)
}


deleteHandler=(id)=>{
  let favorite = this.state.user.favorites.find(favId => favId.restaurant_id === id)
  
  console.log("deletehandler user", this.state.user.id, "deletehandler rest", id, "fav filter", favorite.id)

  let newFavorites = this.state.favRestaurants.filter(rest => rest.restaurant_id !== id)

  this.setState({
    favRestaurants: newFavorites
  })

  console.log("this is the id from delete", id)

  fetch(`http://localhost:3000/favorites/${favorite.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  })
}


render(){
  console.log('APP STATE: ', this.state)
  let favoriteComponents = this.state.favButtonClicked ? 
  <Favorites deleteHandler={this.deleteHandler} user={this.state.user} favRestaurants={this.state.favRestaurants}/> : 
  <RestaurantsContainer addHandler={this.addHandler} user={this.state.user} favRestaurants={this.state.favRestaurants} restaurantsArray={this.state.restaurantsArray} style={styles.restaurants}/>

  return (
    <View style={styles.page}>

      <Header style={styles.header}>
      {
          this.state.user == "" ? null :
          <Icon
          color="#fff"
          name="close"
          onPress={() => this.logoutHandler()}
          />
        }
      <Image style={styles.logo} source={chewsyLogo}/>
      {
          this.state.user == "" ? 
          null :
          this.state.favButtonClicked ? 
          <Icon style={styles.icon} color="#fff" name="home" onPress={this.favButtonHandler} /> :
          <Icon style={styles.icon} color="#fff" name="star" onPress={() => this.favButtonHandler()} /> 
        }

      
      </Header>
        
        <View style={styles.centerForm}>
        <Text></Text>
      
      {this.state.user !== "" ? 
      favoriteComponents :
      this.state.memberAlready ? 
      < Login clickHandler={this.clickHandler} loginHandler={this.loginHandler}/> : 
      < Signup clickHandler={this.clickHandler} loginHandler={this.loginHandler}/>}

      </View>

    </View>
  );
}
}

// Was trying to set up some conditional rendering for the favorites button
// So that when a user is logged in they will see the star and be able to click and see the fav page
// If not logged in, no star or home icon
// If button clicked, display that associative component



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
    marginLeft: 15,
  }
})




export default createAppContainer(AppNavigator);