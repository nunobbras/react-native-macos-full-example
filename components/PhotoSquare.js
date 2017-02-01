
'use strict';

import React, {Component, View, StyleSheet, Image, TouchableHighlight} from 'react-native-desktop';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {changeComponent, changeSalePhysicalComp} from "../actions"
import {Card, CardItem, List, Text, Thumbnail, Title, Container, Header, Content, Footer, Button} from '../node_modules_desktop/native-base_for_desktop';
import {Col, Row, Grid} from "../node_modules_desktop/react-native-easy-grid_for_desktop";

import Icon from 'react-native-vector-icons/FontAwesome';



export default class PhotoSquare extends Component {

  

  render() {

  
  	if (this.props.data.length ==0)
  		return null

		
  	if (this.props.data.length ==2){
  		console.log("this.props.data[0].main_link")
  		console.log(this.props.data[0].main_link)
  		return (
  			<View>  	
  				<Icon name="check" size={15} style={{}}/>
				<Image resizeMode='contain' style={{width:250, height:250}} source={{uri: this.props.data[0].main_link}} />
			</View>				
		)
  	}
	else {
  		return null		
	}
  }
};