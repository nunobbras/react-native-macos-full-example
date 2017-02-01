/* @flow */
'use strict';

import React, {Component, View, StyleSheet, Image, TouchableHighlight} from 'react-native-desktop';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Card, CardItem, List, Text, Thumbnail, Title, Container, Header, Content, Footer, Button} from '../../node_modules_desktop/native-base_for_desktop';
import {Col, Row, Grid} from "../../node_modules_desktop/react-native-easy-grid_for_desktop";
import myTheme from '../../themes/myTheme'
import StarsEval from '../starsEval'
import Icon from 'react-native-vector-icons/FontAwesome';



export default class StatusGeneralHeader extends Component {

  



  render() {

    let _contextDesc;

    if (this.props.contextDesc == "needPhotos"){
      _contextDesc = 
        <View style={[styles.commentbutton , {flexDirection: 'row', flex:1, alignItems:"flex-end", justifyContent:"flex-end"}]}>
          <Text style={{fontSize:12, color:"#fff", marginRight:20}}>You need to send photos here</Text>   
          <Icon name="camera" size={20} style={{color:"#fff",}}></Icon>                                            
        </View>      
    }
    if (this.props.contextDesc == "optional"){
      _contextDesc = 
        <View style={[styles.commentbutton , {flexDirection: 'row', flex:1, alignItems:"flex-end", justifyContent:"flex-end"}]}>      
          <Text style={{fontSize:10, color:"#fff",}}>This part is optional</Text>   
        </View>
    }

    return (

            <CardItem style={styles.carditemheader}>
              <Icon style={{paddingRight:20,  color:myTheme.brandPrimaryLight}} name="laptop" size={25}/>
              <View>
                <Text style={{fontSize:25, paddingTop:5, color:myTheme.brandPrimaryLight}}>{this.props.title}</Text>
              </View>                
              <View style={{flex:1}} >
                {_contextDesc}
              </View>
            </CardItem>

    )
  };
};

//              <View style={[styles.commentbutton , {flexDirection: 'row', alignItems:"flex-end", justifyContent:"flex-end"}]}>
//                <Text style={{fontSize:10, color:"#fff",}}>Add a Comment </Text>   
//                <Icon name="comment" size={20} style={{color:"#fff",}}></Icon>                                            
//              </View>

//              <View style={[styles.commentbutton , {flexDirection: 'row', alignItems:"flex-end", justifyContent:"flex-end"}]}>
//                <Text style={{fontSize:10, color:"#fff",}}>Send 1 Mail per Topic</Text>   
//                <Icon name="envelope" size={20} style={{color:"#fff",}}></Icon>                                            
//              </View>

const styles ={
  carditemheader:{
    flexDirection: 'row',
    flex:1,
    backgroundColor:myTheme.brandGreyDark,    
    borderColor:myTheme.brandPrimaryDarkX
  },  
  commentbutton:{
    paddingTop:5,
    paddingBottom:10,
    paddingLeft:10,
    paddingRight:10, 

  }  
};

