/* @flow */
'use strict';

import React, {Component, View, StyleSheet, Image, TouchableHighlight} from 'react-native-desktop';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Card, CardItem, List, Text, Thumbnail, Title, Container, Header, Content, Footer, Button} from '../node_modules_desktop/native-base_for_desktop';
import {Col, Row, Grid} from "../node_modules_desktop/react-native-easy-grid_for_desktop";
import QRCodeView from 'react-native-qrcode-view'

import myTheme from '../themes/myTheme'
import PercentageStarsEval from './percentageStarsEval'
import {changeComponent} from "../actions"

import Icon from 'react-native-vector-icons/FontAwesome';


export default connect(mapStateToProps, mapDispatchToProps)(class PhotoInstructionsItems extends Component {

  
  render() {


    if (this.props.number == 1)
      return (
              <Grid>     
                <Row size={5} style={{padding: 10}}>
                  <Col size={5}/>
                  <Col size={20}>
                    <Text style={{paddingTop:20, textAlign: 'center', color:myTheme.brandPrimary, fontSize:30}}>                
                      1          
                    </Text>
                  </Col>
                  <Col size={250}>
                    <Text style={{paddingTop:10, textAlign: 'left', color:myTheme.brandGreyLight, fontSize:15}}>                
                      Open a Browser in your Smartphone
                    </Text>
                  </Col>
                  <Col size={5}/>
                </Row>
            </Grid>                 
    )

    if (this.props.number == 2)
      return (
              <Grid>     
                <Row size={5} style={{padding: 10}}>
                  <Col size={5}/>
                  <Col size={20}>
                    <Text style={{paddingTop:20, textAlign: 'center', color:myTheme.brandPrimary, fontSize:30}}>                
                      2            
                    </Text>
                  </Col>
                  <Col size={250}>
                    <Text style={{paddingTop:10, textAlign: 'left', color:myTheme.brandGreyLight, fontSize:15}}>                
                      Go to <Text style={{paddingTop:10, textAlign: 'center', color:myTheme.brandPrimary, fontSize:20}}>
                              www.2ndhandler.com</Text> and click on the <Text style={{paddingTop:10, textAlign: 'center', color:myTheme.brandPrimary, fontSize:20}}>
                              Submit Photos</Text>  button at the top right corner. When the camera is activated, just point to this QR code:
                    </Text>
                  </Col>
                  <Col size={5}/>
                </Row>
                <Row size={5} style={{padding: 10}}>
                  <Col size={7}/>
                  <Col size={10} style={{padding: 100, backgroundColor:"#fff", paddingRight:105}}>
                      <QRCodeView data={this.props.sale.sale_code}/>                       
                  </Col>
                  <Col size={5}/>
                </Row>                
            </Grid>                 
    )

        if (this.props.number == 3)
      return (
              <Grid>     
                <Row size={5} style={{padding: 10}}>
                  <Col size={5}/>
                  <Col size={20}>
                    <Text style={{paddingTop:20, textAlign: 'center', color:myTheme.brandPrimary, fontSize:30}}>                
                      3            
                    </Text>
                  </Col>
                  <Col size={250}>
                    <Text style={{paddingTop:10, textAlign: 'center', color:myTheme.brandGreyLight, fontSize:15}}>                
                      For each placeholder take your picture. Photos can fail to be accepted if they are not OK... So follow this rules:
                    </Text>
                    <Text style={{paddingTop:5, textAlign: 'left', color:myTheme.brandPrimary, fontSize:15}}>                
                        - Be sure you have plenty of light
                    </Text>
                    <Text style={{paddingTop:5, textAlign: 'left', color:myTheme.brandPrimary, fontSize:15}}>                
                        - Be sure your photos are focused.
                    </Text>                    
                    <Text style={{paddingTop:5, textAlign: 'left', color:myTheme.brandPrimary, fontSize:15}}>                
                        - Be sure your photos are focusing a real issue: We just care about issues! If the device is great, don't take any picture and move on. 
                    </Text>    
                    <Text style={{paddingTop:10, textAlign: 'center', color:myTheme.brandGreyLight, fontSize:15}}>                               
                      Click NEXT to start taking pictures.
                    </Text>                          
                  </Col>
                  <Col size={5}/>
                </Row>             
            </Grid>                 
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
  offer:{
    paddingTop:20,
    paddingBottom:20,
    paddingLeft:40,
    paddingRight:40,
    borderRadius:10,
    borderColor:'#000',
    backgroundColor:"#F5F5F5",
  },  
};

