/* @flow */
'use strict';

import {
  SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  CHECK_TOKEN_REQUEST, CHECK_TOKEN_SUCCESS, CHECK_TOKEN_FAILURE,  
  LOGOUT, 

  GETDATA_REQUEST, GETDATA_SUCCESS, GETDATA_FAILURE,
  GETSERIAL_REQUEST, GETSERIAL_SUCCESS, GETSERIAL_FAILURE,

  CREATE_SALE_REQUEST, CREATE_SALE_SUCCESS, CREATE_SALE_FAILURE,
  GET_SALE_REQUEST, GET_SALE_SUCCESS, GET_SALE_FAILURE,
  GET_SALE_BY_SERIAL_REQUEST, GET_SALE_BY_SERIAL_SUCCESS, GET_SALE_BY_SERIAL_FAILURE,
  UPDATE_SALE_REQUEST, UPDATE_SALE_SUCCESS, UPDATE_SALE_FAILURE,
  
  UPDATE_ASSESSMENT_REQUEST, UPDATE_ASSESSMENT_SUCCESS, UPDATE_ASSESSMENT_FAILURE, 
  CREATE_ASSESSMENT_REQUEST, CREATE_ASSESSMENT_SUCCESS, CREATE_ASSESSMENT_FAILURE, 
  GET_ASSESSMENT_REQUEST, GET_ASSESSMENT_SUCCESS, GET_ASSESSMENT_FAILURE,
  CHANGE_ASSESSMENT,
  CHANGE_SALE_PHYS_COMP,
  CHANGE_SALE,
  

  COMPONENT_SELECTED, 
  CHANGE_ROOT_PROP
} from './actions';

import update from 'react/lib/update' 

import { LOAD, SAVE } from 'redux-storage';
import * as schemas from './dataSchemas';



type GlobalState = any;

const defaultState: GlobalState = {
  serial:null,
  sale:null,
  networkProblem:null,
  currentAssessmentId:null,
  currentAssessmentCode:null, //just use this before commit assessment - then you have the id (after that this field be set to null)
  isLoading: false,
  tabs: [], //REMOVE
  activeComponent: "Splash",
  deviceStatusPresentation: schemas.deviceStatusPresentation,
  assessments: schemas.assessments,
  emailSession:null,
  useridSession:null,
  token:null,    

  showNiceMessage:false,
  error: false,
  
  message:null,
  messageChangeComponent: false,  

  checkDataMessageNumber:0, 
  

};

