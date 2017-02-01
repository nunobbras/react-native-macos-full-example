/* @flow */
'use strict';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {changeComponent} from "../actions"

import React, {Component, View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native-desktop';
import {Thumbnail, Icon, Title, Container, Header, Content, Footer, Button} from '../node_modules_desktop/native-base_for_desktop';
import {Col, Row, Grid} from "../node_modules_desktop/react-native-easy-grid_for_desktop";
import Square from "../components/Square";
import LayoutTitle from "../components/LayoutTitle";

import myTheme from '../themes/myTheme'


export default connect(mapStateToProps, mapDispatchToProps)(class HowItWorksSell extends Component {
  
  render() {

    return (
            <Container>
                <Content style={{backgroundColor:myTheme.brandGreyMidDark}} theme={myTheme}>
                  <Grid>     
                      <LayoutTitle title="How It Works"/>
                      <Row style={{padding: 10}}>             
                        <Square relSize={33} mainIcon="ios-laptop" secondIcon="ios-search" Title="Run this Application to Sell this Device" Desc="It makes you a trusted seller, by certifying the device quality and usage status." />
                        <Icon style={{color:myTheme.brandPrimary, fontSize:35, top:50}} name="ios-play"/>
                        <Square relSize={33} mainIcon="ios-laptop" secondIcon="ios-bookmark" Title="We Sell the Device For You" Desc="Don't receive calls, emails or anything else besides the payment." />
                        <Icon style={{color:myTheme.brandPrimary, fontSize:35, top:50}} name="ios-play"/>
                        <Square relSize={33} mainIcon="ios-laptop" secondIcon="ios-star" Title="Maximize your deal value" Desc="Don't waste time and energy bargaining. Get the Fair Price." />                                                
                      </Row>
                      <Row style={{height: 100, marginTop:20}}>
                        <Col size={40}>
                        </Col>
                        <Col size={20}>
                          <Button style={{backgroundColor:myTheme.brandPrimary}} textStyle={{paddingBottom:4}} block rounded onPress={(data)=>{this.props.changeComponentAction("StartSelling")}}>
                            <Text style={{color:"#fff", fontSize:16}}>Start Selling</Text>
                          </Button>
                        </Col>
                        <Col size={40}>
                        </Col> 
                      </Row>
                  </Grid>                 
                </Content>
            </Container>          
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






const styles = StyleSheet.create({

});
