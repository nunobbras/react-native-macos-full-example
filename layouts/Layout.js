/* @flow */
'use strict';

import React, {Dimensions, Component, View, Text, StyleSheet } from 'react-native-desktop';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LeftPanel from "../components/LeftPanel"
import Header from "../components/Header"
import Message from "../components/Message"

var defaultLayout = Dimensions.get('window');

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      layout: defaultLayout
    };
  }

  render() {
    var _component = this.props.component
    return (
        <View style={styles.containerTop}>
          <View >
            <Header/>
          </View>
          <View style={styles.container} onLayout={(e) => this.setState({layout: e.nativeEvent.layout})}>
            <View style={styles.leftPanel}>
              <LeftPanel label={this.props.label}/>
            </View>
            <View style={[styles.rightPanel, {width: this.state.layout.width - 250}]}>
                <_component />
            </View>
          </View>
          <Message style={styles.containerMessage}/>          
        </View>
    );
  }
}
//              {this.state.component && <Component />}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',    
    
  },
  containerTop: {
    flex: 1,
    flexDirection: 'column'
  },

  userLabel:{
    color:"#A6A8AB",    
    textAlign:"right"
  },
  leftPanel: {    
    width: 250,
    backgroundColor: '#282828'    
  },
  rightPanel: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerMessage:{
        flex: 1,
  }
});







