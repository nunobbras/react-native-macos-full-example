/* @flow */
'use strict';

import React, { Component, View, Text, StyleSheet, Image, ActivityIndicatorIOS} from 'react-native-desktop';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {changeComponent,createAssessment} from "../actions"

import myTheme from '../themes/myTheme'


export default connect(mapStateToProps, mapDispatchToProps)(class Splash extends Component {


  componentDidMount(){
    //console.log("entrei no did mount do splash")
    if (!!this.props.sale){
      this.timer = setTimeout(() => {this.props.changeComponentAction("MySale")}, 5000)
      //this.timer = setTimeout(() => {this.props.changeComponentAction("MySale")}, 5000)
      this.props.createAssessmentAction();
    }
    else{
      this.timer = setTimeout(() => {this.props.changeComponentAction("HowItWorksSell")}, 5000)
    }

  }
  
  componentWillUnmount() {
    clearTimeout(this.timer);
  }

//<Image style={styles.backgroundImage} source={require('../images/logoNEW.jpg')}>      
  render() {

    return (
        
          <View style={styles.backgroundImage}>
            <View style={[styles.Layout,{marginTop:80}]}>              
              <View style={{margin:100}}/>
              <View style={{flex:1}}>
                <Image style={styles.Image} source={require('../images/logo_blue.png')} />                                  
                <View style = {{margin:40}}>                           
                  <ActivityIndicatorIOS size="large" color="#fff"/>
                </View>
              </View>
              <View style={{marginTop:100, marginBottom:20}}>
                <Text style={{color:"white", fontSize:12}}>2ndHandler © 2016 -- 0.01 (DEMO VERSION)</Text>
              </View>
            </View>
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
    createAssessmentAction: (data) => {dispatch(createAssessment(data))},    
  };
}  



const styles = StyleSheet.create({
  Image: {
    height: 90,
    resizeMode:"contain"
  }, 
  backgroundImage: {
    //backgroundColor:"#1D3254",
    backgroundColor:myTheme.brandGreyDark,
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
  splashLogo: {  
    backgroundColor:'#6C8DC0',    
    width:200,
    paddingTop:20,
    paddingBottom:20,
    paddingLeft:20,
    paddingRight:20, 
    borderRadius:1
  },
});
