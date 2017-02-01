
import * as schemas from './dataSchemas';
import {makeid} from "./api"
//import {DOMParser} from "xmldom"
//import {parseString} from 'xml2js'

export function buildAssessment(data){

	console.log("buildAssessment function starting....")
	let response = {}

	response.data = {}
	response.ok = true  
	response.status_text = "Done"
	// response.data.captured_serial_number = data.direct_data.sysSerialNumber
	// response.data.HW_uuid = data.direct_data.sysUUID // HW_uuid
	// response.data.captured_version_code = data.direct_data.sysModelName
	// response.data.captured_OSVersion = data.direct_data.sysOSVersion
	response.data.assessment_status = 1
	response.data.assessment_code = makeid(5)
	response.data.raw_direct_data = data.direct_data
	response.data.raw_profiler_memory = data.profiler_memory
	response.data.raw_profiler_disk = data.profiler_disk
	response.data.raw_profiler_screen = data.profiler_screen
	response.data.raw_profiler_network = data.profiler_network
	response.data.raw_profiler_battery = data.profiler_battery


  return response

}

// export function buildAssessment(data){

//   console.log("data from DEVICE:")
//   console.log(data)
//   let response = {}
  
//   let component_names = schemas.deviceStatusPresentation.components.map((item) =>{return item.componentName})
//   let component_models = schemas.deviceStatusPresentation.components.map((item) =>{return item.model})
//   let component_func = schemas.deviceStatusPresentation.components.map((item) =>{return item.func})
//   let components = [];
  
  
//   component_names.map((item,i)=>{
//   	//console.log(component_func)

//   	let _workData = workData(component_func[i], data)
			
// 	console.log(_workData)

// 	components[i] = {};
// 	components[i].component_type={};
// 	components[i].component_type.name = component_names[i]; 
// 	components[i].title = component_models[i];
// 	components[i].small_desc = _workData[0];
// 	components[i].prop1 = _workData[1];
// 	components[i].prop2 = _workData[2];
// 	components[i].prop3 = _workData[3];
// 	components[i].prop4 = _workData[4];
// 	components[i].prop5 = _workData[5];
// 	components[i].prop6 = _workData[6];
// 	components[i].prop7 = _workData[7];
// 	components[i].status = Math.floor((Math.random()*100))
//   })
  
//   response.data = JSON.parse(JSON.stringify(schemas.assessment));  
//   response.ok = true  
//   response.status_text = "Done"
//   response.data.components = JSON.parse(JSON.stringify(components));
//   response.data.captured_serial_number = data.direct_data.sysSerialNumber
//   response.data.HW_uuid = data.direct_data.sysUUID // HW_uuid
//   response.data.captured_version_code = data.direct_data.sysModelName
//   response.data.captured_OSVersion = data.direct_data.sysOSVersion
//   //response.data.assessment_code = makeid(5)

//   return response

// }

// // TOTAL TIME LOGGED;
// // DEAD PIXELS (SCREEN STATUS - ELECTRONIC at least);
// // KEYBOARD TYPE + photo?
// // CONTROL IF BTOOTH AND NETWORK ARE ABLE TO CONNECT

// function workData(_func, data){
// 	_func = "memory"
// 	let prop = [];
// 	switch(_func) {


// //////////////////////////////////////////////////////////////////////////////////////////
// 	    case "CPU":	    	
// 			prop[0] = data.direct_data.sysProcessorName
// 			prop[1] = {processor_speed:data.direct_data.sysProcessorSpeed};
// 			prop[2] = {processor_count:data.direct_data.sysProcessorCount};
// 			return prop;


// //////////////////////////////////////////////////////////////////////////////////////////
// 		case "memory":

// 			//parser = new DOMParser();
// 			//console.log(data)
// 			console.dir(data.profiler_memory)
//  			xmlDoc = parser.parseFromString(data.profiler_memory, "text/xml");
//  			console.log("xmlDoc")
//  			console.log(xmlDoc)

