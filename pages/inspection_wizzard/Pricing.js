/* @flow */
'use strict';
import React, {Component, View, Text, StyleSheet, Image, TouchableHighlight, AlertIOS} from 'react-native-desktop';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {changeComponent, getSalePricing, changeSale, updateSale} from "../../actions"
import {List, Thumbnail, Icon, Title, Container, Header, Content, Footer, Button} from '../../node_modules_desktop/native-base_for_desktop';
import {Col, Row, Grid} from "../../node_modules_desktop/react-native-easy-grid_for_desktop";

import myTheme from '../../themes/myTheme'
import FinalOpinion from "../../components/finalOpinion"
import PriceProposals from "../../components/PriceProposals"
import LayoutTitle from "../../components/LayoutTitle";

export default connect(mapStateToProps, mapDispatchToProps)(class Pricing extends Component {


  componentDidMount(){
    //this.props.getSalePricingAction()
  }

  _goWithHigherPrice(){
    this.props.changeSaleAction({key:"sale_price_type", value:1})
    this.props.updateSaleAction()
    this.props.changeComponentAction("Done")      
  }

  _goWithLowerPrice(){
    this.props.changeSaleAction({key:"sale_price_type", value:0})    
    this.props.updateSaleAction()
    this.props.changeComponentAction("Done")      
  }

  render() {



    return (
      <Container>
          <Content style={{backgroundColor:myTheme.brandGreyMidDark}} theme={myTheme}>
            <Grid>     
              <LayoutTitle title="Pricing"/>
              <Row style={{marginTop: 10, paddingTop: 10}}>
                <Col size={25}/>
                  <Text style={{paddingTop:10, textAlign: 'left', color:"#fff", fontSize:20}}>Device Summary</Text>
                <Col size={25}/>
              </Row>
              <Row style={{marginTop: 10}}>          
                <Col>
                  <FinalOpinion/>
                </Col>                      
              </Row>
              <Row style={{marginTop: 10, paddingTop: 30}}>
                <Col size={25}/>
                  <Text style={{paddingTop:20, textAlign: 'left', color:"#fff", fontSize:20}}>Our Pricing Suggestions</Text>
                <Col size={25}/>
              </Row>
              <Row style={{marginTop: 10}}>          
                <Col>
                  <PriceProposals goWithHigherPrice={this._goWithHigherPrice.bind(this)} goWithLowerPrice={this._goWithLowerPrice.bind(this)} higherPrice={this.props.sale.higher_price} lowerPrice={this.props.sale.lower_price}/>
                </Col>                      
              </Row>
              <Row style={{padding:10, marginBottom:40}}>
                <Col size={25}></Col>
                <Col size={15}>
                    <Text style={{paddingTop:10, paddingBottom:10, textAlign: 'center', color:myTheme.brandGreyLight, fontSize:15}}>Not satisfied?</Text>
                    <Button onPress={(data)=>{this.props.changeComponentAction("Done")}} style={{backgroundColor:myTheme.brandPrimary}} textStyle={{paddingBottom:4}} block rounded small>
                      <Text style={{color:"#fff", fontSize:16}}>Send us your price</Text>
                    </Button>
                </Col>
                <Col size={25}></Col>                      
              </Row>
          </Grid>                 
        </Content>
        <Footer style={styles.footer}>
            <Button onPress={(data)=>{this.props.changeComponentAction("CollectPhysicalStatus")}} style={styles.PrevButton} small rounded>                      
                <Text style={{color:"#fff", fontSize:16}}>back</Text>
            </Button>
            <View style={{flex:1}}></View>
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
    getSalePricingAction: (data) => {dispatch(getSalePricing(data))},
    changeSaleAction: (data) => {dispatch(changeSale(data))},
    updateSaleAction: (data) => {dispatch(updateSale(data))},
  };
}  


const styles ={
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