export default function reducer(state: GlobalState, action: any): GlobalState {

  let newState;
  let _message;
  let _networkProblem;
  let _index;
  let _emailSession;
  let _useridSession;
  let _token;
  let _sale;
  let _error;
  let _activeComponent;
  let _currentAssessmentId

  //state = defaultState;
  

  if (!state) { state = defaultState; }  

  //state.activeComponent = "ShowDataFromDevice"
  //state.sale = null

  if (!!action.error){
    console.log("reducer with error object... ", action.error.status)
    if (action.error.status == 403){
      console.log("403")
      state = {...state,
        emailSession: null,
        useridSession:null,
        token:null,
        activeComponent:"Login"
      }
    }

    if (action.error.status == 500 || action.error.status == "Network Error"){
      console.log("500")
      state = {...state,
        networkProblem:true,
        error: null
      }
    } 

    if (action.error.status == 400){
      console.log("400")
      _message = "Sorry, we're having problems generating your request."
      state = {...state,
        networkProblem:false,
        emailSession: null,
        useridSession:null,
        token:null,
        activeComponent:"Login",
        isLoading: false,
        error: true,
        message: _message,        
      }      
    }

    return {
      ...state,
    };    
  }      
  else{
    state = {...state,
      error: null,  
    }
  }


  switch (action.type) {

    case COMPONENT_SELECTED: 
      console.log("COMPONENT_SELECTED")
      console.log(action.selectedComponent)

      if (action.selectedComponent=="CheckDataWaiting"){
        state.checkDataMessageNumber= 0
      }

      return {
        ...state,
        activeComponent: action.selectedComponent,
        error: null,
        isLoading: false,
      };          

    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        
        emailSession: action.data.user.email,
        useridSession: action.data.user.id,
        token: action.data.token,
        
        showNiceMessage:true,
        message:"Login succesfull",
        messageChangeComponent:"StartSelling",  
        networkProblem: null,   
      };

    case LOGIN_FAILURE:
      _message = action.error.error
   
      return {
        ...state,
        isLoading: false,
        error: true,
        message: _message,
      };

    // case LOGIN_FAILURE:
    //   _message = !!action.error.non_field_errors?action.error.non_field_errors[0]:action.error
    //   if (action.error == "TypeError: Network request failed"){
    //     _networkProblem = true;
    //   }    
    //   return {
    //     ...state,
    //     error: null,
    //     isLoading: false,
    //     emailSession: "nunobbras@gmail.com",
    //     useridSession: "1",
    //     token: "xpto",
    //     error: false,
    //     message:"Login succesfull",
    //     networkProblem: false
    //   };





    case CHECK_TOKEN_REQUEST:
      console.log("CHECK_TOKEN_REQUEST");
      return {
        ...state,
        error: null,
        isLoading: null
      };  

    case CHECK_TOKEN_SUCCESS:
      console.log("CHECK_TOKEN_SUCCESS");
      return {
        ...state,
        token: action.data.token,
        error: false,
        message: false,
        networkProblem: false,
      };    


    case CHECK_TOKEN_FAILURE:

      console.log("CHECK_TOKEN_FAILURE");
      //_message = !!action.error.non_field_errors?action.error.non_field_errors[0]:action.error
      //_message = action.error.error
      console.log(_message);
      return {
        ...state,
        isLoading: false,
        error: true,
        message: _message,
      };







    case LOGOUT:
      return {
        ...state,
        isLoading: false,
        emailSession: null,
        useridSession: null,
        token: null,
        error: false,
        message: null, 
        activeComponent: "HowItWorksSell",
        networkProblem: null,
      };

     case SIGNUP_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        message:"Signup succesfull",
        networkProblem: false
      };

    case SIGNUP_FAILURE:
      _message = action.error.error
      return {
        ...state,
        isLoading: false,
        error: true,
        message: _message,
      };



     case GETSERIAL_REQUEST:
     console.log("GETSERIAL_REQUEST");
      return {
        ...state,
        error: null,
        isLoading: true
      };

    case GETSERIAL_SUCCESS:
      console.log("GETSERIAL_SUCCESS");
      console.log(action.data);

      return {
        ...state,
        error: null,
        isLoading: false,
        serial:action.data

      };

    case GETSERIAL_FAILURE:
      console.log("GETSERIAL_FAILURE");
      _message = action.error.error
      return {
        ...state,
        isLoading: false,
        error: true,
        message: _message,
      };



    case CHANGE_SALE:
      console.log("CHANGE_SALE")
      console.log(action.data.value)
      newState = update(state,{sale:{[action.data.key]:{$set:action.data.value}}});
      return {
        ...newState,
        isLoading: false,
      };


    case CHANGE_ASSESSMENT:
      console.log("CHANGE_ASSESSMENT")

      _index = state.assessments.findIndex((curr)=>{return curr.id==action.data.id})      
      // console.log(state.assessments[_index].[action.data.key])

      newState = update(state,{assessments:{[_index]:{[action.data.key]:{$set:action.data.value}}}});
      return {
        ...newState,
        isLoading: false,
      };

    case CHANGE_SALE_PHYS_COMP:
      console.log("CHANGE_SALE_PHYS_COMP")
      console.log(state.sale)
      
      if (action.data.comp_index == -1){
        //state.assessments[_index].physical_components.concat(action.data.value)
        //newState = update(state,)
        newState = update(state,{sale:{physical_components:{$push:[action.data.value]}}});        
      }
      else{
        //state.assessments[_index].physical_components[_compIndex] = action.data.value; 
        newState = update(state,{sale:{physical_components:{[action.data.comp_index]:{$merge:action.data.value}}}});        
      }

      console.log(action.data)      
      console.log(state.sale.physical_components)
      // console.log(newState.state.physical_components)

      return {
        ...newState,
        isLoading: false,
      };


    case CHANGE_ROOT_PROP:
      console.log("CHANGE_ROOT_PROP")
      console.log(action.data.key)
      console.log(action.data.value)      
      newState = update(state,{[action.data.key]:{$set:action.data.value}});
      console.log("newState")
      console.log(newState)
      console.log("state")
      console.log(state)

      return {
        ...newState,
        isLoading: false,
      };


    // get data from device
    case GETDATA_REQUEST:
      console.log("GETDATA_REQUEST");
      return {
        ...state,
        error: null,
        isLoading: true,
        checkDataMessageNumber:0,
      };

    case GETDATA_SUCCESS:
      console.log("GETDATA_SUCCESS");
      console.log(action.data);

      return {
        ...state,
        error: null,
        isLoading: false,
        //message:"OK",
        networkProblem: false,    
        assessments: state.assessments.concat(action.data),
        currentAssessmentCode:action.data.assessment_code,
        checkDataMessageNumber: 1,
      };

    case GETDATA_FAILURE:
      console.log("GETDATA_FAILURE");
      console.log(action.error);

      _message = action.error.error

      return {
        ...state,
        isLoading: false,
        error: true,
        message: _message,
      };


    //
    case CREATE_ASSESSMENT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
        checkDataMessageNumber: 1, 
      };

    case CREATE_ASSESSMENT_SUCCESS:
      console.log("entering CREATE_ASSESSMENT_SUCCESS")
      _index =  state.assessments.findIndex((curr)=>{return curr.assessment_code==state.currentAssessmentCode});

      if (_index == -1){
        console.log("generating new assessment in the state... problem!")
        state.assessments.concat(action.data)
      }
      else{
        console.log("merging...")
        console.log(state.assessments[_index])
        console.log(action.data)
        state.assessments[_index] = action.data; 
      }

      //if state.sale.status >1 write assessment as the new one and change status flag to 11!

      //if (!!state.sale.specs_changed){
      _currentAssessmentId = action.data.id
      //  state.sale.status = 11
      //}
      //else{
      //  _currentAssessmentId = state.currentAssessmentId
      //}

      // console.log("action.data.id")
      // console.log(action.data.id)
      // console.log(state)      
      return {
        ...state,
        isLoading: false,
//        showNiceMessage: true,
//        messageChangeComponent:null,
//        message:"Server udpate done",  
        checkDataMessageNumber: 2, 
        currentAssessmentId: _currentAssessmentId,
        networkProblem: null,        
      };

    case CREATE_ASSESSMENT_FAILURE:
      console.log("Error in CREATE_ASSESSMENT_FAILURE: ")
      console.log(action)

      _message = action.error

      return {
        ...state,
        isLoading: false,
        error: true,
        message: _message,
        emailSession: _emailSession,
        useridSession: _useridSession,
        networkProblem: _networkProblem
      };


    case GET_ASSESSMENT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,        
      };

    case GET_ASSESSMENT_SUCCESS:
      console.log("entering GET_ASSESSMENT_SUCCESS")
      console.log(state.currentAssessmentCode)
      console.log("----")

      _index =  state.assessments.findIndex((curr)=>{console.log(curr.assessment_code); return curr.assessment_code==state.currentAssessmentCode});

      if (_index == -1){
        console.log("generating new assessment in the state... problem!")
        //state.assessments.concat(action.data)
      }
      else{
        console.log("merging...")
        console.log(state.assessments[_index])
        console.log(action.data)
        state.assessments[_index] = action.data; 
      }

      return {
        ...state,
        isLoading: false,
        error: false,
      };


    case GET_ASSESSMENT_FAILURE:
      console.log("Error in GET_ASSESSMENT_FAILURE")
      console.log(action.error.status)

      _message = action.error

      return {
        ...state,
        isLoading: false,
        error: true,
        message: _message
      };



    case UPDATE_ASSESSMENT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case UPDATE_ASSESSMENT_SUCCESS:

      _index =  state.assessments.findIndex((curr)=>{return curr.id==action.data.id});
      if (_index == -1){
        state.assessments.concat(action.data)
      }
      else{
        state.assessments[_index] = action.data; 
      }

      return {
        ...state,
        isLoading: false,
        error: false,
        checkDataMessageNumber: 2,
        networkProblem: null,        
      };

    case UPDATE_ASSESSMENT_FAILURE:
      console.log("Error in UPDATE_ASSESSMENT_FAILURE: ")
      console.log(action.error)
      _message = action.error
      return {
        ...state,
        isLoading: false,
        error: true,
        message: _message,
        checkDataMessageNumber: 3,
      };


    //SALE CRUD


    case CREATE_SALE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case CREATE_SALE_SUCCESS:
      console.log("entering CREATE_SALE_SUCCESS")

      console.log(action.data)
      console.log(state)      
      return {
        ...state,
        isLoading: false,
        error: false,
        sale: action.data,
        networkProblem: null,        
      };

    case CREATE_SALE_FAILURE:
      console.log("Error in CREATE_SALE_FAILURE: ")
      console.log(action.error.status)
      _message = action.error

      return {
        ...state,
        isLoading: false,
        error: true,
        message: _message
      };





    case UPDATE_SALE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case UPDATE_SALE_SUCCESS:
        state.sale = action.data; 

      return {
        ...state,
        isLoading: false,
        networkProblem: null,
      };

    case UPDATE_SALE_FAILURE:
      console.log("Error in UPDATE_SALE_FAILURE: ")
      console.log(action)
      _message = action.error

      return {
        ...state,
        isLoading: false,
        error: true,
        message: _message,
      };



    case GET_SALE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case GET_SALE_SUCCESS:
      console.log("GET_SALE_SUCCESS")
      if (!!action.data){
        console.log("adding sale: ", action.data)
        state.sale = action.data; 
      }
      else{
        state.sale  = null
        console.log("no sale yet, submiting new one")
      }


      return {
        ...state,
        isLoading: false,
        error: false,
      };

    case GET_SALE_FAILURE:
      console.log("Error in GET_SALE_FAILURE: ")
      console.log(action.error.status)

      _message = action.error

      return {
        ...state,
        isLoading: false,
        error: true,
        message: _message
      };


    case GET_SALE_BY_SERIAL_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case GET_SALE_BY_SERIAL_SUCCESS:
      console.log("GET_SALE_BY_SERIAL_SUCCESS")
      if (action.data.length > 0){
        console.log("adding sale: ", action.data[0])
        state.sale = action.data[0]; 
      }
      else{
        state.sale  = null
        console.log("no sale yet, submiting new one")
      }


      return {
        ...state,
        isLoading: false,
        networkProblem: null,
      };

    case GET_SALE_BY_SERIAL_FAILURE:
      console.log("Error in GET_SALE_BY_SERIAL_FAILURE: ")
      console.log(action.error.status)

      _message = action.error

      return {
        ...state,
        isLoading: false,
        error: true,
        message: _message
      };


    case GET_SALE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case GET_SALE_SUCCESS:
      console.log("GET_SALE_SUCCESS")
      if (action.data.length > 0){
        console.log("adding sale: ", action.data[0])
        state.sale = action.data[0]; 
      }
      else{
        state.sale  = null
        console.log("no sale yet, submiting new one")
      }


      return {
        ...state,
        isLoading: false,
        networkProblem: null,
      };

    case GET_SALE_FAILURE:
      console.log("Error in GET_SALE_FAILURE: ")
      console.log(action.error.status)

      _message = action.error

      return {
        ...state,
        isLoading: false,
        error: true,
        message: _message
      };

    default:
      return state;
  }
}
