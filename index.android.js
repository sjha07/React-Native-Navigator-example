/**
 * Developer - Satish Jha 
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict'

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';


//var SCREEN_WIDTH = require('Dimensions').get('window').width;
var BaseConfig = Navigator.SceneConfigs.FloatFromRight;


var CustomLeftToRightGesture = Object.assign({}, BaseConfig.gestures.pop, {
  //Make it snap back really quickly after cancelling pop
  snapVelocity: 0.8,

  // Make it so we can drag anywhere on the screen
  //edgeHitWidth: SCREEN_WIDTH
});

var CustomSceneConfig = Object.assign({}, BaseConfig, {
  // A very tightly wound screen will make this transition fast
  springTension: 100,
  springFriction: 1,

  // Use the custom gesture defined above
  gestures: {
    pop: CustomLeftToRightGesture
  }
});


var FirstPage = require('./FirstPage');
var SecondPage = require('./SecondPage');
var ThirdPage = require('./ThirdPage');


class NavigatorEx extends Component {
  render() {
    return (
        <Navigator
          initialRoute={{id: 1 }}
          renderScene={this.renderScene}
          configureScene={this.configureScene} />
    );
  }

  // render scene method
  renderScene(route, navigator){
    if(route.id === 1){
      return (<FirstPage route={route} navigator={navigator} />);;

    }
    else if(route.id === 2){
      return (<SecondPage route={route} navigator={navigator} />);
    }
    else if(route.id === 3 ){
      return (<ThirdPage route={route} navigator={navigator} />);
    }
  }

  //Configure scene method
  configureScene(route){
    return CustomSceneConfig;
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('NavigatorEx', () => NavigatorEx);
