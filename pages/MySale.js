/* @flow */
'use strict';

import React, {Component, View, Text, StyleSheet, Image, TouchableHighlight, AlertIOS} from 'react-native-desktop';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {changeComponent, updateRootProp, getSalebySerial} from "../actions"
import {List, Thumbnail, Icon, Title, Container, Header, Content, Footer, Button} from '../node_modules_desktop/native-base_for_desktop';
import {Col, Row, Grid} from "../node_modules_desktop/react-native-easy-grid_for_desktop";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import myTheme from '../themes/myTheme'
import Square from "../components/Square";
import LayoutTitle from "../components/LayoutTitle";
import DealCard from "../components/dealCard"
import ActiveSaleStatus from "../components/ActiveSaleStatus"
import ActiveSaleMessages from "../components/ActiveSaleMessages"
import ActiveInspection from "../components/activeInspection"
import AssessmentList from "../components/assessmentList"


export default connect(mapStateToProps, mapDispatchToProps)(class MySale extends Component {
  

  render() {

    var OtherInspections = <View/>
    var paddingPrevInspections = 150;

    if (!!this.props.showOtherInspections){
      OtherInspections = <AssessmentList />
      paddingPrevInspections = 0;      
    }

    let _title
    let _icon
    let _color

    let status_array = [
    {status:0, title:"Submitted", icon:"bullhorn", color:myTheme.brandSuccess},
    {status:1, title:"Published for Selling", icon:"bullhorn", color:myTheme.brandSuccess},
    {status:2, title:"Buyer Interested", icon:"child", color:myTheme.brandSuccess},
    {status:3, title:"Sold", icon:"money", color:myTheme.brandSuccess},
    {status:4, title:"Delivering", icon:"truck", color:myTheme.brandSuccess},
    {status:5, title:"Approved By Buyer", icon:"check-circle", color:myTheme.brandSuccess},
    {status:10, title:"Modified ...Changing Sale", icon:"refresh", color:myTheme.brandWarning},
    {status:11, title:"Modified During Sale", icon:"warning", color:myTheme.brandWarning}]


    if (!!this.props.sale){
      _title = status_array.filter((i)=>{return(i.status==this.props.sale.status)})[0].title 
      _icon = status_array.filter((i)=>{return(i.status==this.props.sale.status)})[0].icon
      _color = status_array.filter((i)=>{return(i.status==this.props.sale.status)})[0].color
    }

    var _status =                    
      <Text style={{paddingTop:10, textAlign: 'center', color:_color, fontSize:20}}><FontAwesome size={20} name={_icon}></FontAwesome>&nbsp;&nbsp;{_title}</Text>


    var _content =
          <Grid>
            <LayoutTitle title="Ongoing Sale"/>    
            <Row  style={[styles.box, {marginTop: 50}]}>        
              <Col>                        
                <View style = {{flexDirection: 'column', alignItems:"center", justifyContent: 'center',}} >            
                  <View style={{flex:1, marginBottom:10, marginTop:50,}}>
                      <Text style={{color:"#fff", fontSize:26}}>You are not Selling Yet</Text>
                  </View>                        
                  <View style={{flex:1, marginBottom:50,}}>
                      <Text style={{color:"#fff", fontSize:16}}>Start Selling and follow here your sale process</Text>
                  </View>                        
                  <View style={{height: 100, marginTop:20, width:150}}>
                    <Button style={{backgroundColor:myTheme.brandPrimary}} textStyle={{paddingBottom:4}} block rounded onPress={(data)=>{this.props.changeComponentAction("StartSelling")}}>
                      <Text style={{color:"#fff", fontSize:16}}>Start Selling</Text>
                    </Button>                  
                  </View>
                </View>
              </Col>                      
            </Row>                
          </Grid>                 





    if (true){//!!this.props.sale){

      let _change =                   
                  <Col size={10} style={{paddingTop:10}}>
                      <Text style={{textAlign:"center", color:"#fff", fontSize:10, paddingBottom:3}}>Change it until it is published (around 8 hours)</Text>                  
                    <Button style={{backgroundColor:myTheme.brandPrimary}}  block rounded small onPress={(data)=>{this.props.changeComponentAction("Pricing")}}>
                      <Text style={{color:"#fff", fontSize:16, paddingBottom:3}}>Change Sale</Text>
                    </Button>                  
                  </Col>

      if (this.props.sale.status>0) {
        _change = 
                  <Col size={10} style={{paddingTop:10}}>
                      <Text style={{textAlign:"center", color:"#fff", fontSize:10, paddingBottom:3}}>Change is disabled. Let us know if you need to change something by messages</Text>                  
                    <Button style={{backgroundColor:myTheme.brandPrimaryLighterX}} disabled block rounded small onPress={(data)=>{this.props.changeComponentAction("Pricing")}}>
                      <Text style={{color:"#fff", fontSize:16, paddingBottom:3}}>Change Sale</Text>
                    </Button>                  
                  </Col>        
      }


      

      _content = 

              <Grid>                  
                <LayoutTitle title="Ongoing Sale"/>
                <Row style={{marginTop:10}}>
                  <Col size={25}/>
                  <Col size={10}>
                    <Text style={{paddingTop:20, textAlign: 'center', color:"#fff", fontSize:20}}>Active Sale</Text>
                  </Col>  
                  <Col size={12}/>
                    {_change}
                  <Col size={3}></Col>                      
                </Row>                
                <Row style={styles.box}>     
                  <Grid>     
                    <Row>                        
                      <Col size={25}>
                        <Text style={{paddingTop:10, paddingBottom:10, textAlign: 'center', color:"#fff", fontSize:20}}>Status</Text>
                      </Col>                                       
                      <Col size={5}/>
                      <Col size={20}>
                          {_status}
                      </Col>          
                      <Col size={5}/>
                    </Row>
                  </Grid> 
                </Row>                

                <Row style={styles.box}>          
                  <Col size={15}>
                    <ActiveSaleStatus/>
                  </Col>
                  <Col size={15}>
                    <ActiveInspection/>
                  </Col>                      
                </Row>
                <Row style={styles.box}>          
                  <Col size={15}>
                    <ActiveSaleMessages/>
                  </Col>
                </Row>


                <Row style={{padding:20, marginBottom:paddingPrevInspections}}>
                  <Col size={25}></Col>
                  <Col size={25}>
                      <Text style={{paddingTop:20, textAlign: 'center', color:"#fff", fontSize:20}}>Previous Assessments</Text>
                      <Button style={{marginTop:20}} block success rounded small onPress={(data)=>{this.props.updateRootPropAction({key:"showOtherInspections",value:!this.props.showOtherInspections})}}>
                        Show&nbsp;Previous&nbsp;Inspections.
                      </Button>
                  </Col>
                  <Col size={25}></Col>                      
                </Row>
                {OtherInspections}
              </Grid>   
      }

    


    return (
          <Container>
            <Content style={{backgroundColor:myTheme.brandGreyMidDark}} theme={myTheme}>
                {_content}                    
            </Content>  
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
    updateRootPropAction: (data) => {dispatch(updateRootProp(data))},
    getSalebySerialAction: (data) => {dispatch(getSalebySerial(data))},
  };
}  





const styles ={
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




//  <Col size={2}/> 
//  <Col size={10}>
//      <Button style={{width:40, backgroundColor:myTheme.brandPrimary, marginTop:2}}  block rounded small onPress={(data)=>{this.props.getSalebySerialAction()}}>
//        <FontAwesome style={{color:"#fff",}} size={20} name="refresh"></FontAwesome>
//      </Button>                            
//  </Col> 
