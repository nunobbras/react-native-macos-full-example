/* @flow */
'use strict';

import React,  {
  View,
  Text,
  StyleSheet,
  Animated,
  Component,
  Image
} from 'react-native-desktop';
import {Icon} from '../node_modules_desktop/native-base_for_desktop';
import {Col, Row, Grid} from "../node_modules_desktop/react-native-easy-grid_for_desktop";
import myTheme from '../themes/myTheme'

export default class Square extends Component {
  
  render() {
    
    let mainIcon;
    let secondIcon;
    let _margin;

    if (!this.props.secondIcon){
      mainIcon = this.props.mainIcon
      secondIcon = null;
    }
    else{
      mainIcon = this.props.mainIcon
      secondIcon = <Icon style={{color:myTheme.brandPrimaryLight, fontSize:40, marginTop:35}} name={this.props.secondIcon}/>
      _margin = {marginTop:-85}
    }

    return (    
      <Col size={this.props.relSize} style={{padding:15}}>
        <View style={{borderColor:myTheme.brandPrimaryDarkX, backgroundColor:myTheme.brandGreyDark, borderWidth:1, borderRadius:7, padding:10}}>
          <View style={{backgroundColor:myTheme.brandGreyDark, marginBottom:20, alignItems: 'center'}}>
            <Text style={{textAlign: 'center', color:myTheme.brandPrimaryLight, fontSize:20}}>
              {this.props.Title}
            </Text>
          </View>
          <View style={{alignItems: 'center', margin:20}}>
            <Text style={{color:myTheme.brandGreyLight, textAlign: 'center', height: 50}}>{this.props.Desc}</Text>
            <View style={{height:100, alignItems: 'center'}}>
              {secondIcon}
              <Icon style={[{color:myTheme.brandGrey, fontSize:120,}, _margin]} name={mainIcon}/>
            </View>
          </View>
        </View>
      </Col>
    )
  }
}


var styles = {
  // ------------ header
  header: {
    //height: 24,
    //flex: 1,
    flexDirection: 'row'
  },
  user: {
    height: 24,
    position: 'absolute',
    right: 0,
    width: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#bbb',
    borderWidth: 0.5,
    backgroundColor: '#555',
    paddingHorizontal: 20,
    backgroundColor: 'black',
  },
  userLabel: {
    color: '#333',
    fontWeight: '200',
    fontSize: 10,
    marginRight: 10
  },
}
