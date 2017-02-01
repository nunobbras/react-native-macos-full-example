/* @flow */
'use strict';

import React, {Component, View, StyleSheet, Image, TouchableHighlight} from 'react-native-desktop';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Card, CardItem, List, Text, Thumbnail, Title, Container, Header, Content, Footer, Button} from '../../node_modules_desktop/native-base_for_desktop';
import {Col, Row, Grid} from "../../node_modules_desktop/react-native-easy-grid_for_desktop";
import myTheme from '../../themes/myTheme'
import StarsEval from '../starsEval'
import StatusSlider from '../StatusSlider'
//import StarsEvalForm from './starsEvalForm'

import Icon from 'react-native-vector-icons/FontAwesome';



export default class StatusGeneralComment extends Component {


  _udpateState(data){    
      this.props.udpateState({overall_status:data})
  }
  _udpateComments(data){    
      this.props.udpateState({small_desc:data})
  }


  render() {

    let _overall_status = !!this.props.data?this.props.data.overall_status:null
    let _userComment = !!this.props.data?this.props.data.userComment:null

    let commentStatus = 
          <View style={{flexDirection: 'row', justifyContent:"center", alignItems:"center", paddingTop:10}}>                      
            <Icon name="close" size={15} style={{color:myTheme.brandWarning, }} />  
            <Text style={{top: -2, fontSize:12, fontWeight:"bold", color:myTheme.brandWarning, }}>No Commment Added</Text>                 
          </View>      

    if (!!_userComment){
      commentStatus = 
          <View style={{flexDirection: 'row', justifyContent:"center", alignItems:"center", paddingTop:10}}>                      
            <Icon name="check" size={15} style={{color:myTheme.brandSuccess, }} />  
            <Text style={{top: -2, fontSize:12, fontWeight:"bold", color:myTheme.brandSuccess, }}>Commment Done</Text>                 
          </View>
    }

    let labelAddComment =                 
                <View style={{flexDirection: 'row', justifyContent:"flex-end", width:250}}>
                  <View style={{width:200, flexDirection: 'column', justifyContent:"center", alignItems:"center", marginTop:15 }}>                  
                    <Icon name="check" size={20} style={{color:myTheme.brandSuccess}} />                           
                    <Text style={{color:myTheme.brandGreyLight, fontSize:10, top:-5}}>No need to</Text>                            
                    <Text style={{color:myTheme.brandGreyLight, fontSize:10, top:-10}}>add a Comment</Text>
                  </View>
                  <View style={{flexDirection: 'column', justifyContent:"center", paddingLeft:10}}>                  
                  </View>
                </View>


    if (_overall_status<81){
      labelAddComment = 
                <View style={{flexDirection: 'row', justifyContent:"flex-end", width:250}}>
                  <View style={{width:200, flexDirection: 'column', justifyContent:"center", alignItems:"center", marginTop:15 }}>                  
                    <Text style={{color:myTheme.brandGreyLight, fontSize:10, top:-5}}>Please Explain Better</Text>                            
                    <Text style={{color:myTheme.brandGreyLight, fontSize:10, top:-10}}>Adding a Comment</Text>
                    <View style={[styles.commentbutton , {flexDirection: 'row', alignItems:"flex-end", justifyContent:"flex-end"}]}>
                      <Text style={{fontSize:10, color:"#fff",}}>Add a Comment </Text>   
                      <Icon name="comment" size={15} style={{color:"#fff",}}></Icon>                                            
                    </View>
                    {commentStatus}    
                  </View>
                  <View style={{flexDirection: 'column', justifyContent:"center", paddingLeft:10}}>                  

                  </View>
                </View>      
    }

    return (

            <CardItem cardBody style={{height: 150, borderColor:myTheme.brandPrimary, backgroundColor:myTheme.brandGreyDark, flexDirection: 'row', justifyContent:"center", alignItems:"center"}}>
                <Text style={{color:myTheme.brandGreyLight, fontWeight:"bold", marginLeft:30, paddingTop:25, width:250}}>                                    
                    {this.props.schema.componentName} 
                </Text>                
                <StatusSlider title={this.props.schema.questionName} data={_overall_status} onChange={this._udpateState.bind(this)}/>                   
            </CardItem>
    )
  };
};



const styles ={
  carditemheader:{
    flexDirection: 'row',
    flex:1,
    backgroundColor:myTheme.brandGreyDark,    
    borderColor:myTheme.brandPrimaryDarkX
  },  
  commentbutton:{
    paddingTop:2,
    paddingBottom:10,
    paddingLeft:10,
    paddingRight:10, 
    borderRadius:3, 
    backgroundColor:myTheme.brandGrey,  
  }  
};

