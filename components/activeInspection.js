/* @flow */
'use strict';

import React, {Component, View, StyleSheet, Image, TouchableHighlight} from 'react-native-desktop';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Card, CardItem, List, Text, Thumbnail, Icon, Title, Container, Header, Content, Footer, Button} from '../node_modules_desktop/native-base_for_desktop';
import {Col, Row, Grid} from "../node_modules_desktop/react-native-easy-grid_for_desktop";

import myTheme from '../themes/myTheme'
import PercentageStarsEval from './percentageStarsEval'
import {changeComponent} from "../actions"

export default connect(mapStateToProps, mapDispatchToProps)(class ActiveInspection extends Component {

  
  render() {

    let _codechangedAlert=
        <Text style={{paddingTop:10, textAlign: 'center', color:myTheme.brandGreyLight, fontSize:15}}>                
          This is your Certification Code:
        </Text>

    let _message =
        <Text style={{textAlign: 'center', color:myTheme.brandGreyLight, fontSize:15}}>                
          The Buyer will compare this code with his own. Do not change anything in your laptop until it is delivered to the buyer or this code will change.
        </Text>

    console.log("this.props.sale.status")
    console.log(this.props.sale.status)

    if (!!this.props.sale && !!(this.props.sale.status==11)) {
      _codechangedAlert = 
        <Text style={{paddingTop:10, textAlign: 'center', color:myTheme.brandWarning, fontWeight:"bold", fontSize:15}}>                
          Your code just changed
        </Text>                                  

      _message  = 
        <Text style={{textAlign: 'center', color:myTheme.brandWarning, fontSize:15}}>                
          The sale is now compromised. Please send us a message below explaining what have been changed and if you want to proceed with the sale.
        </Text>      

    }


    return (

            <Grid>     
              <Row size={30} style={{padding: 10}}>
                <Col size={5}/>
                <Col size={25}>
                  {_codechangedAlert}
                </Col>
                <Col size={5}/>
              </Row>
              <Row size={60}>
                <Col size={5}/>
                <Col size={25}>
                  <View style={styles.offer}>
                    <Text style={{paddingTop:40, paddingBottom:20, textAlign:"center", fontWeight:"bold", fontSize:40}}>{this.props.currentAssessmentCode}</Text>
                  </View> 
                </Col>
                <Col size={5}/>
              </Row>
              <Row size={5} />
              <Row size={60} style={{marginTop:20, marginBottom:20}}>
                <Col size={5}/>
                <Col size={35}>
                  {_message}
                </Col>
                <Col size={5}/>
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
  offer:{
    paddingTop:20,
    paddingBottom:20,
    paddingLeft:40,
    paddingRight:40,
    borderRadius:10,
    borderColor:'#000',
    backgroundColor:"#F5F5F5",
  },  
};

