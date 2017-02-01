/* @flow */
'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from "moment"


import {changeComponent, createAssessment, changeRootProp} from "../../actions"
import React, { Component, View, Text, StyleSheet, Image, ActivityIndicatorIOS} from 'react-native-desktop';
import {Thumbnail, Icon, Title, Container, Header, Content, Footer, Button} from '../../node_modules_desktop/native-base_for_desktop';
import {Col, Row, Grid} from "../../node_modules_desktop/react-native-easy-grid_for_desktop";
import Square from "../../components/Square";

import myTheme from '../../themes/myTheme'
import * as schemas from '../../dataSchemas';


export default connect(mapStateToProps, mapDispatchToProps)(class CheckDataWaiting extends Component {
  

  constructor() {
    super();
// 
    // this.state = {
    //   componentTextIndex:0,
    //   componentTexts: _arr, 
    //   componentTextsDone:false 
    // };

  }


//  componentWillUpdate(){
//    this._checkDataMessage = this.props.checkDataMessage
//  }

  componentDidMount(){
    //console.log("entrei")
    //this.changeComponentText()

    //isto devem ser duas actions em serie....como se faz? estudar isto

    this.props.createAssessmentAction();
    //let _assessmentId = this.props.currentAssessmentId    
    //let _assessmentId = 1
    //this.props.queryDeviceAction(_assessmentId)
    //this.props.syncAssessmentAction(_assessmentId)
  }

  componentWillUnmount() {
    clearTimeout(this.timer1);
    clearTimeout(this.timer2);
  }



  // changeComponentText(){
  //   //console.log("start changing text CPU/MEM...")

  //     // this.timer1 = setTimeout(() => {this.changeComponentText()}, 750)
  //     // this.setState({componentTextIndex:this.state.componentTextIndex+1});      


  // }

  
  render() {

    console.log("this.props.checkDataMessageNumber")
    console.log(this.props.checkDataMessageNumber)
    

    if (this.props.checkDataMessageNumber == 2 ){
      
      if (!!this.props.networkProblem){
        this.timer2 = setTimeout(() => {this.props.changeComponentAction("StartSelling")}, 500)
      }
      else{  
        //this.timer1 = setTimeout(() => {this.props.changeRootPropAction({key:"checkDataMessageNumber", value:3})}, 500)        
        this.timer2 = setTimeout(() => {this.props.changeComponentAction("ShowDataFromDevice")}, 2000)
      }
    }





    let _arr = ["","Analysing Your Device...", "Compiling all information...", "Done!"]
//     .concat(
// //        schemas.deviceStatusPresentation.components.map(component=>{return component.componentName}),
//     []);

    let _checkDataMessage = _arr[this.props.checkDataMessageNumber]

    //console.log(this.state.componentTexts[this.state.componentTextIndex])    

    return (
        <Container>
          <Content style={{backgroundColor:myTheme.brandGreyMidDark}} theme={myTheme}>        
            <View style={styles.Layout}>
              <View style={{marginBottom:80}}/>
              <View style={{padding: 40, paddingRight:0, paddingLeft:0, borderWidth:1, borderRadius:20, borderColor:myTheme.brandPrimaryDarkX, backgroundColor:myTheme.brandGreyDark}}>
                <Image style={styles.Image} source={require('../../images/logo_BW.png')} />                    
                <View  style={{marginTop:10}}>
                  <Text style={{textAlign: 'center', color:myTheme.brandGrey, fontSize:25}}>Scanning Your Device, Please Wait</Text>
                </View>                 
                <View style={{paddingTop:30}}>
                  <Text style={{textAlign: 'center', color:myTheme.brandPrimary, fontSize:15}}>{_checkDataMessage}</Text>
                </View>
                <View>                 
                    <ActivityIndicatorIOS
                      style={[styles.centering, {height: 40}, ]}
                      color="white"
                      />              
                </View>             
              </View>             
            </View>             
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
    createAssessmentAction: (data) => {dispatch(createAssessment(data))},
    //syncAssessmentAction: (data) => {dispatch(syncAssessment(data))},     
    changeRootPropAction: (data) => {changeRootProp(data)},     
  };
}  




const styles = StyleSheet.create({
  Image: {
    height: 100,
    resizeMode:"contain"
  }, 
  backgroundImage: {
    //backgroundColor:"#1D3254",
    backgroundColor:myTheme.brandPrimary,
    flex: 1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  
  }, 
  Layout:{
    flex: 1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',    
  },
  centering: {
    paddingTop:20,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
