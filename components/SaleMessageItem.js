/* @flow */
'use strict';

import React, {Component, View, StyleSheet, Image, TouchableHighlight} from 'react-native-desktop';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Card, CardItem, List, Text, Thumbnail, Icon, Title, Container, Header, Content, Footer, Button} from '../node_modules_desktop/native-base_for_desktop';
import {Col, Row, Grid} from "../node_modules_desktop/react-native-easy-grid_for_desktop";

import {changeComponent} from "../actions"
import myTheme from '../themes/myTheme'



export default connect(mapStateToProps, mapDispatchToProps)(class SaleMessageItem extends Component {

  
  render() {

    let _align;
    let _style

    if (this.props._saleMessage.sender_type == 0){
        _align = {left:0, right:15}
        _style = {borderRadius:15, padding: 10, margin:10, backgroundColor:"#fff"}    
    }
    else{
        _align = {left:15, right:0}
        _style = {borderRadius:15, padding: 10, margin:10, backgroundColor:myTheme.brandGreyLight}
    }

    //console.log("_align.right")
    //console.log(this.props)

    return (

              <Row >
                <Col size={_align.left}/>
                <Col size={25}>
                  <View style={_style}>                
                    <Text style={styles.tableTitle}>
                      {!!this.props._saleMessage.sender_type==0?"Seller":"2ndHandler"}
                    </Text>
                    <Text style={styles.tableText}>
                      {this.props._saleMessage.message_text} 
                    </Text>
                  </View>
                </Col>
                <Col size={_align.right}>
                </Col>                                
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
    color:myTheme.brandGreyDarkX, 
    fontSize:20,

  },  
  tableText:{
    textAlign: 'left', 
    color:myTheme.brandGreyDarkX, 
    fontSize:13
  },  


};

