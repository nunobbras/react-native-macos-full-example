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

export default connect(mapStateToProps, mapDispatchToProps)(class FinalOpinion extends Component {

  
  render() {

    let _actualEStatus
    let _actualUptoDate
    let _actualPhysStatus
    let _percentageCommentUptoDate
    let _percentageCommentEStatus
    let _percentageCommentPhysStatus


    let _assessment = this.props.assessments.filter((item)=>{return item.id ==this.props.currentAssessmentId})[0]

    if (!!_assessment){
      _actualPhysStatus = this.props.sale.overall_physical_status
      _actualEStatus = _assessment.overall_electronic_status
      _actualUptoDate = _assessment.overall_uptodate

      _percentageCommentUptoDate = !!_actualUptoDate?schemas.upToDateComments.filter((item)=>{return item.maxValue >_actualUptoDate})[0].text:"no data"
      _percentageCommentEStatus =  !!_actualEStatus?"Electronically " + schemas.statusComments.filter((item)=>{return item.maxValue >_actualEStatus})[0].text:"no data"      
      _percentageCommentPhysStatus =  !!_actualPhysStatus?"Physically " + schemas.statusComments.filter((item)=>{return item.maxValue >_actualPhysStatus})[0].text:"no data"      
    }
    
     return (

          <View style={styles.card}>
            <OverallStatusCard title = "Up To Date" desc = "How actual is this device" percentage={_actualUptoDate} percentageComment={_percentageCommentUptoDate} />
            <OverallStatusCard title = "Electronics Condition" desc = "How is the device's electronics condition" percentage={_actualEStatus} percentageComment={_percentageCommentEStatus} />
            <OverallStatusCard title = "Physical Condition" desc = "How is what you told us about the device's physical condition" percentage={_actualPhysStatus} percentageComment={_percentageCommentPhysStatus} />
          </View>
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
    justifyContent:"space-around",   
    backgroundColor: myTheme.brandGreyDark,       
    borderColor:myTheme.brandPrimaryDarkX, 
    borderWidth:1, 
    borderRadius:7, 
  },

};

