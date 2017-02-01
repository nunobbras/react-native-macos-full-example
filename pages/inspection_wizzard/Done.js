/* @flow */
'use strict';
import React, {Component, View, Text, StyleSheet, Image, TouchableHighlight, AlertIOS} from 'react-native-desktop';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {List, Thumbnail, Icon, Title, Container, Header, Content, Footer, Button} from '../../node_modules_desktop/native-base_for_desktop';
import {Col, Row, Grid} from "../../node_modules_desktop/react-native-easy-grid_for_desktop";

import {changeComponent} from "../../actions"
import LayoutTitle from "../../components/LayoutTitle";
import CertificationCodeCard from "../../components/CertificationCodeCard";
import SaleDeliveryProcessCard from "../../components/SaleDeliveryProcessCard";
import PricingCard from "../../components/PricingCard";
import myTheme from '../../themes/myTheme'

export default connect(mapStateToProps, mapDispatchToProps)(class Done extends Component {

  
  render() {

    return (

      <Container>
          <Content style={{backgroundColor:myTheme.brandGreyMidDark}} theme={myTheme}>
            <Grid>     
              <LayoutTitle title="Confirmation Page"/>      
              <Row style={styles.box}>
                <CertificationCodeCard/>
              </Row>         
              <Row style={styles.box}>
                <PricingCard/>
              </Row>                  
              <Row style={styles.box}>
                <SaleDeliveryProcessCard/>
              </Row>               
              <Row>
                <Grid style={{margin:110}}>   
                  <Row style={styles.box}>
                    <Col size={250} style={{margin:20}}>
                      <Text style={{color:"#fff", fontSize:14, margin:5}}>By placing this order you do not need to pay any amount or commit to sell your equipment. </Text>
                      <Text style={{color:"#fff", fontSize:14, margin:5}}>You are saying that you are aware with the proposed business model in case an offer is suggested.</Text>
                    </Col>
                    <Col size={170} >
                      <Grid>   
                        <Row size={50}/>
                        <Row size={50}>
                          <Col>
                            <Button style={{backgroundColor:myTheme.brandPrimary}} textStyle={{paddingBottom:4}} block rounded small onPress={(data)=>{this.props.changeComponentAction("MySale")}} >
                              <Text style={{color:"#fff", fontSize:16}}>Accept Conditions</Text>
                            </Button>                    
                          </Col>
                        </Row>
                        <Row size={50}/>                        
                      </Grid>                                         
                    </Col>
                    <Col size={20}/>                    
                  </Row>
                </Grid>                     
              </Row>
          </Grid>                 
        </Content>
        <Footer style={styles.footer}>
            <Button onPress={(data)=>{this.props.changeComponentAction("Pricing")}} style={styles.PrevButton} small rounded>                      
                <Text style={{color:"#fff", fontSize:16}}>back</Text>
            </Button>
            <View style={{flex:1}}></View>
        </Footer>             
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
