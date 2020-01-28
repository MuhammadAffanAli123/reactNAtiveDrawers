import React, { Component }  from 'react';
import { View, Text , Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import App1 from './App1'
import  HomeScreen from './home'
import AboutScreen from './about'
//import { createDrawerNavigator } from 'react-navigation-drawer';


const AppDrawerNavigator = createDrawerNavigator({
  Home:   HomeScreen,
  About:  AboutScreen,
  App12:   App1,
}
);

const AppStackNavigator= createStackNavigator({
   " defaulter ": AppDrawerNavigator
},

{
  
  /* The header config from HomeScreen is now here */
  defaultNavigationOptions:({navigation})=> {
    return{
      title:"Nav are ammazing",
      headerLeft: <Ionicons style={{marginLeft:30}} name="md-menu" size={32} color="white" onPress={()=>{navigation.toggleDrawer()}}  /> ,
      headerStyle: {
        backgroundColor: '#25D366',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
}



 );

// const AppContainer1= createAppContainer(AppNavigator1);

 



const AppContainer= createAppContainer(AppStackNavigator);

export default class App extends Component {
  
  render() {
    return (
      
         <AppContainer/>
      
     
        
      
      
     
    );
  }
}


