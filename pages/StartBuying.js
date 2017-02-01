/* @flow */
'use strict';
 

import React,  {View,StyleSheet,Animated,Component,TouchableOpacity,Image, Modal,TextInput,Linking} from 'react-native-desktop';
import { connect } from 'react-redux';
import {changeComponent} from "../actions"
import {Col, Row, Grid} from "../node_modules_desktop/react-native-easy-grid_for_desktop";
import {Card, CardItem, List, Text, Thumbnail, Title, Container, Content, Footer, Button, InputGroup} from '../node_modules_desktop/native-base_for_desktop';
import Icon from 'react-native-vector-icons/FontAwesome';
import myTheme from '../themes/myTheme'

export default connect(mapStateToProps, mapDispatchToProps)(class StartBuying extends Component {
  

  render() {

    return (
      <Container> 
        <Content theme={myTheme}>       
          <Grid>                  
              <Row style={{top: 10, padding: 30, borderColor:"#ECECEC", borderBottomWidth:1}}>
                <Col size={25}/>
                  <Text style={{paddingTop:20, textAlign: 'center', color:"#4C4C4C", fontSize:35}}>User Profile</Text>
                <Col size={25}/>
              </Row>
              <Row style={{top: 10}}>          
                <Col>                        
                  <View>
                      <View style={styles.loginlayout}>            
                        <View style={{height:120}}>
                        </View>
                          <View style={{flex:1, paddingBottom:50,}}>
                              <Button textStyle={{textAlign:"center", paddingBottom:1,paddingLeft:5,width:200}}  success rounded small onPress={(data)=>{Linking.openURL("http://www.2ndhandler.com/userProfile")}}>Go to Website</Button>
                          </View>                        
                        <View  style={{borderStyle:"solid", borderColor:"#E8E8E8", borderTopWidth:1, width: 400, padding:30}}>
                            <View style={{flexDirection: 'column', alignItems:"center", justifyContent: 'center'}}>
                              <View style={{width:300}}>
                                    <Text style={{textAlign:"center"}}> Please Login in our website and check your profile.</Text>
                              </View>    
                            </View>                        
                        </View>                     
                      </View>
                  </View>
                </Col>                      
              </Row>
          </Grid>                 
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
  loginlayout:{
    flexDirection: 'column',
    flex:1,
    alignItems:"center",
    justifyContent: 'center', 
  },
  loginwindow:{
    flexDirection: 'column',
    flex:1,
    alignItems:"center",
    justifyContent: 'center',    
    //backgroundColor:"#E8E8E8",
    paddingTop:20,
    paddingBottom:20,
    paddingLeft:20,
    paddingRight:20, 
    borderRadius:10, 
    width: 400,
    //backgroundColor:"#151F34",      
  },
  input:{
    borderRadius:4,
    fontSize: 16,
    width: 250,
    height: 30
  }
};





