/* @flow */
'use strict';
//import request from 'reqwest';
import {VERIFY_TOKEN_URL} from './constants/constants.js';
import {AsyncStorage}  from 'react-native';
import { NativeModules } from 'react-native';

import * as schemas from './dataSchemas';
import {buildAssessment} from './BuildAssessment';
//import request from 'reqwest';
import request from "XMLHttpRequest";


export function postJson (URL, data, token=null) {
  console.log("POST URL: " + URL);
  //console.log(data);
  return request({
      headers: {
        Authorization: "JWT"+ token,
        "Content-Type": 'application/json',       
        },        
      url: URL,
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: JSON.stringify(data), 
    })
  };

export function getJson (URL, data, token=null) {
  console.log("GET URL: " + URL);

  return request({
      headers: {
        Authorization: "JWT "+ token,
        },    
      url: URL,
      method: 'GET',
      crossOrigin: true,
      type: 'json'
    })
  };  


export function patchJson (URL, data, token=null) {
  console.log("PATCH URL: " + URL);
  console.log(data);
  return request({
      headers: {
        Authorization: "JWT "+ token,
        "Content-Type": 'application/json',
        },        
      url: URL,
      method: 'PATCH',
      crossOrigin: true,
      type: 'json',     
      data: JSON.stringify(data), 
    })
  };  








export function getDataFromDevice(){
  console.log("getDataFromDevice");
  var CoreInspector = NativeModules.CallCoreInspector;      
  //console.log(CoreInspector.getAllData().then((data)=>{return buildAssessment(data)}));
  return CoreInspector.getAllData().then((data)=>{return buildAssessment(data)})

}


export function getSerialFromDevice () {
  console.log("getSerialFromDevice");
  var CoreInspector = NativeModules.CallCoreInspector;      
  
  return CoreInspector.getSerial()

}





////////////DUMMY

export function getDummySerialFromDevice(){

  console.log("getDummySerialFromDevice");

  return (
    new Promise(function(resolve, reject) {

      let response= dummySerialFunc()

      if (response.ok == true) {
        // Resolve the promise with the response
        resolve(response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error("error getting serial"));
      }


      // Handle network errors
      response.onerror = function() {
        reject(Error("Module Error"));
      };

      // Make the request
      response.send();
      }        
    )
  )
}



export function makeidmakeid(x)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for( var i=0; i < x; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
