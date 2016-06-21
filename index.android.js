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
   View
 } from 'react-native';
 import Router from 'react-native-simple-router';
 import styles from './styles/main';
 import Home from './android_components/containers/Home';

 const defaultRoute = {
   name: 'PEC HOME',
   component: Home
 };

 class PEC76 extends Component {
   render() {
     return (
       <Router
         firstRoute={defaultRoute}
         headerStyle={styles.subMenuHeader}
         titleStyle={styles.subMenuHeaderText}
         handleBackAndroid={true}/>
     );
   }
 }

 AppRegistry.registerComponent('PEC76', () => PEC76);
