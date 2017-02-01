/* @flow */
'use strict';

import React, {Component, View, StyleSheet, Image, TouchableHighlight} from 'react-native-desktop';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {changeComponent} from "../actions"

import {Card, CardItem, List, ListItem, Badge, Text, Thumbnail, Title, Container, Header, Content, Footer, Button} from '../node_modules_desktop/native-base_for_desktop';
import {Col, Row, Grid} from "../node_modules_desktop/react-native-easy-grid_for_desktop";
import myTheme from '../themes/myTheme'
import PercentageStarsEval from './percentageStarsEval'
import moment from "moment"
import Icon from 'react-native-vector-icons/FontAwesome';
import StarsEval from './starsEval'

export default connect(mapStateToProps, mapDispatchToProps)(class AssessmentList extends Component {

	renderList(){
		let _assessment = this.props.assessments
		let _items = <Text>No previsous Assessments</Text>

		console.log(_assessment)

		_items = _assessment.map(function(_assessment, index) {

			return 	<View key={index} style={{height: 50, borderColor:myTheme.brandGreyMidDark, borderBottomColor:myTheme.brandPrimary, borderWidth:1,}}>
	      				<View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
	      					<View style={{flexDirection:'row',alignItems:'flex-end'}}>
	                	<Icon color={myTheme.brandGreyLight} name="ticket" size={30}/>
	                	<Text style={{color:myTheme.brandGreyLight, LightpaddingLeft:10}}>{moment(_assessment.created).format('MMMM Do YYYY, h:mm:ss a')}</Text>
	                </View>
	                <View style={{flex: 1, flexDirection:'row', alignItems:'center', justifyContent:'space-around', paddingTop:8}}>
	                	<Text style={{color:myTheme.brandGreyLight, textAlign:"center"}}>Mac Book Pro</Text>
	                	<StarsEval percentage={90} />
	                </View>
	                <View  style={{width:120, padding:3, margin:10, backgroundColor:myTheme.brandGrey}}>
	                	<Text style={{color:myTheme.brandGreyLight, fontSize:12, textAlign:"center", color:myTheme.brandSidebar, paddingBottom:3}}>{_assessment.assessment_code || "No Code Yet"}</Text>	                
	                </View>	                
	              </View>  
	            </View>;
			})

		//_items==[]?_items = <Text>No previsous Assessments</Text>:_items = _items

		return _items
	}
  
  render() {

  	let items = this.renderList()

    return (
        <View>
			<View style={{marginTop:5, marginRight:40, marginLeft:40, marginBottom:50}}>
				<View style={{backgroundColor:myTheme.brandGreyDark, padding:10}}>
					{items}
	        	</View>
       		</View>
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
    changeStatePropAction: (data) => {dispatch(changeStateProp(data))},
  };
}  


