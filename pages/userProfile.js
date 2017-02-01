/* @flow */
'use strict';
 

import React,  {View,StyleSheet,Animated,Component,TouchableOpacity,Image, Modal,TextInput,Linking} from 'react-native-desktop';
import { connect } from 'react-redux';
import {changeComponent, logout} from "../actions"
import {Col, Row, Grid} from "../node_modules_desktop/react-native-easy-grid_for_desktop";
import {Card, CardItem, List, Text, Thumbnail, Title, Container, Content, Footer, Button, InputGroup} from '../node_modules_desktop/native-base_for_desktop';
import Icon from 'react-native-vector-icons/FontAwesome';

import myTheme from '../themes/myTheme'
import {login} from "../actions"
import LayoutTitle from "../components/LayoutTitle";


export default connect(mapStateToProps, mapDispatchToProps)(class UserProfile extends Component {

  componentDidMount(){
    if (!this.props.useridSession){
      this.props.changeComponentAction("Login")
    }

  }  

  render() {

    return (
        <Container>
          <Content style={{backgroundColor:myTheme.brandGreyMidDark}} theme={myTheme}>
            <LayoutTitle title="Help Me" />     
            <Row style={{marginTop: 10, height:null}}>        
              <Col>                        
                <View>
                  <View style={styles.loginlayout}>            
                    <View style={{height:70}}>
                    </View>
                    <View style={{flex:1, paddingBottom:50,}}>
                      <Button style={{backgroundColor:myTheme.brandPrimary}} textStyle={{paddingBottom:4}} block rounded onPress={(data)=>{Linking.openURL("http://www.2ndhandler.com/userProfile")}}>
                        <Text style={{color:"#fff", fontSize:16}}>Website User Profile</Text>
                      </Button>
                    </View>                        
                    <View  style={{borderStyle:"solid", borderColor:myTheme.brandSidebar, borderTopWidth:1, width: 400, padding:30}}>
                      <View style={{flexDirection: 'column', alignItems:"center", justifyContent: 'center'}}>
                        <View style={{width:300}}>
                          <Text style={{color:myTheme.brandGreyLight, textAlign:"center"}}> Please Login in our website and check your profile.</Text>
                        </View>    
                      </View>                        
                    </View>                     
                  </View>
                </View>
              </Col>                      
            </Row>
            <Row>          
              <Col size={25}/>
                <Col size={10} style={{marginTop:80}}>   
                  <Button style={{backgroundColor:myTheme.brandPrimary}} textStyle={{paddingBottom:4}} block rounded onPress={()=>{this.props.logoutAction()}}>
                    <Text style={{color:"#fff", fontSize:16}}>Logout</Text>
                  </Button>                  
                </Col>        
              <Col size={25}/>                            
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
    logoutAction: (data) => {dispatch(logout())},
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





