/* @flow */
'use strict';

import React,  { View, StyleSheet, Animated, Component, TouchableOpacity, Image,  Modal, TextInput} from 'react-native-desktop';
import { connect } from 'react-redux';
import {Card, CardItem, List, Text, Thumbnail, Title, Container, Content, Footer, Button, InputGroup} from '../node_modules_desktop/native-base_for_desktop';

import myTheme from '../themes/myTheme';
import {changeComponent, changeRootProp, checkToken} from "../actions"
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default connect(mapStateToProps, mapDispatchToProps)(class Message extends Component {


  componentWillUnmount() {

      if (!this.props.error && !this.props.sendNiceMessage){
        console.log("disabling message...")
        this.props.changeRootPropAction({key:"showNiceMessage", value:null})
        this.props.changeRootPropAction({key:"error", value:null})
      }
  }

  _onPressfunc(){
    this.props.checkTokenAction()
  }

  render() {

    let msgText=<View></View>;
    let _message;
    let _bckground;
    let _refreshConnectionButton;
    let _show



    _message = this.props.message
      
    if (this.props.error){
      _show = true
      _bckground = myTheme.brandWarning
//        setTimeout(() => {this.props.changeRootPropAction({key:"message", value:null})}, 6000)
      setTimeout(() => {this.props.changeRootPropAction({key:"error", value:null})}, 6000)
    }   
    else if (this.props.showNiceMessage){
      _show = true
      _bckground = myTheme.brandSuccess        
//        setTimeout(() => {this.props.changeRootPropAction({key:"message", value:null})}, 2000)
      setTimeout(() => {this.props.changeRootPropAction({key:"showNiceMessage", value:null})}, 2000)
      if (!!this.props.messageChangeComponent){
        setTimeout(() => {this.props.changeComponentAction(this.props.messageChangeComponent)}, 3000)
      }
    }

    if (this.props.networkProblem){
      _show = true
      _message = "There is a Network Problem. Connect to the internet and try again.";
      _bckground = myTheme.brandWarning;
      _refreshConnectionButton = 
                    <Button style={{backgroundColor:myTheme.brandPrimary}} small rounded onPress={this._onPressfunc.bind(this)}>
                      <View style={{flexDirection: 'row',    alignItems:"center", justifyContent: 'space-around', }}>  
                          <FontAwesome style={{marginRight:5, color:"#fff", fontSize:15}} name="refresh" />
                          <Text style={{color:"#fff", fontSize:16}}>Reconnect</Text>
                      </View>    
                    </Button>   

    }

    if (_show){
      msgText =           
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', backgroundColor:_bckground, padding:10, borderBottomRightRadius:3, borderBottomLeftRadius:3}}>
              {!!_refreshConnectionButton?<View></View>:null}  
              <Text style={{textAlign:"center", color:"white"}}>{_message}</Text>
              {_refreshConnectionButton}
            </View> 

    }

    return(          
      <View> 
        {msgText}
      </View> 


    )
  }

});


function mapStateToProps(state) {
  return state;
}



function mapDispatchToProps(dispatch) {
  return {
    changeComponentAction: (data) => {dispatch(changeComponent(data))},    
    changeRootPropAction: (data) => {dispatch(changeRootProp(data))},    
    checkTokenAction: (data) => {dispatch(checkToken(data))},    
  };
}  



var styles = {
  // ------------ header

}

