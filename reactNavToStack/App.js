//This is an example code for Bottom Navigation//
import React from 'react';
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
//import all the basic component we have used
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons to show the icon for bottom options

//import React Navigation
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './pages/Home';
import Booking from './pages/Booking';
import Inbox from './pages/Inbox';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Regis from './pages/Regis';
import Pemesanan from './pages/Pemesanan';


const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: { screen: Home },
    PemesananCustomer : { screen : Pemesanan},
    //Details: { screen: DetailsScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Home',
      //Header title
    },
  }
);
const BookingStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Booking: { screen: Booking }
    //Detail: { screen: DetailsScreen },
    //Profile: { screen: ProfileScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings',
      //Header title
    },
  }
);
const InboxStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Inbox: { screen: Inbox }
   // Details: { screen: DetailsScreen },
    //Profile: { screen: ProfileScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings',
      //Header title
    },
  }
);

const ProfileStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Profile: { screen: Profile }
   // Details: { screen: DetailsScreen },
    //Profile: { screen: ProfileScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings',
      //Header title
    },
  }
);
const App = createBottomTabNavigator(
  {
    Home: { screen: Home },
    Booking: {screen: Booking},
    Inbox: { screen: Inbox },
    Profile: {screen : Profile},

  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        
        if (routeName === 'Home') {
        
          }
         else if (routeName === 'Booking') {
          
          }
        
        else if (routeName === 'Inbox') {
         
        }
        else if (routeName === 'Profile') {
          
        }
          },
    }),
    tabBarOptions: {
      activeTintColor: '#670099',
      inactiveTintColor: 'gray',
    },
  }
);
export default createAppContainer(App);