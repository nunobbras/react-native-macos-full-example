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
import OverallStatusCard from './statusCards/OverallStatusCard'


import * as schemas from '../dataSchemas';

export default class GeneralOpinion extends Component {

  
  render() {

    let _actualEStatus
    let _actualUptoDate
    let _actualPhysStatus
    let _percentageCommentUptoDate
    let _percentageCommentEStatus


    if (!!this.props.assessment){
      _actualEStatus = this.props.assessment.overall_electronic_status
      _actualUptoDate = this.props.assessment.overall_uptodate

      _percentageCommentUptoDate = schemas.statusComments.filter((item)=>{return item.maxValue >_actualUptoDate})[0].text
      _percentageCommentEStatus =  "Electronically " + schemas.statusComments.filter((item)=>{return item.maxValue >_actualUptoDate})[0].text      

    }

    return (

          <View style={styles.card}>
            <OverallStatusCard title = "Up To Date Status" desc = "How actual is this device" percentage={_actualUptoDate} percentageComment={_percentageCommentUptoDate} />
            <OverallStatusCard title = "Electronics Condition" desc = "How is the device's electronics condition" percentage={_actualEStatus} percentageComment={_percentageCommentEStatus} />
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
    justifyContent:"space-around",   
    backgroundColor: myTheme.brandGreyDark,       
    borderColor:myTheme.brandPrimaryDarkX, 
    borderWidth:1, 
    borderRadius:7, 
  },
};

