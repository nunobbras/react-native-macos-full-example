/* @flow */
'use strict';

import React, {SliderIOS, Component, View, StyleSheet, Image, TouchableHighlight} from 'react-native-desktop';
import {Card, CardItem, List, Text, Thumbnail, Icon, Title, Container, Header, Content, Footer, Button} from '../node_modules_desktop/native-base_for_desktop';
import {Col, Row, Grid} from "../node_modules_desktop/react-native-easy-grid_for_desktop";
//import StarRating from 'react-native-star-rating';
import myTheme from '../themes/myTheme'
import StarRating from 'react-native-star-rating';

export default class StatusSlider extends Component {

	constructor() {
	  super()	  
	}

  _onChange(rating){
    this.props.onChange(rating*20);
  }   

  
	
 
  render() {


    this._starCount = Math.floor(this.props.data/20)  
  	let colorStatusSignal = this.props.data>85?myTheme.brandSuccess:myTheme.brandWarning;
  	let textStatusSignal = this.props.data>85?"OK":"Small Issues";
  	textStatusSignal = this.props.data<51?"Not OK":textStatusSignal

    if (this.props.data ==null){
      textStatusSignal = "Use Stars to Rate";
      colorStatusSignal = myTheme.brandPrimaryLighterX
    }

		var styles ={   
			   statussignal:{
			    paddingTop:1,
			    paddingBottom:5,
			    paddingLeft:5,
			    paddingRight:5, 
			    marginTop:10,
			    backgroundColor: colorStatusSignal
			  },	
		};	

    
    let _message =  <View/>

    if (!!this._starCount)
        _message = <View style={styles.statussignal}><Text style={{fontSize:12, fontWeight:"normal", color:"#fff"}}>{textStatusSignal}</Text></View>        


    return (

        	<View style={{flexDirection: 'row', width:300, justifyContent:"flex-end", alignItems:"center"}}>
      			<Text style={{color:myTheme.brandGreyLight, fontSize:10, fontWeight:"bold", marginRight:20}}>Evaluate {this.props.title}:</Text>
            <View style={{flexDirection: 'column', alignItems:"center", justifyContent:"center",}}>            
              <StarRating starSize={20} starColor={colorStatusSignal} maxStars={5} rating={this._starCount} selectedStar={this._onChange.bind(this)}/>  
              {_message}
            </View>

    		  </View>




    )
  };


//	        <SliderIOS style={{width:270, padding:10, margin:10, }} step={0.5} value={this.props.data/100} minimumValue={0} maximumValue={1} />


};

