import React, { Component } from 'react';
import { AppRegistry, TextInput , View , Text  , Button ,  DrawerLayoutAndroid} from 'react-native';
import { disableExpoCliLogging } from 'expo/build/logs/Logs';
import firebase from './firebase';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import 'firebase/firestore';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//const db= firebase.firestore();
var auth = firebase.auth()
const db= firebase.firestore(); 
export default class App1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
       text: "",
      text1:"",
      text3:"",
     
      };
  }
  login =(e)=>{
    var email=this.state.text 
    var name=this.state.text1 
    var password=this.state.text3   
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((res)=> {
        alert('Registered Successfully!');
        this.props.navigation.navigate("About")
        //this.props.navigation.navigate("About")
        console.log('res =>', res.user.uid);

        db.collection('nativeLogin').doc(res.user.uid).set({email,name,password})
        .then(() => {
            console.log('Added in db');
           
         })
         .catch((e) => {
             console.log('error Adding in db');
         })
    })
    .catch(function(error) {
         //Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         console.log(errorMessage);
         alert(errorMessage)
        
      });


      
  }
  static navigationOptions = {
    title: 'SignUP',
    drawerIcon: ( ) => (
      <MaterialCommunityIcons name="account-box" size={32} color="blue" />
    ),
  };


  render() {
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
      </View>
    );
    const {text} = this.state
    return (
      <View >
        <View style={{marginTop:200 ,marginLeft:30 ,marginRight:30 }}>
        <Text style={{alignItems:"center", alignContent:"center"}}>
        Email
      </Text>
         <TextInput
        style={{height: 40,width:300, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      {console.log(this.state.text)}
      
      <Text style={{alignItems:"center", alignContent:"center"}}>
       Name
      </Text>
      <TextInput
        style={{height: 40, width:300,borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text1 : text})}
        value={this.state.text1}
      />
      {console.log(this.state.text)}
     
      <Text style={{  marginRight: 300, width:70}}>
       Password
      </Text>
      <TextInput
        style={{height: 40,width:300, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text3:text})}
        value={this.state.text3}
      />
      {console.log(this.state.text3)}
      <View  style={{ color:"pink" , marginRight: 30, width:200 , marginTop:30 , marginLeft:45}}>
      <Button
          title="Login  "
          onPress={this.login}
          
        />
      </View>
      

           
      </View>
      <View style={{ color:"pink" , marginRight: 30, width:200 , marginTop:30 , marginLeft:75}}>
      <Button
        title="About"

        onPress={()=>{this.props.navigation.navigate("About")}}
        />

      </View>
      <View style={{ color:"pink" , marginRight: 30, width:200 , marginTop:30 , marginLeft:75}}>
      <Button    title="Home"  
         onPress={()=>{this.props.navigation.navigate("Home")}}
        />

      </View>
     
       
      </View>
     
    );
  }
}