/* @flow */
'use strict';

import React, {Component, View, StyleSheet, Image, TouchableHighlight, TextInput} from 'react-native-desktop';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Card, CardItem, List, Text, Thumbnail, Icon, Title, Container, Header, Content, Footer, Button} from '../node_modules_desktop/native-base_for_desktop';
import {Col, Row, Grid} from "../node_modules_desktop/react-native-easy-grid_for_desktop";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as moment from "moment";

import myTheme from '../themes/myTheme'
import * as schemas from '../dataSchemas';
import SaleMessageItem from './SaleMessageItem';
import {changeComponent, changeSale, getSalebySerial, createSaleMessage} from "../actions"

export default connect(mapStateToProps, mapDispatchToProps)(class ActiveSaleMessages extends Component {

  constructor(props) {
    super(props)          
      this.state = {
        text: '',
        }    
  }


  createAndSendMessage(){
    this.props.changeSaleAction({key:"pendingMessage", value:this.state.text})
    let data = {
      "sale": this.props.sale.id,
      "sender_type": 0,
      "message_text": this.props.sale.pendingMessage
    }
    this.props.createSaleMessageAction(data)
  }



  generateTable(){
    let _value;
    
    return this.props.sale.messages.map((item, i) =>{
        //console.log(item)
      //let dummyValues = ["18/05/2016 7:20:45 PM", "Nuno Brás", "No Changes in Device", "3 Working Days", "450€", "in 2 Days", "in 4 Days"]
      return <SaleMessageItem key={i} _saleMessage={item}/>})    
  }
  
  render() {

    console.log("this.props.sale.pendingMessage")
    console.log(this.props.sale.pendingMessage)

    return (

            <Grid>     
              <Row size={5} style={{paddingTop: 10}}>        
                <Col size={50}>
                  <Text style={{paddingTop:10, textAlign: 'center', color:myTheme.brandGreyLight, fontSize:25}}>                
                    Speak With us by Messages
                  </Text>
                </Col>
                <Col size={5}/>
              </Row>
              <Row style={{margin: 20}}/>                            
              {this.generateTable()}
              <Row style={{paddingTop: 15, borderColor:myTheme.brandPrimaryDarkX, borderTopWidth:1, }}>                            
                <Col size={2}/>
                <Col size={50}>
                  <TextInput defaultValue="" value={this.props.sale.pendingMessage} style={styles.textMessage} multiline={true} onChangeText={(text) => this.setState({text})}/>                
                </Col>   
                <Col size={2}/>
                <Col size={10}>
                  <Button style={{backgroundColor:myTheme.brandPrimary}} block rounded small onPress={(data)=>{this.createAndSendMessage()}}>
                    <Text style={{color:"#fff", fontSize:15, paddingBottom:6}}>Send Message</Text>
                  </Button>         
                </Col>
              </Row>             
              <Row style={{marginBottom: 30}}/>   
          </Grid>                 

    )
  };
});

//<Col size={2}/>
//<Col size={20}>
//    <Button style={{width:40, backgroundColor:myTheme.brandPrimary, marginTop:2}}  block rounded small onPress={(data)=>{this.props.getSalebySerialAction()}}>
//      <FontAwesome style={{color:"#fff",}} size={20} name="refresh"></FontAwesome>
//    </Button>                            
//</Col>    


function mapStateToProps(state) {
  return state;
}



function mapDispatchToProps(dispatch) {
  return {
    changeComponentAction: (data) => {dispatch(changeComponent(data))},
    getSalebySerialAction: (data) => {dispatch(getSalebySerial(data))},    
    createSaleMessageAction: (data) => {dispatch(createSaleMessage(data))},    
    changeSaleAction: (data) => {dispatch(changeSale(data))},    
  };
}  



const styles ={
  textMessage:{
    backgroundColor:"#fff", 
    height: 50, 
    color:myTheme.brandGreyDark, 
    borderWidth:1, 
    borderRadius:7, 
    fontSize:15, 
  }

};

