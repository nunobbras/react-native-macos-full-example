/* @flow */
'use strict';

import React, {Component, View, StyleSheet, Image, TouchableHighlight} from 'react-native-desktop';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {changeComponent, changeSalePhysicalComp} from "../actions"
import {Card, CardItem, List, Text, Thumbnail, Icon, Title, Container, Header, Content, Footer, Button} from '../node_modules_desktop/native-base_for_desktop';
import {Col, Row, Grid} from "../node_modules_desktop/react-native-easy-grid_for_desktop";

import myTheme from '../themes/myTheme'
import * as schemas from '../dataSchemas';

import StatusGeneralHeader from './statusCards/StatusGeneralHeader'
import StatusScreen from './statusCards/StatusScreen'
import StatusGeneralComment from './statusCards/StatusGeneralComment'
import StatusGeneralPhoto from './statusCards/StatusGeneralPhoto'



export default connect(mapStateToProps, mapDispatchToProps)(class CardHolderPhysical extends Component {

  constructor() {
    super()   

    this._physicalStatusItems = schemas.physicalStatusItems
    this._saleComponentPhysical = [];
    

  }

  // _check = () => this.setState({ ticks: this.state.ticks + 1 }, () => {
  //     if (this.state.ticks % 60 === 0) {
  //         this.getValue();
  //     }
  // });

  _changeState(_component_type, data){
    console.log("_changeState")
    console.log(_component_type)
    console.log(data)
    
    let _componentIndex = this.props.sale.physical_components.findIndex((curr)=>{return curr.component_type.name==_component_type})
    console.log(_componentIndex)

    let  _saleComponentPhysical = {}
    _saleComponentPhysical.component_type = {"name":_component_type};
    _saleComponentPhysical.overall_status = data.overall_status;  
    _saleComponentPhysical.small_desc = "just a nice comment, for now"; //data.small_desc;  
        
    this.props.changeSalePhysicalCompAction({value:_saleComponentPhysical, comp_index:_componentIndex})
  }

  _getData(_componentName){    
    //console.log("_getData")
    //console.log(this._index)    

    let _componentIndex = this.props.sale.physical_components.findIndex((curr)=>{return curr.component_type.name==_componentName})    
    // console.log(_componentIndex)    
    // console.log(this.props.assessments[this._index].physical_components[_componentIndex])    
    if (_componentIndex ==-1){
      //console.log("problems... redirecting to login")
      //this.props.changeComponentAction("Login")
      return null
    }
    else{
      return this.props.sale.physical_components[_componentIndex] 
    }
  }

  
  render() {

    //this._index = this.props.assessments.findIndex((curr)=>{return curr.id==this.props.currentAssessmentId})
    

    return (

        <View style={styles.cardholder}>
          <Card style={styles.card}>            
            <StatusGeneralHeader title={"Case Scratches"} contextDesc={"needPhotos"}/>
            <StatusGeneralPhoto data={this._getData("CoverCase")} schema={this._physicalStatusItems.CoverCase} udpateState={this._changeState.bind(this, "CoverCase")}/>
            <StatusGeneralPhoto data={this._getData("BottomCase")} schema={this._physicalStatusItems.BottomCase} udpateState={this._changeState.bind(this, "BottomCase")}/>
            <StatusGeneralPhoto data={this._getData("Keyboard")} schema={this._physicalStatusItems.Keyboard} udpateState={this._changeState.bind(this, "Keyboard")}/>
          </Card>            
          <Card style={styles.card}>
            <StatusGeneralHeader title={"Screen"} contextDesc={"needPhotos"}/>
            <StatusGeneralPhoto data={this._getData("Screen")} schema={this._physicalStatusItems.Screen} udpateState={this._changeState.bind(this, "Screen")}/>
            <StatusGeneralPhoto data={this._getData("ScreenPixels")} schema={this._physicalStatusItems.ScreenPixels} udpateState={this._changeState.bind(this, "ScreenPixels")}/>
          </Card>            
          <Card style={styles.card}>
            <StatusGeneralHeader title={"Plugs & Ports"} contextDesc={"optional"}/>
            <StatusGeneralComment data={this._getData("PowerAdapter")} schema={this._physicalStatusItems.PowerAdapter} udpateState={this._changeState.bind(this, "PowerAdapter")}/>
            <StatusGeneralComment data={this._getData("USBPlugs")} schema={this._physicalStatusItems.USBPlugs} udpateState={this._changeState.bind(this, "USBPlugs")}/>
            <StatusGeneralComment data={this._getData("FirewirePlugs")} schema={this._physicalStatusItems.FirewirePlugs} udpateState={this._changeState.bind(this, "FirewirePlugs")}/>
            <StatusGeneralComment data={this._getData("MiniDisplayPort")} schema={this._physicalStatusItems.MiniDisplayPort} udpateState={this._changeState.bind(this, "MiniDisplayPort")}/>
            <StatusGeneralComment data={this._getData("Headphones")} schema={this._physicalStatusItems.Headphones} udpateState={this._changeState.bind(this, "Headphones")}/>
          </Card>            
          <Card style={styles.card}>
            <StatusGeneralHeader title={"Others"} contextDesc={"optional"}/>
            <StatusGeneralComment data={this._getData("TrackPad")} schema={this._physicalStatusItems.TrackPad} udpateState={this._changeState.bind(this, "TrackPad")}/>
            <StatusGeneralComment data={this._getData("CDDVD")} schema={this._physicalStatusItems.CDDVD} udpateState={this._changeState.bind(this, "CDDVD")}/>
          </Card>                 
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
    changeSalePhysicalCompAction:(data) => {dispatch(changeSalePhysicalComp(data))}
  };
}  



const styles ={
  cardholder:{
    marginBottom: 30,
    flexDirection: 'column',
    flexWrap: "wrap",
    flex:1,
    justifyContent: 'center',    
  },
  card: {  
    flex:0,  
    margin:20,
    marginRight:50,
    marginLeft:50,
    borderColor:myTheme.brandPrimary,
    
  },

};

