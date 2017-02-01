/* @flow */
'use strict';

import React, {Component, View, StyleSheet, Image, TouchableHighlight} from 'react-native-desktop';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Card, CardItem, List, Text, Thumbnail, Title, Container, Header, Content, Footer, Button} from '../../node_modules_desktop/native-base_for_desktop';
import {Col, Row, Grid} from "../../node_modules_desktop/react-native-easy-grid_for_desktop";
import myTheme from '../../themes/myTheme'
import StarsEval from '../starsEval'
import Icon from 'react-native-vector-icons/FontAwesome';



export default connect(mapStateToProps, mapDispatchToProps)(class StatusScreen extends Component {

  



  render() {



    

    return (

          <Card style={styles.card}>
            <CardItem style={styles.carditemheader}>
              <Icon style={{paddingTop:10, paddingRight:20, color:"#282828"}} name="laptop" size={25}/>
              <View>
                <Text style={{fontWeight:"bold"}}>{this.props.questionName}</Text>
                <Text note style={{fontSize:12}}>{this.props.questionName}</Text>
              </View>                
            </CardItem>
            <CardItem cardBody style={{flexDirection: 'column'}}>
                <Text style={{fontWeight:"bold", marginLeft:30}}>                                    
                    Model
                </Text>
                <View style={{flexDirection: 'row', justifyContent:"flex-end" }}>
                  <Text note style={{fontSize:12}}>{this.props.questionName}</Text>                            
                </View>
            </CardItem>
            <CardItem cardBody style={{flexDirection: 'row', justifyContent:"center", alignItems:"flex-end"}}>     
                <Text style={{fontWeight:"bold", marginTop:0, marginLeft:30}}>Quality</Text>
                <View style={{flex:1}}></View>
                <StarsEval percentage={Number(this.props.questionName)} starSize={15}/>
            </CardItem>
            <CardItem cardBody style={{flexDirection: 'row', justifyContent:"center", alignItems:"flex-end"}}>      
                <Text style={{fontWeight:"bold", marginLeft:30}}>Status</Text>
                <View style={{flex:1}}></View>
                <StarsEval percentage={Number(this.props.questionName)} starSize={15}/>
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
    changeComponentAction: (data) => {dispatch(onChangeComponent(data))},
  };
}  



const styles ={
  card: {  
    flex:0,  
    margin:10,
    width:250,
  },
  carditemheader:{
    flexDirection: 'row',
    flex:1,
    backgroundColor:"#F5F5F5",    
  },
};

