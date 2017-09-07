/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio
} from 'react-native';

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <View style={[styles.item,styles.center]}>
          <Text>酒店</Text>
        </View>

        <View style={[styles.item,styles.lineLeftRight]}>
          <View style={[styles.center,styles.flex,styles.lineCenter]}>
            <Text>海外酒店</Text>
          </View>   
          <View style={[styles.center,styles.flex]}>
            <Text>特惠酒店</Text>
          </View>       
        </View>

        <View style={styles.item}>
          <View style={[styles.center,styles.flex,styles.lineCenter ]}>
            <Text>团购</Text>
          </View> 
          <View style={[styles.center,styles.flex]}>
            <Text>客栈.公寓</Text>
          </View> 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:25,
    marginLeft:5,
    marginRight:5,
    height:84,
    flexDirection:'row',
    borderRadius:5,
    padding:2,
    backgroundColor:'#FF0067'
  },
  item:{
    flex:1,
    height:80
  },
  center:{
    justifyContent:'center',
    alignItems:'center'
  },
  flex:{
    flex:1
  },
  font:{
    color:'#FFF',
    fontSize:16,
    fontWeight:'bold'
  },
  lineLeftRight:{
    borderLeftWidth:1/PixelRatio.get(),
    borderRightWidth:1/PixelRatio.get(),
    borderColor:'#FFF'
  },
  lineCenter:{
    borderBottomWidth:1/PixelRatio.get(),
    borderColor:'#FFF'
  }
  
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
