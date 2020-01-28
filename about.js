import React , { Component }  from 'react';
import { View, Text , Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import App1 from './App1'
import  HomeScreen from './home'
import { Ionicons } from '@expo/vector-icons';
//import AboutScreen from './about'

 export default class AboutScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'About',
   
    drawerIcon: ( ) => (
      <Ionicons name="md-notifications" size={32} color="black" />
    ),
  };

  render() {
    return (
      <View style={{ color:"pink" , marginRight: 30, width:200 , marginTop:30 , marginLeft:75}}>
         <Button
        onPress={() => this.props.navigation.navigate('Home')}
        title="Go to Home"
      />
      </View>
     
    );
  }
  }