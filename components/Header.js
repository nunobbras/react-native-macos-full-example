/* @flow */
'use strict';

import React,  { View, StyleSheet, Animated, Component, TouchableOpacity, Image} from 'react-native-desktop';

import { connect } from 'react-redux';
import {changeComponent} from "../actions"

import {Card, CardItem, List, Text, Thumbnail, Title, Container, Content, Footer, Button} from '../node_modules_desktop/native-base_for_desktop';
import Icon from 'react-native-vector-icons/FontAwesome';


export default connect(mapStateToProps, mapDispatchToProps)(class Header extends Component {
  
  loginMgr(){
    

    if (!!this.props.useridSession){
      this.props.changeComponentAction("UserProfile")
    }
    else{
      this.props.changeComponentAction("Login")
    }
  }

  render() {

    let UserName = <Text style={styles.userText}>Login here</Text>;

    if (!!this.props.useridSession)
      UserName = <Text style={styles.userText}>Hi, {this.props.emailSession}</Text>

    return (
            <View style={styles.topPanel}>
              <View style={{width:200}}>              
              </View>              
              <View style={{flex:1}}>
                <Text style={styles.topPanelText}>Inspector App - Great Deals With a Click</Text>
              </View>
              <View >
                <TouchableOpacity onPress={() => this.loginMgr()}> 
                  <View style={styles.user} >
                    {UserName}
                    <Icon name="user" size={15} color="#fff"/>
                  </View>
                </TouchableOpacity>
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


var styles = {
  // ------------ header

  user: {    
    flexDirection: 'row',
    alignItems:"flex-end",
    paddingRight:25,
    paddingBottom:10,
  },
  userText: {
    fontSize:11,
    textAlign:"right",
    color:"#fff",
    width: 250,
    paddingBottom:-7,
    paddingLeft:10,

  },
  topPanel: {   
    flexDirection: 'row',
    justifyContent: "center", 
    alignItems:"center", 
    paddingTop:10,     
    height: 40,
    backgroundColor: '#282828',
    borderColor: "#000",
    borderStyle:"solid",
    borderBottomWidth:1    
  },  
  topPanelText:{
    color:"#A6A8AB",
    paddingBottom:10,
    textAlign:"center",
  },
}
