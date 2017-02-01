/* @flow */
'use strict';

import React, {Dimensions, Component, View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native-desktop';
import LeftItem from "../components/LeftItem"
import LeftTitle from "../components/LeftTitle"
import { connect } from 'react-redux';
import {changeComponent} from "../actions"
import myTheme from '../themes/myTheme'

export default connect(mapStateToProps, mapDispatchToProps)(class LeftPanel extends React.Component {
  constructor() {
    super();
  }


  render() {

    return (
        <View style={styles.Header}>
          <TouchableOpacity onPress={(data)=>{this.props.changeComponentAction("Splash")}}>
            <Image  style={styles.Image} source={require('../images/logo.png')}/>      
          </TouchableOpacity>
          <LeftTitle text="SELL" />
          <LeftItem newComponent="HowItWorksSell" changeComponent={(data)=>{this.props.changeComponentAction(data)}} text="How it works" icon="graduation-cap" selected={this.props.label=="HowItWorksSell"}/>          
          <LeftItem newComponent="StartSelling" changeComponent={(data)=>{this.props.changeComponentAction(data)}} text="Start Selling This Device" icon="laptop" selected={this.props.label=="StartSelling"}/>
          <LeftItem newComponent="MySale" changeComponent={(data)=>{this.props.changeComponentAction(data)}} text="Ongoing Sale" icon="ticket" selected={this.props.label=="MySale"}/>
          <LeftTitle text="BUY"/>
          <LeftItem newComponent="HowItWorksBuy" changeComponent={(data)=>{this.props.changeComponentAction(data)}} text="Start Buying" icon="cart-plus" selected={this.props.label=="HowItWorksBuy"}/>          
          <LeftTitle text="GENERAL"/>
          <LeftItem newComponent="Help" changeComponent={(data)=>{this.props.changeComponentAction(data)}} text="Online Help" icon="comment" selected={this.props.label=="Help"}/>                    
          <LeftItem newComponent="UserProfile" changeComponent={(data)=>{this.props.changeComponentAction(data)}} text="User Profile" icon="gears" selected={this.props.label=="UserProfile"}/>          
        </View>
    );
  }
});

//          <LeftItem newComponent="MySale" changeComponent={(data)=>{this.props.changeComponentAction(data)}} text="Your Buying Deals" icon="ticket"/>          

function mapStateToProps(state) {
  return state;
}



function mapDispatchToProps(dispatch) {
  return {
    changeComponentAction: (data) => {dispatch(changeComponent(data))},
  };
}  


//              {this.state.component && <Component />}

var styles = StyleSheet.create({
  Header: {
    flex: 1,
    flexDirection: 'column', 
    flexWrap:"wrap",
    alignItems:'flex-start',    
    justifyContent: 'flex-start',    
    paddingTop: 10,   
    borderRightWidth:1,
    borderColor: "#000"//myTheme.brandGrey
  },
  Image: {
    paddingTop: 10,       
    paddingBottom: 10,   
    margin: 10,       
    width: 220,
    height: 80,
    resizeMode:"contain"
  }, 
});







