/* @flow */
'use strict';

import React, {Component, View, StyleSheet, Image, TouchableHighlight} from 'react-native-desktop';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Card, CardItem, List, Text, Thumbnail, Icon, Title, Container, Header, Content, Footer, Button} from '../node_modules_desktop/native-base_for_desktop';
import {Col, Row, Grid} from "../node_modules_desktop/react-native-easy-grid_for_desktop";
import * as moment from "moment";

import myTheme from '../themes/myTheme'
import * as schemas from '../dataSchemas';
import ActiveInspectionStatusTableItem from './activeInspectionStatusTableItem';


export default connect(mapStateToProps, mapDispatchToProps)(class ActiveSaleStatus extends Component {



  pricingType(data){
    return this.props.sale[data[0]]=="low"?"3 Working Days":"Best Offer"
  }

  pricingValue(data){
    return data[0]
  }
  dateWDFormat(data){
    // let _date = data[0]
    // console.log(_date)
    // let _x = moment(date)
    // console.log(_x)
    return data[0]
  }


  generateTable(){
    let _value;
    
    return schemas.ActiveSaleItems.map((item, i) =>{
        console.log(item.field,this.props.sale[item.field])
        let _func = !!item.function?this[item.function](item.field):""        
        _value = !item.function?this.props.sale[item.field]:_func
        if (item.field =="user"){
          _value = this.props.emailSession
        }
        if (item.field =="product"){
          _value = this.props.sale.product.serial_number
        }
      //let dummyValues = ["18/05/2016 7:20:45 PM", "Nuno Brás", "No Changes in Device", "3 Working Days", "450€", "in 2 Days", "in 4 Days"]
      return <ActiveInspectionStatusTableItem key={i} title={item.title} value={_value}/>})    
  }
  
  render() {

    return (

            <Grid>     
              <Row size={5} style={{paddingTop: 10}}>
                <Col size={0}/>
                <Col size={25}>
                  <Text style={{paddingTop:10, textAlign: 'center', color:myTheme.brandGreyLight, fontSize:25}}>                
                    Details
                  </Text>
                </Col>
                <Col size={5}/>
              </Row>
              <Row style={{marginTop: 10}}/>                            
              {this.generateTable()}
              <Row style={{marginBottom: 30}}/>                                          
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
  tableTitle:{
    textAlign: 'left', 
    color:myTheme.brandGreyLight, 
    fontSize:12
  },  
  tableValue:{
    textAlign: 'right', 
    color:myTheme.brandGreyLight, 
    fontSize:10
  },  

};

