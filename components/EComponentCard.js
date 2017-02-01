/* @flow */
'use strict';

import React, {Component, View, StyleSheet, Image, TouchableHighlight} from 'react-native-desktop';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {changeComponent} from "../actions"
import {Card, CardItem, List, Text, Thumbnail, Title, Container, Header, Content, Footer, Button} from '../node_modules_desktop/native-base_for_desktop';
import {Col, Row, Grid} from "../node_modules_desktop/react-native-easy-grid_for_desktop";
import myTheme from '../themes/myTheme'
import StarsEval from './starsEval'
import Icon from 'react-native-vector-icons/FontAwesome';



export default connect(mapStateToProps, mapDispatchToProps)(class EComponentCard extends Component {

  
  _buildProps(){
    console.log("this.props.data.props.")
    console.log(this.props.data.props)
    
    let _result = [];

    for (let key in this.props.data.props){
        
        let _key = key.replace(/_/g, " ").toUpperCase()
        let _value_final = this.props.data.props[key]
        console.log("typeof(this.props.data.props[key])")
        console.log(typeof(this.props.data.props[key]))

        if (typeof(this.props.data.props[key]) == "object"){
          let _value = this.props.data.props[key].map((i)=>{return (i + " ")})

          _value_final = _value.reduce((i,j)=>{return i==j?i:i+j})

        }
         _result.push( 
          <View style={{flexDirection: 'row', justifyContent:"space-between" }}>
            <Text note style={{fontSize:11, color:myTheme.brandGrey}}>{_key + " "} </Text>                            
            <Text style={{fontSize:10, color:myTheme.brandGreyLight}}>{_value_final}</Text>                            
          </View>  
          )
    }

    return _result

  }


  render() {

    let _props = this._buildProps()

    console.log("this.props.data.status")
    console.log(this.props.data.status)

    return (

          <Card style={styles.card}>
            <CardItem style={styles.carditemheader}>
              <Icon style={{paddingTop:10, paddingRight:20, color:myTheme.brandPrimaryLight}} name="laptop" size={25}/>
              <View>
                <Text style={{fontWeight:"bold", color:myTheme.brandPrimaryLight}}>{this.props.data.component_type.name}</Text>
                <Text note style={{fontSize:12, color:myTheme.brandPrimaryLight}}>{this.props.data.title}</Text>
              </View>                
            </CardItem>
            <CardItem cardBody style={{flexDirection: 'column', backgroundColor:myTheme.brandGreyDark, borderColor:myTheme.brandPrimaryDarkX}}>
                <Text style={{fontWeight:"bold", color:myTheme.brandGreyLight}}>                                    
                    Details
                </Text>
                {_props}
            </CardItem>
            <CardItem cardBody style={{flexDirection: 'row', backgroundColor:myTheme.brandGreyDark, justifyContent:"center", alignItems:"flex-end", borderColor:myTheme.brandPrimaryDarkX}}>      
                <Text style={{fontWeight:"bold", color:myTheme.brandGreyLight}}>Status</Text>
                <View style={{flex:1}}></View>
                <StarsEval percentage={Number(this.props.data.status)-1} starSize={15}/>
            </CardItem>
          </Card>
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
  card: {  
    flex:0,  
    margin:10,
    width:250,
    borderColor:myTheme.brandPrimaryDarkX,
    borderWidth:1, 
    borderRadius:7,
  },
  carditemheader:{
    flexDirection: 'row',
    flex:1,
    backgroundColor:myTheme.brandGreyDark,    
    borderColor:myTheme.brandPrimaryDarkX
  },
};