// 			//let _sizes = data.profiler_memory (dimm_size)
// 			//let _types = data.profiler_memory (dimm_type)
// 			//let _speeds = data.profiler_memory (dimm_speed)
// 			//let _status = data.profiler_memory (dimm_status)
// 			//let _manufacturers = data.profiler_memory (dimm_manufacturer)
// 			//let _partnumber = data.profiler_memory (dimm_part_number)
//  		//let _serialnumber = data.profiler_memory (dimm_serial_number)
//  		//let _status = data.profiler_memory (dimm_status)

			
// 			prop[0] = "_types[0] _speeds[0] _total_size"
// 			prop[1] ={phys_memory_total_size:data.direct_data.sysPhysicalMemory};
// 			prop[2] ={phys_memory_sizes:_sizes};
// 			prop[3] ={phys_memory_types:_types};
// 			prop[4] ={phys_memory_speeds:_speeds};
// 			prop[5] ={phys_memory_manufacturers:_manufacturers};
// 			prop[6] ={phys_memory_partnumber:_partnumber};
// 			prop[7] ={phys_memory_serialnumber:_serialnumber};
// 			prop[8] ={phys_memory_status:_status};
// 			return prop;


// //////////////////////////////////////////////////////////////////////////////////////////
// 		case "disk":

// 			//let _n_volumes = data.profiler_disk
// 			//let _medium_types = 
// 			//let _device_names = 
// 			//let _sizes = 
// 			//let smart_status = 
// 			//let _status = 
// 			//let _disk_UUID = 

// 			prop[0] = "n_volumes ";
// 			prop[1] = {disk_n_volumes:_n_volumes};
// 			prop[2] = {disk_medium_types:_medium_types};
// 			prop[3] = {disk_device_names:_device_names};
// 			prop[4] = {disk_sizes:_sizes};
// 			prop[5] = {disk_smart_status:_smart_status};
// 			prop[6] = {disk_status:_status};
// 			prop[7] = {disk_disk_UUID:_disk_UUID};
// 			return prop;


// //////////////////////////////////////////////////////////////////////////////////////////
// 		case "screen":

// 			//let _resolutions = ??? 
// 			//let _card_name = data.profiler_screen - Chipset Model
// 			//let _card_device_id = Device ID
// 			//let _card_online = _card_online

// 			prop[0] = _card_name
// 			prop[1] = {screen_resolutions:_resolutions};
// 			prop[2] = {screen_card_device_id:_card_device_id};
// 			prop[3] = {screen_card_online:_card_online};
// 			return prop;


// //////////////////////////////////////////////////////////////////////////////////////////
// 		case "network":

// 			//let _types = data.profiler_network (wifi, ethernet, bluetooth)
// 			//let _speeds = 
// 			//let _status = 

// 			prop[0] = _types[0] + " _ " + _types[1] + " - " + _types[2];
// 			prop[1] = {network_speeds:_speeds};
// 			prop[2] = {network_status:_status};
// 			return prop;


// //////////////////////////////////////////////////////////////////////////////////////////
// 		case "battery":

// 			//let _device_name = data.profiler_battery Device Name
// 			//let _product_id = data.profiler_battery.product_id
// 			//let _cycle_count = Cycle Count
// 			//let _condition = Condition
// 			//let _fcc = Full Charge Capacity
// 			//let _charge_remaining = Charge Remaining



// 			prop[0] = _device_name
// 			prop[1] = {battery_AC_charger_connected_and_charging:_AC_charger_connected_and_charging}
// 			prop[2] = {battery_cycle_count:_cycle_count}
// 			prop[3] = {battery_condition:_condition}
// 			prop[4] = {battery_fcc:_fcc}
// 			prop[5] = {battery_charge_remaining:_charge_remaining}
// 			return prop;


// //////////////////////////////////////////////////////////////////////////////////////////
// 		case "keyboard":

// 			//let _device_name = data.profiler_battery:  _name
// 			//let _bcd_device = bcd_device (?)
// 			//let _product_id = product_id


// 			prop[0] = _device_name;
// 			prop[1] = {keyboard_bcd_device:_bcd_device}
// 			prop[1] = {keyboard_product_id:_product_id}
// 			return prop;
// 	}
// }







