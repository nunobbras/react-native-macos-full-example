/* @flow */
'use strict';

import React, {Component, View, StyleSheet, Image, TouchableHighlight} from 'react-native-desktop';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Card, CardItem, List, Text, Thumbnail, Icon, Title, Container, Header, Content, Footer, Button} from '../node_modules_desktop/native-base_for_desktop';
import {Col, Row, Grid} from "../node_modules_desktop/react-native-easy-grid_for_desktop";

import {changeComponent} from "../actions"
import myTheme from '../themes/myTheme'



export default connect(mapStateToProps, mapDispatchToProps)(class ActiveInspectionStatusTableItem extends Component {

  
  render() {



    return (

              <Row style={{paddingTop: 10}}>
                <Col size={0}/>
                <Col size={25}>
                  <Text style={styles.tableTitle}>                
                    {this.props.title} 
                  </Text>
                </Col>
                <Col size={25}>
                  <Text style={styles.tableValue}>                
                    {this.props.value}
                  </Text>
                </Col>                                
                <Col size={5}/>
              </Row>       

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
  tableTitle:{
    textAlign: 'left', 
    color:myTheme.brandGreyLight, 
    fontSize:15
  },  
  tableValue:{
    textAlign: 'right', 
    color:myTheme.brandGreyLight, 
    fontSize:10
  },  

};

