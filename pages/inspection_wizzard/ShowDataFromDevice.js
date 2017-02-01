/* @flow */
'use strict';

import React, {Component, View, StyleSheet, Image, TouchableHighlight} from 'react-native-desktop';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {changeComponent} from "../../actions"
import {Card, CardItem, List, Text, Thumbnail, Icon, Title, Container, Header, Content, Footer, Button} from '../../node_modules_desktop/native-base_for_desktop';
import {Col, Row, Grid} from "../../node_modules_desktop/react-native-easy-grid_for_desktop";
import CardHolder from "../../components/CardHolder.js"
import GeneralOpinion from "../../components/generalOpinion.js"
import myTheme from '../../themes/myTheme'
import LayoutTitle from "../../components/LayoutTitle";



export default connect(mapStateToProps, mapDispatchToProps)(class ShowDataFromDevice extends Component {

  constructor() {
    super();

    this.state = {
      detailFormOpened:false,
    };

  }  

  
  render() {

    
    if (this.props.assessments.filter((item)=>{return item.id ==this.props.currentAssessmentId}).length ==0)
      console.log("problems with assessment id...")

    let _assessment = this.props.assessments.filter((item)=>{return item.id ==this.props.currentAssessmentId})[0]
    //console.log("_assessment")
    //console.log(_assessment)
    let _cardholder;

    if (this.state.detailFormOpened){
      _cardholder =   
        <View>                  
          <Row style={{top: 10, padding: 20}}>
            <Col size={25}/>
            <Text style={{paddingTop:20, textAlign: 'left', color:"#fff", fontSize:20}}>Details</Text>
            <Col size={25}/>
          </Row>                    
          <Row style={{top: 10}}>          
            <Col>
              <CardHolder components={_assessment.components}/>
            </Col>                      
          </Row>     
        </View>                         
    }
    else{
      _cardholder =
        <Row style={{top: 10}}>          
          <Col size={20}/>
          <Col size={10}>
            <View style={{marginTop:30}}>
              <Button style={{backgroundColor:myTheme.brandPrimary}} textStyle={{paddingBottom:4}} block rounded onPress={(data)=>{this.setState({detailFormOpened:true})}}>
                <Text style={{color:"#fff", fontSize:16}}>See Details</Text>
              </Button>                  
            </View>
          </Col>                      
          <Col size={20}/>                  
        </Row>
    }


    return (
            <Container>
                <Content style={{backgroundColor:myTheme.brandGreyMidDark}} theme={myTheme}>
                  <Grid>     
                    <LayoutTitle title="Inspection Results"/>
                    <Row style={{marginTop: 20}}>          
                      <Col>
                        <GeneralOpinion assessment={_assessment}/>
                      </Col>                      
                    </Row>
                    {_cardholder}
                </Grid>                 
              </Content>
              <Footer style={styles.footer}>
                  <Button onPress={(data)=>{this.props.changeComponentAction("CheckDataWaiting")}} style={styles.PrevButton} small rounded>                      
                      <Text style={{color:"#fff", fontSize:16}}>back</Text>
                  </Button>
                  <View style={{flex:1}}></View>
                  <Button onPress={(data)=>{this.props.changeComponentAction("PhotoInstructions")}} style={styles.NextButton} small rounded>                    
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
  };
}  



const styles ={
  cardholder:{
    flexDirection: 'row',
    flexWrap: "wrap",
    flex:0,
    justifyContent: 'center',    
  },
  card: {  
    flex:0,  
    margin:10,
    width:250,
  },
  carditemheader:{
    backgroundColor:"#F5F5F5",    
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


//<Text style={{paddingTop:20, textAlign: 'left', color:"#fff", fontSize:20}}>General Opinion</Text>


