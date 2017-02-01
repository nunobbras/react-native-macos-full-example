/* @flow */
'use strict';

//import { discordLogin, getGateway, connect, getMessages, sendMessageToChannel } from './discordClient';
import { postJson, getJson, patchJson, getDataFromDevice, getSerialFromDevice, makeid} from './api';
import constants from './constants/constants.js';
import * as schemas from './dataSchemas';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const LOGOUT = 'LOGOUT';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const CHECK_TOKEN_REQUEST = 'CHECK_TOKEN_REQUEST';
export const CHECK_TOKEN_SUCCESS = 'CHECK_TOKEN_SUCCESS';
export const CHECK_TOKEN_FAILURE = 'CHECK_TOKEN_FAILURE';


// READ SERIAL NUMBER LOCAL
export const GETSERIAL_REQUEST = "GETSERIAL_REQUEST";
export const GETSERIAL_SUCCESS = "GETSERIAL_SUCCESS";
export const GETSERIAL_FAILURE = "GETSERIAL_FAILURE";

// READ DATA LOCAL
export const GETDATA_REQUEST = "GETDATA_REQUEST";
export const GETDATA_SUCCESS = "GETDATA_SUCCESS";
export const GETDATA_FAILURE = "GETDATA_FAILURE";


// CHANGE SELECTED COMPONENT 
export const COMPONENT_SELECTED = 'COMPONENT_SELECTED';

// CHANGE OTHER ROOT PROPS
export const CHANGE_ROOT_PROP = 'CHANGE_ROOT_PROP';


//SALE CRUD + UPDATE STATE
export const CHANGE_SALE = "CHANGE_SALE";

export const GET_SALE_REQUEST = "GET_SALE_REQUEST";
export const GET_SALE_SUCCESS = "GET_SALE_SUCCESS";
export const GET_SALE_FAILURE = "GET_SALE_FAILURE";

export const GET_SALE_BY_SERIAL_REQUEST = "GET_SALE_BY_SERIAL_REQUEST";
export const GET_SALE_BY_SERIAL_SUCCESS = "GET_SALE_BY_SERIAL_SUCCESS";
export const GET_SALE_BY_SERIAL_FAILURE = "GET_SALE_BY_SERIAL_FAILURE";

export const GET_SALE_PRICING_REQUEST = "GET_SALE_PRICING_REQUEST";
export const GET_SALE_PRICING_SUCCESS = "GET_SALE_PRICING_SUCCESS";
export const GET_SALE_PRICING_FAILURE = "GET_SALE_PRICING_FAILURE";

export const UPDATE_SALE_REQUEST = "UPDATE_SALE_REQUEST";
export const UPDATE_SALE_SUCCESS = "UPDATE_SALE_SUCCESS";
export const UPDATE_SALE_FAILURE = "UPDATE_SALE_FAILURE";

export const CREATE_SALE_REQUEST = "CREATE_SALE_REQUEST";
export const CREATE_SALE_SUCCESS = "CREATE_SALE_SUCCESS";
export const CREATE_SALE_FAILURE = "CREATE_SALE_FAILURE";



export const CREATE_SALE_MSG_REQUEST = "CREATE_SALE_MSG_REQUEST";
export const CREATE_SALE_MSG_SUCCESS = "CREATE_SALE_MSG_SUCCESS";
export const CREATE_SALE_MSG_FAILURE = "CREATE_SALE_MSG_FAILURE";

export const UPDATE_ASSESSMENT_REQUEST = "UPDATE_ASSESSMENT_REQUEST";
export const UPDATE_ASSESSMENT_SUCCESS = "UPDATE_ASSESSMENT_SUCCESS";
export const UPDATE_ASSESSMENT_FAILURE = "UPDATE_ASSESSMENT_FAILURE";

export const CREATE_ASSESSMENT_REQUEST = "CREATE_ASSESSMENT_REQUEST";
export const CREATE_ASSESSMENT_SUCCESS = "CREATE_ASSESSMENT_SUCCESS";
export const CREATE_ASSESSMENT_FAILURE = "CREATE_ASSESSMENT_FAILURE";

export const GET_ASSESSMENT_REQUEST = "GET_ASSESSMENT_REQUEST";
export const GET_ASSESSMENT_SUCCESS = "GET_ASSESSMENT_SUCCESS";
export const GET_ASSESSMENT_FAILURE = "GET_ASSESSMENT_FAILURE";




export const CHANGE_ASSESSMENT = "CHANGE_ASSESSMENT";
export const CHANGE_SALE_PHYS_COMP = "CHANGE_SALE_PHYS_COMP";

// export const GOT_GATEWAY = 'GOT_GATEWAY';
// export const GENERAL_ERROR = 'GENERAL_ERROR';
// export const GOT_MESSAGE = 'GOT_MESSAGE';

// export const CHANNEL_SELECTED = 'CHANNEL_SELECTED';
// export const MESSAGES_LOADED = 'MESSAGES_LOADED';

// export const MESSAGE_IS_SENDING = 'MESSAGE_IS_SENDING';
// export const MESSAGE_SENT = 'MESSAGE_SENT';


