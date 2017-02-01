export const assessments = [];

export const assessment = {
    "assessment_status": 1,
    "assessment_code": "",
    "sale": null,
    "captured_serial_number": null,
    "captured_version_code":"",
    "assessment_type":0, //inspector see values in django    
    "overall_electronic_status":null,
    "overall_uptodate":null,
    "components": [],

}

//NOT USED - CAREFULL
export const assessmentComponent = {
    "component_type": {name:null, kind:0},
    "model_component": null,
    "title":null,
    "small_desc":null,
    "brand":null,
    "status":null,
    "img_url":null,
}

//NOT USED - CAREFULL
export const assessmentComponentPhysical ={
    "component_type": {name:null, kind:1},
    "small_desc":null,
    "rank":null,
    "overall_status":null,
    "cracks_status":null,
    "scratches_status":null,
    "functional_status":null,
} 

export const deviceStatusPresentation = {
  components:[{
    componentName:"CPU",
    componentDesc:"Central Processing Unit",

    },{
    componentName:"RAM Memory",
    componentDesc:"Volatile Memory",

    },{
    componentName:"Hard Disk",
    componentDesc:"Hard Disk Drive",

    },{
    componentName:"Screen",
    componentDesc:"Screen Size/Properties",

    },{
    componentName:"Network",
    componentDesc:"Wi-fi and Ethernet",

    },{
    componentName:"Battery",
    componentDesc:"Battery... that's it!",

    }]
}


export const ActiveSaleItems=[
    {title:"Date Created", field:"created"},
    {title:"User", field:"user"},
    {title:"Product Serial Number", field:"product"},
    {title:"Pricing Type", field:["sale_price_type"], function:"pricingType"},
    {title:"Pricing Value", field:["sale_price_type","lower_price", "higher_price"], function:"pricingValue"},
    {title:"Expected Deal Close", field:["expected_buy_date"], function:"dateWDFormat"},
    {title:"Expected Delivery Date", field:["expected_delivery_date"], function:"dateWDFormat"},
    {title:"Delivery Type", field:"delivery_type"},
]



export const physicalStatusItems={
    CoverCase:{
       //% - //OK, SOME ISSUE, LARGE ISSUES, NOK + Photo
      emailTitle:"cover", 
      componentName:"Cover Case",          
      questionName:"Scratches",
      answerType:"dropDown",  
    },
    BottomCase:{
       //% - //OK, SOME ISSUE, LARGE ISSUES, NOK + Photo
      emailTitle:"bottom", 
      componentName:"Bottom Case",                    
      questionName:"Scratches",
      answerType:"dropDown",  
    },        
    Keyboard:{
       //% - //OK, SOME ISSUE, LARGE ISSUES, NOK + Photo
      emailTitle:"keyboard", 
      componentName:"Keyboard Case",                              
      questionName:"Scratches",
      answerType:"dropDown",  
    },   
    Side:{
       //% - //OK, SOME ISSUE, LARGE ISSUES, NOK + Photo
      emailTitle:"side", 
      componentName:"Sides Case",                              
      questionName:"Scratches",
      answerType:"dropDown",  
    },   
    Screen:{
      emailTitle:"screen", 
      componentName:"Screen Scratches",
      questionName:"Scratches", //% - //OK, SOME ISSUE, LARGE ISSUES, NOK + Photo
      answerType:"dropDown",  
    },
    ScreenPixels:{
      emailTitle:"pixels", 
      componentName:"Screen Status",
      questionName:"Stains or Dead Lines", //number + Photo
      answerType:"yesno",  
    },        
    Keyboard:{
       //% - //OK, SOME ISSUE, LARGE ISSUES, NOK + comment
      emailTitle:"keyboard", 
      componentName:"Keyboard",                                        
      questionName:"Keys Working",
      answerType:"dropDown",  
    },        
    PowerAdapter:{ //OK, SOME ISSUE, LARGE ISSUES, NOK + comment
      emailTitle:"power", 
      componentName:"Power Adapter",          
      questionName:"Working Status",
      answerType:"dropDown",  
    },   
    USBPlugs:{ //OK, SOME ISSUE, LARGE ISSUES, NOK + comment
      emailTitle:"usb", 
      componentName:"USB Plug",                    
      questionName:"Working Status",
      answerType:"dropDown",  
    },   
    FirewirePlugs:{ //OK, SOME ISSUE, LARGE ISSUES, NOK + comment
      emailTitle:"firewire", 
      componentName:"Firewire Plug",                              
      questionName:"Working Status",
      answerType:"dropDown",  
    },   
    MiniDisplayPort:{ //OK, SOME ISSUE, LARGE ISSUES, NOK + comment
      emailTitle:"minidisplay", 
      componentName:"miniDisplay Port",                                        
      questionName:"Working Status",
      answerType:"dropDown",  
    },   
    Headphones:{ //OK, SOME ISSUE, LARGE ISSUES, NOK + comment
      emailTitle:"headphones", 
      componentName:"Headphones",                                                  
      questionName:"Working Status",
      answerType:"dropDown",  
    },   
    TrackPad:{ //OK, SOME ISSUE, LARGE ISSUES, NOK + comment
      emailTitle:"trackpad", 
      componentName:"Trackpad",                                                            
      questionName:"Working Status",
      answerType:"dropDown",  
    },   
    CDDVD:{ //OK, SOME ISSUE, LARGE ISSUES, NOK + comment
      emailTitle:"cd", 
      componentName:"CD/DVD",                                                                      
      questionName:"Working Status",
      answerType:"dropDown",  
    }      
}

export const sale = {
    "product":null,
    "seller":null,
    "active_flag":true,
    "status": 0,
    "sale_price_type":null,
    "delivery_date":null,
    "lower_price":null,
    "higher_price":null,
    "physical_components":[],
}

export const saleMessage = {
    sale:null,
    sender_type:0,
    message_text:"",
    client:null,
    
}

export const statusComments = [
    {maxValue:25, text:"Not OK"},
    {maxValue:50, text:"Have Issues"},
    {maxValue:75, text:"Have Minor Issues"},
    {maxValue:100, text:"OK"},
]

export const upToDateComments = [
    {maxValue:25, text:"Old Device (More than 8 Years)"},
    {maxValue:50, text:"Usable But Not Recent (more than 4 Years)"},
    {maxValue:75, text:"Recent Device (up to 4 Years)"},
    {maxValue:100, text:"Up to 2 Years Device"},
]







