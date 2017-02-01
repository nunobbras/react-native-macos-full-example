/* @flow */
'use strict';

import React, {Component, View, StyleSheet, Image, TouchableHighlight} from 'react-native-desktop';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {changeComponent} from "../actions"
import {Card, CardItem, List, Text, Thumbnail, Icon, Title, Container, Header, Content, Footer, Button} from '../node_modules_desktop/native-base_for_desktop';
import {Col, Row, Grid} from "../node_modules_desktop/react-native-easy-grid_for_desktop";
import myTheme from '../themes/myTheme'
import EComponentCard from './EComponentCard'
import * as schemas from '../dataSchemas';



export default connect(mapStateToProps, mapDispatchToProps)(class CardHolder extends Component {

  

  render() {

    let Cards = [];
    


    if (this.props.components.length >0){
 
      Cards = this.props.components.map(
        (_component,i)=>{

          return <EComponentCard key={i} data={_component} />          
        })
    }
    else{
      Cards =""
    }    


    return (

        <View style={styles.cardholder}>
          {Cards} 
        </View>




    )
  };
});

function mapStateToProps(state) {
  return state;
}



function mapDispatchToProps(dispatch) {
  return {
    changeComponentAction: (data) => {dispatch(changeComponent(data))},
  };
}  



const styles ={
  cardholder:{
    marginBottom: 30,
    flexDirection: 'row',
    flexWrap: "wrap",
    flex:0,
    justifyContent: 'center',    
  },
};

