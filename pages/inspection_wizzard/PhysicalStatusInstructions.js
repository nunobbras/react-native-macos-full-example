/* @flow */
'use strict';
import React, {Component, View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native-desktop';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {changeComponent, updateSale} from "../../actions"
import {List, Thumbnail, Icon, Title, Container, Header, Content, Footer, Button} from '../../node_modules_desktop/native-base_for_desktop';
import {Col, Row, Grid} from "../../node_modules_desktop/react-native-easy-grid_for_desktop";


import myTheme from '../../themes/myTheme'
import CardHolderPhysical from '../../components/CardHolderPhysical'
import LayoutTitle from "../../components/LayoutTitle";
import CardHolder from "../../components/CardHolder.js"
import PhotoInstructionsItems from "../../components/PhotoInstructionsItems.js"

export default connect(mapStateToProps, mapDispatchToProps)(class PhysicalStatusInstructions extends Component {


  nextWithSync(){
    this.props.updateSaleAction()
    this.props.changeComponentAction("CollectPhysicalStatus")
  }


  render() {

    return (

                <Container>
                  <Content style={{backgroundColor:myTheme.brandGreyMidDark}} theme={myTheme}>
                    <Grid>     
                      <LayoutTitle title="Start Taking Pictures"/>     
                      <Row style={{top: 10, padding: 20}}>
                        <Col size={25}/>
                          <Text style={{textAlign: 'left', color:"#fff", fontSize:20}}>Pick your smartphone and follow this instructions</Text>
                        <Col size={25}/>
                      </Row>
                        <Row style={styles.box}>          
                          <Col size={15}/>
                          <Col size={100}>
                            <PhotoInstructionsItems number={1}/>
                          </Col>                          
                          <Col size={15}/>
                        </Row>
                        <Row style={styles.box}>          
                          <Col size={15}/>
                          <Col size={100}>
                            <PhotoInstructionsItems number={2}/>
                          </Col>                          
                          <Col size={15}/>
                        </Row> 
                        <Row style={styles.box}>          
                          <Col size={15}/>
                          <Col size={100}>
                            <PhotoInstructionsItems number={3}/>
                          </Col>                          
                          <Col size={15}/>
                        </Row>     
                
                    </Grid>                 
                </Content>
              <Footer style={styles.footer}>
                  <Button onPress={(data)=>{this.props.changeComponentAction("ShowDataFromDevice")}} style={styles.PrevButton} small rounded>                      
                      <Text style={{color:"#fff", fontSize:16}}>back</Text>
                  </Button>
                  <View style={{flex:1}}></View>
                  <Button onPress={this.nextWithSync.bind(this)} style={styles.NextButton} small rounded>                    
                      <Text style={{color:"#fff", fontSize:16}}>next</Text>
                  </Button>        
              </Footer>              
          </Container>   

    )
  };
});

function mapStateToProps(state) {
  return state;
}



function mapDispatchToProps(dispatch) {
  return {
    changeComponentAction: (data) => {dispatch(changeComponent(data))},
    updateSaleAction: (data) => {dispatch(updateSale(data))},
  };
}  

const styles ={
  footerColumn: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  footer: {
    height: 50,
    backgroundColor:myTheme.brandGreyDark, 
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor:"#000", 
    borderTopWidth:1,    
  },
  NextButton: {    
    width:100, 
    paddingRight:20,
    backgroundColor:myTheme.brandPrimary
  },
  PrevButton: {
    width:100,
    paddingLeft:20,
    backgroundColor:myTheme.brandPrimary
  },  
  box:{
    backgroundColor:myTheme.brandGreyDark, 
    margin:20,
    marginTop:10,    
    borderColor:myTheme.brandPrimaryDarkX, 
    borderWidth:1, 
    borderRadius:7, 
    padding:10    
  }  
};
