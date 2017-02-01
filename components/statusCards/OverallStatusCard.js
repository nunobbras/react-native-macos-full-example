/* @flow */
'use strict';

import React, {Component, View, StyleSheet, Image, TouchableHighlight, Text} from 'react-native-desktop';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import {Card, CardItem, List, Text, Thumbnail, Icon, Title, Container, Header, Content, Footer, Button} from '../node_modules_desktop/native-base_for_desktop';
import {Col, Row, Grid} from "../../node_modules_desktop/react-native-easy-grid_for_desktop";

import myTheme from '../../themes/myTheme'
import PercentageStarsEval from '../percentageStarsEval'


export default class OverallStatusCard extends Component {

  
  render() {


    return (
            <View style={{width:220, margin:20, padding:20,  flexDirection: 'column', alignItems:"center"}}>       
                <Text style={{marginBottom:10, fontSize:15, fontWeight:"bold", color:myTheme.brandPrimaryLight}}>{this.props.title}</Text>
                <Text note style={{height:40, fontSize:12, color:myTheme.brandGreyLight}}>{this.props.desc}</Text>   
                <View style={{flexDirection: 'column', paddingTop:10, paddingRight:40, paddingLeft:40, alignItems:"center"}}>
                  <PercentageStarsEval percentage={this.props.percentage} />
                </View> 
                <View style={{flexDirection: 'row', justifyContent:"center", marginTop:10, marginBottom:10}}>                              
                  <Text note style={{fontSize:14, fontWeight:"bold", color:myTheme.brandGreyLight}}>{this.props.percentageComment}</Text>                            
                </View>                   
            </View>
    )
  };
}


