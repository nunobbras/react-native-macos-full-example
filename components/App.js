/* @flow */
'use strict';

import React, { Component, View } from 'react-native-desktop';
import { connect } from 'react-redux';


//Layouts
import Layout from '../layouts/Layout';
import FullLayout from '../layouts/FullLayout';

//Pages
import Splash from '../pages/Splash';
import HowItWorksSell from '../pages/HowItWorksSell';
import StartBuying from '../pages/StartBuying';
import StartSelling from '../pages/StartSelling';
import CheckDataWaiting from '../pages/inspection_wizzard/CheckDataWaiting';
import ShowDataFromDevice from '../pages/inspection_wizzard/ShowDataFromDevice';
import CollectPhysicalStatus from '../pages/inspection_wizzard/CollectPhysicalStatus';
import PhysicalStatusInstructions from '../pages/inspection_wizzard/PhysicalStatusInstructions';
import Pricing from '../pages/inspection_wizzard/Pricing';
import Done from '../pages/inspection_wizzard/Done';
import MySale from '../pages/MySale';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import UserProfile from '../pages/userProfile';
import Help from '../pages/Help';


import {changeComponent, getSale} from "../actions"



export default connect(mapStateToProps, mapDispatchToProps)(class App extends Component {


  // componentDidMount(){
  //   console.log("this.props.useridSession")
  //   console.log(this.props.useridSession)
  //   if (!this.props.useridSession){
  //     this.props.changeComponentAction("Login")
  //   }
  // }


  componentWillMount() {
    this._timer = setInterval(this._checkSale, 30000);    
  }


  _checkSale = () => {
    console.log("_checking Sale & Assessment...")
    console.log(this.props.sale.id)
    console.log(this.props.useridSession)

    if (!!this.props.sale && !!this.props.useridSession){
      console.log("Active sale: " + this.props.sale.id)
      this.props.getSaleAction()
    }
    else{
      console.log("No Active Sale")
      //console.log(this.props)
    }
   };

  render() {


    let Component;
    let LayoutType;
    let Label;

    Component = Splash;
    Label = "Splash"
    LayoutType = FullLayout;        


    switch (this.props.activeComponent) {
      case "Splash":
        Component = Splash;
        Label = "Splash"
        LayoutType = FullLayout;        
        break;
      case "HowItWorksSell":
        Component = HowItWorksSell;
        Label = "HowItWorksSell"
        LayoutType = Layout;        
        break;
      case "StartBuying":
        Component = StartBuying;
        Label = "StartBuying"
        LayoutType = Layout;        
        break;
      case "StartSelling":
        Component = StartSelling;                
        Label = "StartSelling"
        LayoutType = Layout;        
        break;
      case "CheckDataWaiting":
        Component = CheckDataWaiting;                
        Label = "StartSelling"
        LayoutType = Layout;        
        break;
      case "ShowDataFromDevice":
        Component = ShowDataFromDevice;                
        Label = "StartSelling"
        LayoutType = Layout;        
        break;
      case "CollectPhysicalStatus":
        Component = CollectPhysicalStatus;                
        Label = "StartSelling"
        LayoutType = Layout;        
        break;
      case "PhotoInstructions":
        Component = PhysicalStatusInstructions;                
        Label = "StartSelling"
        LayoutType = Layout;        
        break;        
      case "CheckDataWaiting":
        Component = CheckDataWaiting;                
        Label = "StartSelling"
        LayoutType = Layout;        
        break;
      case "Pricing":
        Component = Pricing;                
        Label = "StartSelling"
        LayoutType = Layout;        
        break;
      case "Done":
        Component = Done;                
        Label = "StartSelling"
        LayoutType = Layout;        
        break;
      case "MySale":
        Component = MySale;                
        Label = "MySale"
        LayoutType = Layout;        
        break;
      case "Login":
        Component = Login;                
        Label = "Login"
        LayoutType = Layout;        
        break;
      case "Signup":
        Component = Signup;                
        Label = "Signup"
        LayoutType = Layout;        
        break;
      case "UserProfile":
        Component = UserProfile;                
        Label = "UserProfile"
        LayoutType = Layout;        
        break;
      case "Help":
        Component = Help;                
        Label = "Help"
        LayoutType = Layout;        
        break;

    }

    // if (!this.props.useridSession){
    //   Component = Login               
    //   Label = "Login"
    //   LayoutType = Layout
    // }

    return (
      <LayoutType label={Label} component={Component}/>
    );
  }
});

function mapStateToProps(state) {
  return state;
}


function mapDispatchToProps(dispatch, getState) {
  return {
    changeComponentAction: (data) => {dispatch(changeComponent(data))},
    getSaleAction: (data) => {dispatch(getSale(data))},
    getAssessmentAction: (data) => {dispatch(getAssessment(data))},
  };
}  

