/* @flow */
'use strict';

import React, {Component, View, StyleSheet, Image, TouchableHighlight} from 'react-native-desktop';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Card, CardItem, List, Text, Thumbnail, Icon, Title, Container, Header, Content, Footer, Button} from '../node_modules_desktop/native-base_for_desktop';
import {Col, Row, Grid} from "../node_modules_desktop/react-native-easy-grid_for_desktop";
import myTheme from '../themes/myTheme'



export default class StarsEval extends Component {



  starCalc(percentage){
    
    let rank = Math.floor(percentage/20)+1
    //console.log(rank)

    let _icon=[];
    let _color="";

    switch(rank) {
      case 1:
          _icon[0] = "ios-star-outline"; _icon[1] = "ios-star-outline"; _icon[2] = "ios-star-outline"; _icon[3] = "ios-star-outline"; _icon[4] = "ios-star";
          _color = "red"; 
          return {_icon, _color}
          break;
      case 2:
          _icon[0] = "ios-star-outline"; _icon[1] = "ios-star-outline"; _icon[2] = "ios-star-outline"; _icon[3] = "ios-star"; _icon[4] = "ios-star";
          _color = "#f0ad4e";
          return {_icon, _color}
          break;
      case 3:
          _icon[0] = "ios-star-outline"; _icon[1] = "ios-star-outline"; _icon[2] = "ios-star"; _icon[3] = "ios-star"; _icon[4] = "ios-star";
          _color ='#f0ad4e'
          return {_icon, _color}
          break;
      case 4:
          _icon[0] = "ios-star-outline"; _icon[1] = "ios-star"; _icon[2] = "ios-star"; _icon[3] = "ios-star"; _icon[4] = "ios-star";
          _color ='rgba(75, 166, 95, 1)'        
          return {_icon, _color}
          break;
      case 5:
          _icon[0] = "ios-star"; _icon[1] = "ios-star"; _icon[2] = "ios-star"; _icon[3] = "ios-star"; _icon[4] = "ios-star";
          _color ='rgba(75, 166, 95, 1)'        
          return {_icon, _color}
          break;
      default:
          _icon[0] = "ios-star-outline"; _icon[1] = "ios-star-outline"; _icon[2] = "ios-star-outline"; _icon[3] = "ios-star-outline"; _icon[4] = "ios-star-outline";
          _color = "grey"; 
          return {_icon, _color}
          break;

      
    }
  }
  
  render() {


    let chars = this.starCalc(this.props.percentage)
    let starSize = this.props.starSize;
    const {_icon, _color} = chars;
    !starSize?starSize=20:starSize =starSize;

    return (
            
              <View style={{flexDirection: 'row', justifyContent:"center", marginTop:0}}>
                <Icon style={{color:_color, fontSize:starSize}} name={_icon[4]} />
                <Icon style={{color:_color, fontSize:starSize}} name={_icon[3]} />
                <Icon style={{color:_color, fontSize:starSize}} name={_icon[2]} />
                <Icon style={{color:_color, fontSize:starSize}} name={_icon[1]} />                              
                <Icon style={{color:_color, fontSize:starSize}} name={_icon[0]} />                              
              </View>

      )
    };
};



const styles ={

};

