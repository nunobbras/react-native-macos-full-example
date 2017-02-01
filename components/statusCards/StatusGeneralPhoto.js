/* @flow */
'use strict';

import React, {ActivityIndicatorIOS, Component, View, StyleSheet, Image, TouchableHighlight} from 'react-native-desktop';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Card, CardItem, List, Text, Thumbnail, Title, Container, Header, Content, Footer, Button} from '../../node_modules_desktop/native-base_for_desktop';
import {Col, Row, Grid} from "../../node_modules_desktop/react-native-easy-grid_for_desktop";
import myTheme from '../../themes/myTheme'
import StarsEval from '../starsEval'
import StatusSlider from '../StatusSlider'
import PhotoSquare from '../PhotoSquare'

import Icon from 'react-native-vector-icons/FontAwesome';



export default class StatusGeneralPhoto extends Component {

_udpateStatus(data){    
    this.props.udpateState({overall_status:data})
  }
  

  render() {
    let _overall_status = !!this.props.data?this.props.data.overall_status:null
    let _photoStatus = null;
    if (!!this.props.data){
       _photoStatus = !!this.props.data.medias?this.props.data.medias.length:null
    }
    //console.log(this.props.data)
    //console.log(this.props.data.overall_status)


    let labelAddPhoto =         
                    <View style={[{flexDirection: 'row', justifyContent:"center", alignItems:"center", marginTop:15}]}>
                      <View style={[{flexDirection: 'column', justifyContent:"center", alignItems:"center", marginLeft:20, marginTop:15}]}>                         
                        <Text style={{color:myTheme.brandGreyLight, fontSize:10, top:-5}}>Rate This </Text>                            
                        <Text style={{color:myTheme.brandGreyLight, fontSize:10, top:-10}}>Component to Proceed</Text>
                      </View>
                    </View>


    let _arrow = <Icon name="arrow-left" size={30} style={{color:myTheme.brandPrimary, margin:20, marginLeft:50}} />


    
    if (!!_overall_status){
      labelAddPhoto = 
                    <View style={[{flexDirection: 'column', justifyContent:"center", alignItems:"center", marginTop:15}]}>
                      <Icon name="check" size={20} style={{color:myTheme.brandSuccess}} />                           
                      <Text style={{color:myTheme.brandGreyLight, fontSize:10, top:-5}}>No Need to</Text>                            
                      <Text style={{color:myTheme.brandGreyLight, fontSize:10, top:-10}}>Send Photos</Text>
                    </View>

      _arrow = <View/>


      if (_overall_status<81){
        labelAddPhoto = <View style={{flexDirection: 'column', justifyContent:"center", alignItems:"center"}}>
                          <Text style={{color:myTheme.brandGreyLight, fontSize:10, fontWeight:"bold"}}>Send Photos at</Text>    
                          <View style={{flexDirection: 'column', justifyContent:"center", alignItems:"center", marginTop:10}}>                        
                            <Text style={{color:myTheme.brandPrimary, fontSize:14}}>www.2ndhandler.com/photos</Text>                       
                          </View>
                          <View style={{flexDirection: 'row', justifyContent:"center", alignItems:"center", paddingRight:10, paddingTop:10, paddingBottom:0}}>                      
                            <ActivityIndicatorIOS size="small" />
                            <Text style={{marginLeft:5, fontSize:12, fontWeight:"bold", color:myTheme.brandWarning}}>Waiting fot your Photos...</Text>                 
                          </View>                   
                      </View>
      
        if (!!_photoStatus){
          labelAddPhoto = 
            <View style={{flexDirection: 'column', justifyContent:"center", alignItems:"center"}}>        
                <Icon name="check" size={15} style={{color:myTheme.brandSuccess, }} />  
                <Text style={{top: -2, fontSize:12, fontWeight:"bold", color:myTheme.brandSuccess, }}>{_photoStatus} {_photoStatus==1?"Photo":"Photos"} OK</Text>                 
            </View>
        }
      }
    }

    return (

            <CardItem cardBody style={{height: 150, borderColor:myTheme.brandPrimary, backgroundColor:myTheme.brandGreyDark, flexDirection: 'row', justifyContent:"center", alignItems:"center"}}>                
                <Text style={{color:myTheme.brandGreyLight, fontWeight:"bold", marginLeft:30, width:150}}>                                    
                    {this.props.schema.componentName} 
                </Text>                
                <StatusSlider title={this.props.schema.questionName} data={_overall_status} onChange={this._udpateStatus.bind(this)}/>      
                <View style={{flexDirection: 'row', justifyContent:"flex-end", width:300}}>
                  {_arrow}                                
                  <View style={{width:220, flexDirection: 'column', justifyContent:"center", paddingLeft:10}}>                  
                    {labelAddPhoto}
                  </View>
                </View>
            </CardItem>

    )
  };
};

//<PhotoSquare data={this.props.data.medias}/>
//<Icon name="upload" size={30}></Icon>   

//                    <View style={[styles.whybutton,{marginTop:0}]}>
//                      <Text style={{fontSize:10, textAlign:"center"}}>Where to</Text>
//                      <Text style={{fontSize:10, textAlign:"center"}}>Focus?</Text>                            
//                    </View>                    

const styles ={
  card: {  
    flex:0,  
    margin:10,
  },
  whybutton:{
    paddingTop:0,
    paddingBottom:10,
    paddingLeft:10,
    paddingRight:10, 
    borderRadius:3, 
    backgroundColor:"#F5F5F5",  
  }
};






