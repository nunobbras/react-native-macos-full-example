/* @flow */
'use strict';

import React, {Dimensions, Component, View, Text, StyleSheet } from 'react-native-desktop';

export default class LeftTitle extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <View style={styles.Header}>
          <Text style={styles.HeaderText}>{this.props.text}</Text>
        </View>
    );
  }
}
//              {this.state.component && <Component />}

var styles = StyleSheet.create({
  Header: {
    width:250,
    paddingTop:40,
    paddingBottom:15,
    paddingLeft:27,
  },
  HeaderText:{
    color:"#A6A8AB",
    fontSize:14,

  },
});







