/* @flow */
'use strict';

import React, {Component, View, StyleSheet, Image, TouchableHighlight} from 'react-native-desktop';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {changeComponent} from "../actions"
import {Card, CardItem, List, Text, Thumbnail, Icon, Title, Container, Header, Content, Footer, Button} from '../node_modules_desktop/native-base_for_desktop';
import {Col, Row, Grid} from "../node_modules_desktop/react-native-easy-grid_for_desktop";
import myTheme from '../themes/myTheme'
import PercentageStarsEval from './percentageStarsEval'


export default class PriceProposals extends Component {

  
  render() {

    return (

          <View style={styles.card}>
            <View cardBody style={{paddingRight:40, flexDirection: 'column', alignItems:"center", justifyContent:"center"}}>
                <View style={{marginBottom:20, flexDirection: 'column', alignItems:"center", justifyContent:"center"}}>
                  <Text style={{height:40, textAlign:"center", color:myTheme.brandPrimaryLight, fontSize:20, fontWeight:"bold", paddingTop:20}}>Lower Price,</Text>
                  <Text style={{height:40, textAlign:"center", color:myTheme.brandPrimaryLight, fontSize:20, fontWeight:"bold", paddingTop:0}}>Faster Sale Schedule</Text>
                  <Text note style={{color:myTheme.brandGreyLight, fontSize:12, marginBottom:0,}}>Close this sale in </Text>
                  <Text style={{color:myTheme.brandGreyLight, fontWeight:"bold", fontSize:15}}>3 working days</Text>
                </View>
                <View style={[styles.offer,{overflow:"visible", flexDirection: 'column', alignItems:"center"}]}>
                  <Text style={{paddingTop:25, fontWeight:"bold", fontSize:40}}>{!!this.props.lowerPrice?this.props.lowerPrice:"- "} €</Text>
                </View> 
                <View style={{flexDirection:'row', justifyContent:"center", marginTop:20, marginBottom:20}}>
                    <Button style={{backgroundColor:myTheme.brandPrimary}} block rounded onPress={(data)=>{this.props.goWithLowerPrice(data)}}>
                      <Text style={{color:"#fff", fontSize:16, paddingBottom:4}}>Accept</Text>
                    </Button>                
                </View>                   
            </View>

            <View cardBody style={{paddingRight:40, flexDirection: 'column', alignItems:"center", justifyContent:"center"}}>
                <View style={{marginBottom:20, flexDirection: 'column', alignItems:"center", justifyContent:"center"}}>
                  <Text style={{height:80, color:myTheme.brandPrimaryLight, fontSize:20, fontWeight:"bold", paddingTop:20}}>Best Value for You</Text>
                  <Text note style={{color:myTheme.brandGreyLight, fontSize:12, marginBottom:0,}}>If you have time, </Text>
                  <Text style={{color:myTheme.brandGreyLight, fontWeight:"bold"}}>wait for the best offer.</Text>
                </View>
                <View style={[styles.offer,{overflow:"visible", flexDirection: 'column', alignItems:"center"}]}>
                  <Text style={{paddingTop:25, fontWeight:"bold", fontSize:40}}>{!!this.props.higherPrice?this.props.higherPrice:"- "} €</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent:"center", marginTop:20, marginBottom:20}}>
                    <Button style={{backgroundColor:myTheme.brandPrimary}}  block rounded onPress={(data)=>{this.props.goWithHigherPrice(data)}}>
                      <Text style={{color:"#fff", fontSize:16, paddingBottom:4}}>Accept</Text>
                    </Button>
              </View>   
            </View>
          </View>
    )
  };
}



const styles ={
  card: {  
    flexDirection: 'row',
    flex:0, 
    marginLeft:40,
    marginRight:40,
    marginTop:10,
    marginBottom:10,
    justifyContent: 'center',    
    backgroundColor: myTheme.brandGreyDark,       
    borderColor:myTheme.brandPrimaryDarkX, 
    borderWidth:1, 
    borderRadius:7, 
  },
  carditemheader:{
    backgroundColor:"#F5F5F5",    
  },
    offer:{

        paddingTop:20,
        paddingBottom:20,
        paddingLeft:40,
        paddingRight:40,
        borderRadius:10,
        borderColor:'#000',
        backgroundColor:"#F5F5F5",
    }
};

