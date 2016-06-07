/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class AppItem extends Component{
 
      render(){
        return (
             <View style = {styles.container}> 

                <Image style = {styles.thumbnail} source = {{uri: this.props.source1}}></Image>
                <Text  style = {[styles.text]}>{this.props.title}</Text>
                
             </View> 

          );
      }

  }


class AwesomeProject extends Component {
  // 构造函数
  constructor(props) {
    super(props);
    
  }

  //组件渲染
  render() {
    return (
       <View style = {styles.mainContainer}> 
          <AppItem title ="飞机大战" source1="http://imgchr.com/images/gg.png"/>
          <AppItem title ="文武是sb" source1="http://imgchr.com/images/gg.png"/>

       </View>

       
    );
  }

};

var styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },

  mainContainer: {
    flex:0,
    justifyContent:'flex-start',
    padding:20,
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    alignSelf:'center',
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  text:{
    flex:0,
    color:'red',
    fontSize: 20,
    alignSelf:'center',  // 属性规定灵活容器内被选中项目的对齐方式。
    justifyContent: 'center', //属性定义了项目在主轴上的对齐方式。
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('MyProject', () => AwesomeProject);