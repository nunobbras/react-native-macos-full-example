/* @flow */
'use strict';
import React, {Component, View, Text, StyleSheet, Image, TouchableHighlight, AlertIOS} from 'react-native-desktop';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {List, Thumbnail, Icon, Title, Container, Header, Content, Footer, Button} from '../node_modules_desktop/native-base_for_desktop';
import {Col, Row, Grid} from "../node_modules_desktop/react-native-easy-grid_for_desktop";

import myTheme from '../themes/myTheme'

export default connect(mapStateToProps, mapDispatchToProps)(class CertificationCodeCard extends Component {

  
  render() {

    return (

          <Grid style={{paddingTop: 20, paddingBottom:20}}>     
            <Row>
              <Col size={25}/>
              <Col size={50}>
                <Text style={{paddingTop:10, textAlign: 'center', color:myTheme.brandGreyLight, fontSize:25}}>                
                  Certification Code
                </Text>
              </Col>
              <Col size={25}/>
            </Row>
            <Row style={{top: 10, paddingTop: 10}}>
              <Col size={25}/>
              <Col size={50}>
                <Text style={{paddingTop:10, textAlign: 'center', color:myTheme.brandGreyLight, fontSize:15}}>                
                  This is your Certification Code:
                </Text>
              </Col>
              <Col size={25}/>
            </Row>
            <Row style={{top: 10, paddingTop: 10}}>
              <Col size={25}/>
              <Col size={35}>
                <View style={[styles.offer,{overflow:"visible", flexDirection: 'column', alignItems:"center"}]}>
                  <Text style={{paddingTop:20, paddingBottom:20, fontWeight:"bold", fontSize:40}}>{this.props.currentAssessmentCode} </Text>
                </View> 
              </Col>
              <Col size={25}/>
            </Row>
            <Row style={{top: 10, paddingTop: 10}}>
              <Col size={25}/>
              <Col size={100}>
                <Text style={{paddingTop:20, textAlign: 'left', color:myTheme.brandGreyLight, fontSize:15}}>                
                                  <Text style={{paddingTop:20, textAlign: 'left', color:myTheme.brandPrimary, fontWeight:"bold", fontSize:15}}>Remember:</Text> Do not change anything in your laptop until it is delivered to the buyer. A fast inspection looking for changes in the device will run periodically, and this code will change if something was changed in the device.                  
                </Text>
              </Col>
              <Col size={25}/>
            </Row>
            <Row style={{paddingTop: 10}}>
              <Col size={25}/>
              <Col size={100}>
                <Text style={{paddingTop:20, textAlign: 'left', color:myTheme.brandPrimary, fontWeight:"bold", fontSize:15}}>                
                  When the Buyer receives the device, he will compare this code with a copy he has of his own. He will only accept the deal if the codes match.
                </Text>
              </Col>
              <Col size={25}/>
            </Row>
          </Grid> 

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
  footer: {
    height: 50,
    backgroundColor:myTheme.brandGreyDark, 
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor:"#000", 
    borderTopWidth:1,    
  },
  NextButton: {    
    width:100, 
    paddingRight:20,
    backgroundColor:myTheme.brandPrimary
  },
  PrevButton: {
    width:100,
    paddingLeft:20,
    backgroundColor:myTheme.brandPrimary
  },  
  offer:{
    paddingTop:20,
    paddingBottom:20,
    paddingLeft:40,
    paddingRight:40,
    borderRadius:10,
    borderColor:'#000',
    backgroundColor:"#F5F5F5",
  },
  box:{
    backgroundColor:myTheme.brandGreyDark, 
    margin:20,
    marginTop:10,    
    borderColor:myTheme.brandPrimaryDarkX, 
    borderWidth:1, 
    borderRadius:7, 
    padding:10    
  }  
};
