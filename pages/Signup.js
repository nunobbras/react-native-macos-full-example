/* @flow */
'use strict';
 

import React,  {
  View,
  StyleSheet,
  Animated,
  Component,
  TouchableOpacity,
  Image, 
  Modal,
  TextInput,
} from 'react-native-desktop';
import { connect } from 'react-redux';
import {changeComponent} from "../actions"

import {Card, CardItem, List, Text, Thumbnail, Title, Container, Content, Footer, Button, TextInputGroup} from '../node_modules_desktop/native-base_for_desktop';
import Icon from 'react-native-vector-icons/FontAwesome';

export default connect(mapStateToProps, mapDispatchToProps)(class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      extra: "",

    };
  }
  
  _handleText(event){
  //  this.setState({[event.target.name]:event.target.value})
    //this.props.changeDealAction({listIndex:this.index, keyName:event.target.name, keyValue:event.target.value})
    //this.props.showSaveNotificationAction({index:this.index, entity:"Deal"})
  };      


  render() {
    

    return (


    <View>
        <View style={styles.loginlayout}>            
          <View style={{height:20}}>
          </View>
          <View style={styles.loginwindow}>
              <View style={{padding:5, paddingTop:10}}>
                  <Text style={{color:"#282828", fontSize:20, fontWeight:"bold", textAlign:"center"}}>Welcome to</Text>                         
              </View>
            <View>
              <Image  style={{height: 70, resizeMode: 'contain'}} source={require('../images/logo_BW.png')}/>      
            </View>    
            <View >
              <View style={{padding:5, paddingTop:10}}>
                  <Text style={{color:"#282828", fontSize:20, fontWeight:"bold", textAlign:"center"}}>SignUp Here</Text>                         
              </View>
              <View > 
                <View>
                  <View style={{margin: 3}}>
                    <Text style={{color:"#E8E8E8", textAlign:"left"}}>Name</Text>                         
                    <TextInput style={styles.input}  value={this.state.name}  onChange={this._handleText.bind(this)}  autofocus/>
                  </View>        
                </View>        
                <View >
                  <View style={{margin: 3}}>
                    <Text style={{color:"#E8E8E8", textAlign:"left"}}>email (Username)</Text>                         
                    <TextInput style={styles.input}  value={this.state.email} onChange={this._handleText.bind(this)} />
                  </View>
                </View>
                <View >
                  <View style={{margin: 3}}>
                    <Text style={{color:"#E8E8E8", textAlign:"left"}}>Password</Text>                                           
                    <TextInput style={styles.input}  value={this.state.password} onChange={this._handleText.bind(this)} />                                  
                  </View>
                </View>
                <View >
                  <View style={{margin: 3}}>
                    <Text style={{color:"#E8E8E8", textAlign:"left"}}>Password Confirmation</Text>                                                             
                    <TextInput style={styles.input}  value={this.state.extra} onChange={this._handleText.bind(this)} />
                  </View>
                </View>
                <Text>Fullfill all the fields before submit.</Text>
                <Button textStyle={{paddingBottom:1,paddingLeft:5}}  success rounded small onPress={(data)=>{this.props.changeComponentAction("Signup")}}>
                  Signup*
                </Button>
                
              </View>   
            </View>      
          </View>   
          <View  style={{borderStyle:"solid", borderColor:"#E8E8E8", borderTopWidth:1, width: 400, padding:30}}>
              <View style={{flexDirection: 'row', alignItems:"center", justifyContent: 'center'}}>
                <View style={{width:300}}>
                    <Text>If you already have an account just login here </Text>
                </View>    
                <View style={{flex:1}}>
                  <Button textStyle={{paddingBottom:1,paddingLeft:5}}  success rounded small onPress={(data)=>{this.props.changeComponentAction("Login")}}>
                    Login*
                  </Button>                    
                </View>                        
              </View>                        
          </View>                        
        </View>            
      </View>            

         
    );
  }
});

function mapStateToProps(state) {
  return state;
}



function mapDispatchToProps(dispatch) {
  return {
    changeComponentAction: (data) => {dispatch(changeComponent(data))},
  };
}  
    


const styles ={
  loginlayout:{
    flexDirection: 'column',
    flex:1,
    alignItems:"center",
    justifyContent: 'center', 
  },
  loginwindow:{
    flexDirection: 'column',
    flex:1,
    alignItems:"center",
    justifyContent: 'center',    
    //backgroundColor:"#E8E8E8",
    paddingTop:20,
    paddingBottom:20,
    paddingLeft:20,
    paddingRight:20, 
    borderRadius:10, 
    width: 400,
    //backgroundColor:"#151F34",      
  },
  input:{
    borderRadius:4,
    fontSize: 16,
    width: 250,
    height: 30
  }
};





