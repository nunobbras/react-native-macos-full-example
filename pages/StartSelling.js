/* @flow */
'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {changeComponent, createAssessment, syncAssessment, getSalebySerial, createSale, updateSale, getSerial} from "../actions"
import React, {Component, View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native-desktop';
import {Thumbnail, Icon, Title, Container, Header, Content, Footer, Button} from '../node_modules_desktop/native-base_for_desktop';
import {Col, Row, Grid} from "../node_modules_desktop/react-native-easy-grid_for_desktop";

import Square from "../components/Square";
import LayoutTitle from "../components/LayoutTitle";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import myTheme from '../themes/myTheme'
import * as schemas from '../dataSchemas';



export default connect(mapStateToProps, mapDispatchToProps)(class StartSelling extends Component {


  componentDidMount(){
    console.log("starting did mount... get Serial")
    this.props.getSerialAction()
  }  

  startInspection(){
    this.props.changeComponentAction("CheckDataWaiting")
    // if (!!this.props.currentAssessment){
    //   this.props.syncAssessmentAction(this.props.assessment[this.props.currentAssessment]);
    // }    
    
  }

  _onPressfuncDebug(){
    this.props.createAssessmentAction()
  }

  render() {


    let _textBefore = "Before proceed login or signup"
    let _textButton = "Login or Signup"
    let _onPressfunc = (data)=>{this.props.changeComponentAction("Login")}
    let _icon = <FontAwesome style={{marginRight:5, color:"#fff", fontSize:15}} name="user" />
    let _disabled = false

    if (!!this.props.useridSession){
      if (!!this.props.sale){
      _textBefore = "You're logged in and you already have an active sale. Inspection will only reevaluate the sale data."
      _textButton = "Inspect Again"  
      }
      else{
        _textBefore = "You're logged in."
        _textButton = "Start Inspection"
      }
      _onPressfunc = (data)=>{this.startInspection()}

      _icon = <Icon style={{marginRight:5}} name="ios-search" />
    }

    if (!!this.props.networkProblem){
      _disabled = true
    }    


    let debug_button = <View/>;

    if (__DEV__){      
      debug_button = 
            <Row style={{paddingTop:5, marginBottom:25}}>              
              <Col size={40}/>
              <Col size={5}>      
                <Button block rounded onPress={this._onPressfuncDebug.bind(this)}>
                  <View style={{flexDirection: 'row',    alignItems:"center", justifyContent: 'space-around', }}>  
                    <Text style={{color:"#fff", fontSize:16}}>gen. assess (debug)</Text>
                  </View>    
                </Button>                          
              </Col>
              <Col size={5}/>
            </Row>
    }

    let proceed=
          <View>
            <Row style={{paddingTop:10}}>
              <Col size={40}/>
              <Col size={50}>
                  <View >          
                    <Text style={{textAlign:"center", paddingBottom:10, fontSize: 13, fontWeight: "bold", color:"#fff"}}>{_textBefore}</Text>            
                  </View>                                                         
              </Col>
              <Col size={40}/>
            </Row>              
            <Row style={{paddingTop:5, marginBottom:25}}>              
              <Col size={40}/>
              <Col size={25}>
                  <Button style={{backgroundColor:_disabled?myTheme.brandPrimaryDisabled:myTheme.brandPrimary }} block disabled={_disabled} rounded onPress={_onPressfunc}>
                    <View style={{flexDirection: 'row',    alignItems:"center", justifyContent: 'space-around', }}>  
                      {_icon}
                      <Text style={{color:"#fff", fontSize:16}}>{_textButton}</Text>
                    </View>    
                  </Button>                                            
              </Col>
              <Col size={40}/>              
            </Row>   
          </View>                                 

    console.log("starting render")

    return (
            <Container>
                <Content style={{backgroundColor:myTheme.brandGreyMidDark}} theme={myTheme}>
                  <Grid>                  
                      <LayoutTitle title="Start Inspecting" />                                                     
                      <Row style={{padding:10}}>             
                        <Square relSize={40} mainIcon="ios-laptop" Title="Let's Start" Desc="We will make a 20 seconds sweep over your device to understand what is it and how is the electronic status." />
                        <Icon style={{color:myTheme.brandPrimary, fontSize:35, top:50}} name="ios-play"/>
                        <Square relSize={60} mainIcon="ios-camera" Title="Prepare your Smartphone Camera!" Desc="We need some pictures of your device. Just click on 'start inspection' at the bottom of the page, prepare your smartphone camera and follow the instructions." />
                      </Row>
                      {proceed}
                      {debug_button}
                  </Grid>                  
                </Content>
            </Container>   
    )
  };
});

function mapStateToProps(state) {
  return state;
}



function mapDispatchToProps(dispatch, getState) {
  return {
    changeComponentAction: (data) => {dispatch(changeComponent(data))},
    updateSaleAction: (data) => {dispatch(updateSale(data))},
    createSaleAction: (data) => {dispatch(createSale(data))},
    getSalebySerialAction: (data) => {dispatch(getSalebySerial(data))},
    getSerialAction: (data) => {dispatch(getSerial(data))},
    createAssessmentAction: (data) => {dispatch(createAssessment(data))},
  };
}  




const styles = StyleSheet.create({



});
