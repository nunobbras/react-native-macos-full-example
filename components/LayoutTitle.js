'use strict';

import React, {Dimensions, Component, View, Text, StyleSheet, TouchableOpacity} from 'react-native-desktop';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Col, Row, Grid} from "../node_modules_desktop/react-native-easy-grid_for_desktop";


import myTheme from '../themes/myTheme'


export default class LayoutTitle extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
	  <Row style={{marginTop: 10, padding: 10}}>
	    <Col size={25}/>
	    <Col size={50} style={{paddingBottom: 10, borderColor:myTheme.brandGrey, borderBottomWidth:1}}>
	      <Text style={{paddingTop:10, textAlign: 'center', color:"#fff", fontSize:35}}>{this.props.title}</Text>
	    </Col>  
	    <Col size={25}/>
	  </Row>  

    );
  }
};

var styles = StyleSheet.create({

});







