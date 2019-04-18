/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Main from './app/view/Main';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }
  componentDidMount = () => {
    new Promise((resolves, reject) => {
      getDataJson(
        'https://gist.githubusercontent.com/nvthai/65dc75b2a575498d782748d4d0fabee4/raw/5742d9f7bb71abf4a1cc422c332b75a92e4ffad4/radio_songs.json',
        {}, 
        (data) => {
          resolves(data);})
    }).then((response)=> {
      this.setState({
        data: response,
      })
    })
  }
  render() {
    const data = this.state.data;
    return (
      <View style={styles.container}>
        <Main data></Main>
      </View>
    );
  }
}

getDataJson = (url,dataInputObject,callbackHandle) => {
  let xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.responseType = 'json';
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhr.onload = function () {
      if (xhr.status === 200 && xhr.readyState === 4) {
          callbackHandle(xhr.response);
      } else {
          callbackHandle(xhr.response);
      }
  };
  xhr.send(JSON.stringify(dataInputObject));
};

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
