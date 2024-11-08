import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import HEADER from '../Components/Header'
import { WebView } from 'react-native-webview';

export default class Module extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
        <View style={styles.container}>
            <HEADER/>
            <View style={styles.body}>
            <WebView 
                source={{ uri: 'https://www.cucei.udg.mx/' }}
                style={{ flex: 1 }} 
                javaScriptEnabled={true} 
            />
            </View>
        </View>
        );
    }
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    body:{
        flex: 1,
        padding:15,
        backgroundColor:"rgb(0,12,101)"
    },
    });