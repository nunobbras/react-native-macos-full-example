/* @flow */
'use strict';

import React, {Dimensions, Component, View, Text, StyleSheet, TouchableOpacity} from 'react-native-desktop';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default class LeftItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    let selectedStyle;
    if (!!this.props.selected){
      selectedStyle = styles.ItemSelected;
    }
    else{
      selectedStyle = "";
    }


    return (
        <View style={styles.Item} >
          <TouchableOpacity onPress={()=>{this.props.changeComponent(this.props.newComponent)}}> 
            <Text  style={[styles.ItemText, selectedStyle]}>
              <FontAwesome style={[styles.Icon, selectedStyle]} name={this.props.icon} size={15} color="#A6A8AB" />&nbsp;&nbsp;&nbsp;&nbsp;{this.props.text}
            </Text>
          </TouchableOpacity>            
        </View>
    );
  }
};

var styles = StyleSheet.create({
  Item: {    
    height: 30,    
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:27,    
  },
  ItemSelected: {
    color: "white",
    fontWeight: 'bold',
  },
  ItemText:{
    color:"#A6A8AB",
    fontSize:12,

  },
  Icon:{
    width:20
  },
});







