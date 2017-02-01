/* @flow */
'use strict';
 

import React,  { View, StyleSheet, Animated, Component, TouchableOpacity, Image,  Modal, TextInput} from 'react-native-desktop';
import { connect } from 'react-redux';
import {changeComponent, login} from "../actions"

import {Card, CardItem, List, Text, Thumbnail, Title, Container, Content, Footer, Button, InputGroup} from '../node_modules_desktop/native-base_for_desktop';
import Icon from 'react-native-vector-icons/FontAwesome';
import myTheme from '../themes/myTheme'


export default connect(mapStateToProps, mapDispatchToProps)(class Login extends Component {
  

  render() {
    

    return (


                <View style={styles.loginlayout}>            
                  <View style={styles.loginwindow}>
                    <View>
                      <Image  style={{height: 100, resizeMode: 'contain'}} source={require('../images/logo_BW.png')}/>      
                    </View>    
                    <View >
                      <View style={{padding:10, paddingTop:20}}>
                          <Text style={{color:"#fff", fontSize:20, fontWeight:"bold", textAlign:"center"}}>Login Here</Text>                         
                      </View>
                      <View > 
                        <View>
                          <View style={{margin: 10,}}>
                            <Text style={{color:myTheme.brandGrey , textAlign:"left"}}>email</Text>                         
                            <TextInput tabIndex={1} style={styles.input} id="email" placeholder="email" />                              
                          </View>
                          <View style={{margin: 10,}}>                            
                            <Text style={{color:myTheme.brandGrey , textAlign:"left"}}>password</Text>                         
                            <TextInput tabIndex={2} style={styles.input} secureTextEntry={true} id="password" placeholder="Password" />
                          </View>
                        </View>
                        <View style={{margin: 10}}>                 
                          <Button style={{backgroundColor:myTheme.brandPrimary}} textStyle={{paddingBottom:4}} block rounded onPress={(data)=>{this.props.loginAction()}}>
                            <Text style={{color:"#fff", fontSize:16}}>Login</Text>
                          </Button>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View  style={{borderStyle:"solid", borderColor:myTheme.brandSidebar, borderTopWidth:1, width: 400, padding:30}}>
                      <View style={{flexDirection: 'row', alignItems:"center", justifyContent: 'center'}}>
                        <View style={{width:300}}>
                              <Text style={{color:myTheme.brandGreyLight}}>Signup here if you do not have an account</Text>
                        </View>    
                        <View style={{width:90}}>
                          <Button style={{backgroundColor:myTheme.brandPrimary}} textStyle={{paddingBottom:4}} block rounded onPress={(data)=>{this.props.changeComponentAction("Signup")}}>
                            <Text style={{color:"#fff", fontSize:16}}>Signup</Text>
                          </Button>                        
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
    loginAction: (data) => {dispatch(login(data))},
  };
}  
    

const styles ={
  loginlayout:{
    flexDirection: 'column',
    flex:1,
    alignItems:"center",
    justifyContent: 'space-around',
    backgroundColor:myTheme.brandGreyMidDark 
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
    height: 35
  }
};





