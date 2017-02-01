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

export default connect(mapStateToProps, mapDispatchToProps)(class CollectPhysicalStatus extends Component {


  nextWithSync(){
    this.props.updateSaleAction()
    this.props.changeComponentAction("Pricing")
  }


  render() {

    let _disabled = true
    let next_button =
      <View>
        <Text style={{color:"#fff", fontSize:13}}>Pictures are missing. Complete to proceed.</Text>
      </View>

      console.log("this.props.photos_status_ok")
      console.log(this.props.sale.photos_status_ok)

    if (!!this.props.sale.photos_status_ok){
      next_button =                   
        <Button onPress={this.nextWithSync.bind(this)} style={styles.NextButton} small rounded>                    
            <Text style={{color:"#fff", fontSize:16}}>next</Text>
        </Button>        
    }        

    return (

                <Container>
                  <Content style={{backgroundColor:myTheme.brandGreyMidDark}} theme={myTheme}>
                    <Grid>     
                      <LayoutTitle title="Physical Information"/>     
                      <Row style={{top: 10, paddingTop: 20}}>
                        <Col size={25}/>
                          <Text style={{textAlign: 'left', color:"#fff", fontSize:20}}>Describe the Physical Status Using Stars</Text>
                        <Col size={25}/>
                      </Row>
                      <Row style={{top: 10}}>          
                        <Col>
                          <CardHolderPhysical/>
                        </Col>                      
                      </Row>         
                    </Grid>                 
                </Content>
              <Footer style={styles.footer}>
                  <Button onPress={(data)=>{this.props.changeComponentAction("PhotoInstructions")}} style={styles.PrevButton} small rounded>                      
                      <Text style={{color:"#fff", fontSize:16}}>back</Text>
                  </Button>
                  <View style={{flex:1}}></View>
                    {next_button}
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
};
