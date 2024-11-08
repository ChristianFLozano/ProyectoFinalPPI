import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import HEADER from '../Components/Header';
export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: "0",
            image: ""
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <HEADER/>
                <View style={styles.body}>
                    <TouchableOpacity style={styles.buttons} disabled={true}>
                        <Text style={styles.textButton}>Realidad aumentada</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} disabled={true}>
                        <Text style={styles.textButton}>Modulo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} disabled={false} onPress={()=>{ this.props.navigation.navigate("Module")}}>
                        <Text style={styles.textButton}>Directorio</Text>
                    </TouchableOpacity>
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
        padding:20,
        flexDirection : "row",
        gap:10,
        flexWrap:"wrap"
    },
    buttons: {
        width: 180,
        height: 50,
        borderRadius: 9,
        borderColor: "rgba(50,100,200,0.5)",
        borderWidth: 3,
        borderBottomWidth: 2,
        borderBottomColor: "#ddd",
        justifyContent: "center",
        shadowColor: "black",
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,  
        shadowRadius: 5,
    },
    textButton:{
        textAlign:"center",
        fontSize:15
    }
});
