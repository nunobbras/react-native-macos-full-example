/* @flow */
'use strict';
 

import React,  {View,StyleSheet,Animated,Component,TouchableOpacity,Image, Modal,TextInput,Linking} from 'react-native-desktop';
import { connect } from 'react-redux';
import {Col, Row, Grid} from "../node_modules_desktop/react-native-easy-grid_for_desktop";
import {Card, CardItem, List, Text, Thumbnail, Title, Container, Content, Footer, Button, InputGroup} from '../node_modules_desktop/native-base_for_desktop';
import Icon from 'react-native-vector-icons/FontAwesome';

import {changeComponent} from "../actions"
import myTheme from '../themes/myTheme'
import LayoutTitle from "../components/LayoutTitle";

export default connect(mapStateToProps, mapDispatchToProps)(class Help extends Component {
  

  render() {

    return (
            <Container>
                <Content style={{backgroundColor:myTheme.brandGreyMidDark}} theme={myTheme}>
                  <LayoutTitle title="Help Me" />     
                  <Row style={{marginTop: 10, height:1000}}>          
                    <Col>                        
                      <View>
                          <View style={styles.loginlayout}>            
                            <View style={{height:70}}>
                            </View>
                              <View style={{flex:1, paddingBottom:50,}}>
                                  <Button style={{backgroundColor:myTheme.brandPrimary}} textStyle={{paddingBottom:4}} block rounded onPress={(data)=>{Linking.openURL("http://www.2ndhandler.com/userProfile")}}>
                                    <Text style={{color:"#fff", fontSize:16}}>Website Help</Text>
                                  </Button>
                              </View>                        
                              <View  style={{borderStyle:"solid", borderColor:myTheme.brandSidebar, borderTopWidth:1, width: 400, padding:30, paddingTop:10}}>
                                <View style={{flexDirection: 'column', alignItems:"center", justifyContent: 'center'}}>
                                  <View style={{width:300}}>
                                        <Text style={{textAlign:"center", fontSize:15, color:myTheme.brandGreyLight}}> At the Website, use the icon <Icon name="comment" size={20}/> in the top right to directly speak with us</Text>
                                        <Text style={{textAlign:"center", fontSize:15, color:myTheme.brandGreyLight}}> or</Text>
                                        <Text style={{textAlign:"center", fontSize:15, color:myTheme.brandGreyLight}}> email us to</Text>
                                  </View>    
                                  <View style={{margin:10, padding:3, paddingTop:1, borderRadius:4, backgroundColor:myTheme.brandGrey}}>
                                    <Button transparent onPress={(data)=>{Linking.openURL('mailto:contact@2ndhandler.com?subject=2ndhandler help needed')}}>
                                      <Text style={{color:"#fff", textAlign:"center"}}>contact@2ndhandler.com</Text>
                                    </Button>                              
                                  </View>                        
                                </View>                        
                            </View>                     
                          </View>
                      </View>
                    </Col>                      
                  </Row>
                </Content>                 
            </Container>  


    );
  }
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
  layout:{
    backgroundColor:myTheme.brandLightGrey 
  },
  loginlayout:{
    flexDirection: 'column',
    flex:1,
    alignItems:"center",
    justifyContent: 'center', 
  },  
};





