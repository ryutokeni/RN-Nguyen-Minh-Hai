import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image} from 'react-native';

export default class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {cover, duration, title, artist, likes, is_liked} = this.props.data;
        return (
            <View style={styles.container}>
                <View style={styles.info}>
                    <Image 
                        style={{width: 200, height: 200}}
                        source={{uri: cover}}>
                    </Image>
                    <Text style={{
                        width:120, 
                        flexWrap:'wrap',
                        flex:1,
                        alignContent:'center',
                        fontSize:14,
                        color:'#000000'
                        }}>`{title}`</Text>
                    <Text style={{
                        alignContent:'center',
                        fontSize:12,
                        color:'#AAAAAA'
                        }}>{artist}</Text>
                </View>
                <View style={styles.progressBar}></View>
                <View style={styles.horizontalContainer}>
                        <Button>Prev</Button>
                        <Button>Play</Button>
                        <Button>Next</Button>
                        <View style={{flexDirection:'row'}}>
                            <Image></Image>
                            <Text>{likes}</Text>
                        </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    horizontalContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      info: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      progressBar: {

      }
  });