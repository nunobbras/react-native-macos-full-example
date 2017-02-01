/* @flow */
'use strict';

import React, {Component, View, StyleSheet, Image, TouchableHighlight} from 'react-native-desktop';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {changeComponent} from "../actions"
import {Card, CardItem, List, Text, Thumbnail, Icon, Title, Container, Header, Content, Footer, Button} from '../node_modules_desktop/native-base_for_desktop';
import {Col, Row, Grid} from "../node_modules_desktop/react-native-easy-grid_for_desktop";
import myTheme from '../themes/myTheme'
import StarsEval from './starsEval'



export default class PercentageStarsEval extends Component {

  render() {



    return (
            <View style={{flexDirection: 'column', justifyContent:"center", height:100, width: 200, borderRadius:20, borderWidth:1, borderColor:"#F5F5F5", backgroundColor:"#F5F5F5"}}>
                <StarsEval percentage={!!this.props.percentage?this.props.percentage:undefined} />
              <View style={{flexDirection: 'row', justifyContent:"center", marginTop:0}}>                
                <Text note style={{fontSize:15}}>{this.props.percentage}%</Text>                                
              </View> 
            </View> 
      )
    };
};



const styles ={
  card: {  
    flexDirection: 'row',
    flex:0, 
    margin:30,
    justifyContent: 'center',    
  },
  carditemheader:{
    backgroundColor:"#F5F5F5",    
  },
};