export function changeComponent(component: string){
  console.log("changing component...", component)
  return (dispatch, getState) => {
    dispatch({
      type: COMPONENT_SELECTED,
      selectedComponent: component,
    });
  }
};


export const login = (data) => {
  data = {"email":"nuno.bras@2ndhandler.com", "password":"nunobbras"};
  return {
      type:"",
      types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
      promise: () => {
      return postJson(constants.LOGIN_URL, data);
     }   
   }
}



export const checkToken = (data) => {
  data = {"name":"nuno brás", "email":"nuno.bras@2ndhandler.com", "password":"nunobbras"};  
  return {
    type:"",    
    types: [CHECK_TOKEN_REQUEST, CHECK_TOKEN_SUCCESS, CHECK_TOKEN_FAILURE],
    promise: () => {
      return postJson(constants.LOGIN_URL, data);
    }
  }
};

export const signup = (data) => {
  //return postJson(constants.SIGNUP_URL, data);
  data = {"name":"nuno brás", "email":"nuno.bras@2ndhandler.com", "password":"nunobbras"};

   return{
     types: [SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE],
     promise: () => {
       return postJson(constants.SIGNUP_URL, data);
     }
   }
};

export function logout() {
  return {
    type: LOGOUT,
  }
};

export function changeRootProp(data){
  return {
    type: CHANGE_ROOT_PROP,
    data: data
  };    
}




export function getSerial(data){
  return (dispatch, getState) => {
    dispatch({
      types: [GETSERIAL_REQUEST, GETSERIAL_SUCCESS, GETSERIAL_FAILURE],
      promise: () => {
       return getSerialFromDevice();
      }   
    }).then(()=>{
    dispatch({
      types: [GET_SALE_BY_SERIAL_REQUEST, GET_SALE_BY_SERIAL_SUCCESS, GET_SALE_BY_SERIAL_FAILURE],
      promise: () => {
       return getJson(constants.ACTIVE_SALE_URL + getState().serial + "/", getState().token);
      }
    }).then(()=>{
      if  (!!getState().token){
        if (!!getState().sale){
          console.log("sale id", getState().sale)
          console.log("updating sale...")
          dispatch(updateSale());
        }
        else{
          console.log("creating sale...")      
          let _saleData = schemas.sale
          _saleData.sale_code = makeid(4)
          _saleData.product = {serial_number:getState().serial}
          _saleData.seller = getState().useridSession
          dispatch({
            types: [CREATE_SALE_REQUEST, CREATE_SALE_SUCCESS, CREATE_SALE_FAILURE],
            promise: () => {
              return postJson(constants.SALE_CREATOR_URL, _saleData, getState().token);
            }
          })
        }
      }
    })
  })
}}


export function getSalebySerial(){
  return (dispatch, getState) => {
    
    dispatch({
      types: [GET_SALE_BY_SERIAL_REQUEST, GET_SALE_BY_SERIAL_SUCCESS, GET_SALE_BY_SERIAL_FAILURE],
      promise: () => {
       return getJson(constants.ACTIVE_SALE_URL + getState().serial + "/", getState().token);
      }
    })
  }
};


export function getSale(){
  return (dispatch, getState) => {
    
    dispatch({
      types: [GET_SALE_REQUEST, GET_SALE_SUCCESS, GET_SALE_FAILURE],
      promise: () => {
       return getJson(constants.SALE_URL + getState().sale.id + "/", getState().token);
      }
    })
  }
};


export function getSalePricing(){
  return (dispatch, getState) => {
    
    dispatch({
      types: [GET_SALE_PRICING_REQUEST, GET_SALE_PRICING_SUCCESS, GET_SALE_PRICING_FAILURE],
      promise: () => {
       return getJson(constants.SALE_URL + getState().sale.id + "/pricing/", getState().token);
      }
    })
  }
};




export function updateSale(){
  return (dispatch, getState) => {
    let data = getState().sale
    let id = getState().sale.id
    console.log("update data")
    console.log(data)
    dispatch({
      types: [UPDATE_SALE_REQUEST, UPDATE_SALE_SUCCESS, UPDATE_SALE_FAILURE],
      promise: () => {
       return patchJson(constants.SALE_URL + id + "/", data ,getState().token);
      }
    })
  }
};

export function changeSale(data){
  console.log("Change data")
  console.log(data)
  return (dispatch, getState) => {
          return dispatch({
          type: CHANGE_SALE,
          data: data
          })
    }  
}






export function createSale(data){
  //data on of "specsandstatus", ...;
  //for now, it is not needed

  return (dispatch, getState) => {
    console.log("data")
    console.log(data)
    console.log(getState().token)

    dispatch({
      types: [CREATE_SALE_REQUEST, CREATE_SALE_SUCCESS, CREATE_SALE_FAILURE],
      promise: () => {
        return postJson(constants.SALE_CREATOR_URL, data, getState().token);
      }
    })
  }
}


