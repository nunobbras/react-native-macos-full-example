/* @flow */
'use strict';
import React, {Component, View, Text, StyleSheet, Image, TouchableHighlight, AlertIOS} from 'react-native-desktop';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {List, Thumbnail, Icon, Title, Container, Header, Content, Footer, Button} from '../node_modules_desktop/native-base_for_desktop';
import {Col, Row, Grid} from "../node_modules_desktop/react-native-easy-grid_for_desktop";

import myTheme from '../themes/myTheme'

export default connect(mapStateToProps, mapDispatchToProps)(class PricingCard extends Component {

  
  render() {

    let _fairprice = this.props.sale.sale_price_type==0?this.props.sale.lower_price:this.props.sale.higher_price
    let _2ndService = 50 //Fixed.


    let _priceItems = [
    {text:"Fair Price for the Device", value: Number(_fairprice) + " €", type: "parcel"},
    {text:"Client Share of 2ndHandler Service", value: _2ndService/2 + " €", type: "parcel"},
    {text:"Sale Price", value: Number(_fairprice) + _2ndService/2 + " €", type: "final"},   

    {text:"Your Share of 2ndHandler Service", value: -_2ndService/2 + " €", type: "parcel"},
    {text:"Your income", value: Number(_fairprice) - _2ndService/2 + " €", type: "final"},
 
    ]      

    let _priceLine =     _priceItems.map( (item, id)=>{        
            let _color = item.type=="final"?myTheme.brandPrimary:myTheme.brandGreyLight
            let _size = item.type=="final"?20:13
            let _line = item.type=="final"?1:0
            let _marginBottom = item.type=="final"?20:0


            return (
              <Row key={id} style={{top: 10, paddingTop: 10, marginBottom:_marginBottom}}>
                <Col size={20}/>
                <Col size={40}>
                  <Text style={{paddingTop:2, textAlign: 'left', color:_color, fontSize:_size}}>                
                    {item.text}
                  </Text>
                </Col>
                 <Col size={20} style={{borderColor:myTheme.brandGreyLight, borderTopWidth:_line}}>
                  <Text style={{paddingTop:2, textAlign: 'right', color:_color, fontSize:_size}}>                
                    {item.value}
                  </Text>
                </Col>
                <Col size={20}/>
              </Row>
          )
    })


    return (

          <Grid style={{paddingTop: 20, paddingBottom:20}}>     
            <Row style={{marginBottom:30}}>
              <Col size={25}/>
              <Col size={50}>
                <Text style={{paddingTop:10, textAlign: 'center', color:myTheme.brandGreyLight, fontSize:25}}>                
                  Payment Accounting
                </Text>
              </Col>
              <Col size={25}/>
            </Row>
            {_priceLine}
            <Row style={{marginTop: 30, marginBottom: 20}}>
              <Col size={5}/>
              <Col size={75}>
                <Text style={{textAlign: 'left', color:myTheme.brandGreyLight, fontSize:15}}>                
                  The Buyer pays 50% of 2ndHandler service and the seller pays the other 50%.
                </Text>
                 <Text style={{textAlign: 'left', color:myTheme.brandGreyLight, fontSize:15}}>                
                  Think of it as a discount you make as seller, and a sureplus we ask the buyer.
                </Text>
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
