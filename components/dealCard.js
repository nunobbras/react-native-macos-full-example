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


export default connect(mapStateToProps, mapDispatchToProps)(class DealCard extends Component {

  
  render() {

    return (

          <Card style={styles.card}>
            <CardItem cardBody style={{paddingRight:20, paddingLeft:20, flexDirection: 'column', alignItems:"center"}}>     
                <Text style={{fontWeight:"bold"}}>Quality</Text>
                <Text note style={{fontSize:12}}>This is how we evaluate the quality of the product</Text>                            
                <View style={{flexDirection: 'column', paddingTop:20, paddingRight:40, paddingLeft:40, alignItems:"center"}}>
                  <PercentageStarsEval percentage={25} />
                </View> 
                <Text note style={{fontSize:12, fontWeight:"bold"}}>The device has good quality</Text>                                              
            </CardItem>
            <CardItem cardBody style={{paddingRight:20, paddingLeft:20,  flexDirection: 'column', alignItems:"center"}}>     
                <Text style={{fontWeight:"bold"}}>Electronic Status</Text>
                <Text note style={{fontSize:12}}>This is how we evaluate the status of the product</Text>   
                <View style={{flexDirection: 'column', paddingTop:20, paddingRight:40, paddingLeft:40, alignItems:"center"}}>
                  <PercentageStarsEval percentage={75} />
                </View> 
                <Text note style={{fontSize:12, fontWeight:"bold"}}>This device is electronically OK</Text>                                
            </CardItem>
            <CardItem cardBody style={{paddingRight:20, paddingLeft:20, flexDirection: 'column', alignItems:"center"}}>     
                <Text style={{fontWeight:"bold"}}>Physical Status</Text>
                <Text note style={{fontSize:12}}>This is how we evaluate the status of the product</Text>   
                <View style={{flexDirection: 'column', paddingTop:20, paddingRight:40, paddingLeft:40, alignItems:"center"}}>
                  <PercentageStarsEval percentage={75} />
                </View> 
                <Text note style={{fontSize:12, fontWeight:"bold"}}>This device is electronically OK</Text>                                
            </CardItem>
          </Card>
    )
  };
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
  card: {  
    flexDirection: 'row',
    flex:0, 
    marginLeft:40,
    marginRight:40,
    marginTop:10,
    justifyContent: 'center',    
  },
  carditemheader:{
    backgroundColor:"#F5F5F5",    
  },
};