export function updateAssessment(id){
  return (dispatch, getState) => {
    let _index = getState().assessments.findIndex((curr)=>{return curr.id==id})
    let data = getState().assessments[_index]
    console.log("data")
    console.log(data)
    dispatch({
      types: [UPDATE_ASSESSMENT_REQUEST, UPDATE_ASSESSMENT_SUCCESS, UPDATE_ASSESSMENT_FAILURE],
      promise: () => {
       return patchJson(constants.ASSESSMENT_URL + id + "/", data ,getState().token);
      }
    })
  }
};

export function changeAssessment(data){
  return {
    type: CHANGE_ASSESSMENT,
    data: data

  };  
}


export function getAssessment(){
  return (dispatch, getState) => {
    
    dispatch({
      types: [GET_ASSESSMENT_REQUEST, GET_ASSESSMENT_SUCCESS, GET_ASSESSMENT_FAILURE],
      promise: () => {
       return getJson(constants.ASSESSMENT_URL + getState().currentAssessmentId + "/", getState().token);
      }
    })
  }
};



export function changeSalePhysicalComp(data){
  return (dispatch, getState) => {
    dispatch({
      type: CHANGE_SALE_PHYS_COMP,
      data: data
    });
  }
}

// export function createAssessment(data){
//   return {
//     type: CREATE_ASSESSMENT,
//     data: data
//   };  
// }

export function createAssessment(data){
  //data on of "specsandstatus", ...;
  //for now, it is not needed


  return (dispatch, getState) => {
    dispatch({
      types: [GETDATA_REQUEST, GETDATA_SUCCESS, GETDATA_FAILURE],
      promise: () => {
       return getDataFromDevice();
      }   
    }).then(()=>
    dispatch({
      types: [CREATE_ASSESSMENT_REQUEST, CREATE_ASSESSMENT_SUCCESS, CREATE_ASSESSMENT_FAILURE],
      promise: () => {
        let _index = getState().assessments.findIndex((curr)=>{return curr.assessment_code==getState().currentAssessmentCode})
        if (_index==-1){
          console.log("serious problems - did not found the assessment written in server: ", getState().currentAssessmentCode, getState().assessments)        
        }
        let data = getState().assessments[_index]
        console.log("create assessment data - getting sale id..")
        console.log(data)
        data.sale= getState().sale.id;
        console.log("************data************")
        console.log(getState().currentAssessmentCode)
        console.log(_index)
        console.log(data)
        return postJson(constants.ASSESSMENT_CREATOR_URL, data, getState().token);
      }
      })
    )
  }
}

//Mais tarde, quando demorar....
// .then(()=>dispatch(
//         onChangeComponent("ShowDataFromDevice")
//       ))






export function createSaleMessage(data){

  return (dispatch, getState) => {
    console.log("data")
    console.log(data)
    console.log(getState().token)

    dispatch({
      types: [CREATE_SALE_MSG_REQUEST, CREATE_SALE_MSG_SUCCESS, CREATE_SALE_MSG_FAILURE],
      promise: () => {
        return postJson(constants.SALE_URL + getState().sale.id + "/salemessages/", data, getState().token);
      }
    }).then(()=>{
      dispatch(getSalebySerial())
    }).then(()=>{
        console.log("HERE IT GOES!")
        dispatch(changeSale({key:"pendingMessage", value:null}))
      })
  }
}







// export function onMessageReceived(messagePayload) {
//   return {
//     type: GOT_MESSAGE,
//     messagePayload
//   };
// }


// export function init(): any {
//   return (dispatch, getState) => {
//     getGateway(getState().token).then((gatewayUrl) => {
//       return dispatch({
//         type: GOT_GATEWAY,
//         gatewayUrl
//       });
//     }).then(() => connect(
//       getState().token,
//       getState().gatewayUrl,
//       (payload) => {
//         dispatch(onMessageRecieved(payload));
//         if (!getState().selectedChannel) {
//           dispatch(onChannelSelect(payload.servers[0].channels[0].id));
//         }
//         if (getState().selectedChannel && !getState().messages) {
//           dispatch(onChannelSelect(getState().selectedChannel));
//         }
//       })
//     )
//     .catch(e => {
//       return dispatch({
//         type: GENERAL_ERROR,
//         error: e
//       });
//     });
//   };
// }


// export function onChannelSelect(channelId: string): any {
//   return (dispatch, getState) => {
//     dispatch({
//       type: CHANNEL_SELECTED,
//       selectedChannel: channelId,
//     });

//     getMessages(getState().token, channelId).then((messages) => {
//       return dispatch({
//         type: MESSAGES_LOADED,
//         messages
//       });
//     })
//     .catch(e => {
//       return dispatch({
//         type: GENERAL_ERROR,
//         error: e
//       });
//     });
//   };

// }

// export function sendMessage(text:string): any {
//   return (dispatch, getState) => {
//     dispatch({
//       type: MESSAGE_IS_SENDING
//     });

//     sendMessageToChannel(getState().token, getState().selectedChannel, text).then((res) => {
//       return dispatch({
//         type: MESSAGE_SENT,
//         messageBody: text,
//         res: res
//       });
//     })
//     .catch(e => {
//       return dispatch({
//         type: GENERAL_ERROR,
//         error: e
//       });
//     });
//   };
// }
