/* @flow */
'use strict';

import React, {Dimensions, Component, View, StyleSheet } from 'react-native-desktop';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

var defaultLayout = Dimensions.get('window');

export default class FullLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      layout: defaultLayout
    };
  }

  render() {
    var Component = this.props.component
    return (
        <View style={styles.container} onLayout={(e) => this.setState({layout: e.nativeEvent.layout})}>
              <Component />
        </View>
    );
  }
}



var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
});







