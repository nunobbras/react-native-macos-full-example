/* @flow */
'use strict';
import React, {Component, View, Text, StyleSheet, Image, TouchableHighlight, AlertIOS} from 'react-native-desktop';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {onChangeComponent} from "../../actions"
import {List, Thumbnail, Icon, Title, Container, Header, Content, Footer, Button} from '../../node_modules_desktop/native-base_for_desktop';
import {Col, Row, Grid} from "../../node_modules_desktop/react-native-easy-grid_for_desktop";

import myTheme from '../../themes/myTheme'


export default connect(mapStateToProps, mapDispatchToProps)(class HowItWorksSell extends Component {

  _navigate(){
    this.props.navigator.push({
      name: 'Home', 
    })
  }  
  
  render() {

    return (
      <Container> 
        <Content theme={myTheme}>       
          <Grid>                  
              <Row style={{top: 10, padding: 30, borderColor:"#ECECEC", borderBottomWidth:1}}>
                <Col size={25}/>
                  <Text style={{paddingTop:20, textAlign: 'center', color:"#4C4C4C", fontSize:35}}>We Handle the Sale Process</Text>
                <Col size={25}/>
              </Row>
              <Row style={{top: 10}}>          
                <Col>
                  
                </Col>                      
              </Row>
              <Row style={{top: 10, paddingTop: 30}}>
                <Col size={25}/>
                  <Text style={{paddingTop:20, textAlign: 'left', color:"#4C4C4C", fontSize:20}}>Our Pricing Suggestions</Text>
                <Col size={25}/>
              </Row>
              <Row style={{top: 10}}>          
                <Col>
                  
                </Col>                      
              </Row>
              <Row style={{padding:20}}>
                <Col size={25}></Col>
                <Col size={15}>
                    <Text style={{paddingTop:20, paddingBottom:20, textAlign: 'center', color:"#4C4C4C", fontSize:15}}>Not satisfied?</Text>
                    <Button style={{top:-3}} block success rounded small>
                      Propose&nbsp;Your&nbsp;Price.
                    </Button>
                </Col>
                <Col size={25}></Col>                      
              </Row>
          </Grid>                 
        </Content>
        <Footer style={styles.footer}>
            <Button onPress={(data)=>{this.props.changeComponentAction("FinalValues")}} style={styles.PrevButton} transparent iconLeft>
                <Icon style={{color:"#282828"}} name="ios-arrow-dropleft-circle" />
                <Text style={{color:"#282828"}}>&nbsp;&nbsp;backk</Text>
            </Button>
            <View style={{flex:1}}></View>
        </Footer>              
      </Container>         
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
  footer: {
    height: 50,
    backgroundColor:"#ECECEC", 
    flexDirection: 'row',
    justifyContent: 'center',
  },
  NextButton: {    
    width:100, 
    paddingRight:20
  },
  PrevButton: {
    width:100,
    paddingLeft:20
  },  
};
