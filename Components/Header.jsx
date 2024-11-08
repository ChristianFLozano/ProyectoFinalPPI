import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: "0",
            image: ""
        };
    }

    componentDidMount() {
        let _this = this;
        var xhttp = new XMLHttpRequest();

        xhttp.open("GET", "https://api.weatherapi.com/v1/forecast.json?key=19bd867e8eba4ac7afa192017240309&q=Guadalajara&days=1&aqi=no&alerts=no");

        xhttp.onload = function () {
            if (xhttp.status === 200) {
                const response = JSON.parse(xhttp.responseText);
                _this.setState({
                    temperature: response.current.temp_c,
                    image: response.current.condition.icon
                });
            } else {
                console.error("Error en la solicitud:", xhttp.status, xhttp.statusText);
            }
        };

        xhttp.send();
    }

    render() {
        return (
            <View style={styles.header}>
            <View style={styles.weather}>
                <Image
                    style={styles.weatherIcon}
                    source={{ uri: "http://" + this.state.image }}
                />
                <Text style={styles.temperatureText}>{this.state.temperature + "°C"}</Text>
            </View>
            <View style={styles.logoCucei}>
                <Image
                    style={styles.logoImage}
                    source={require("../Images/logoCucei.png")}
                />
            </View>
            <View style={styles.login}>
                <Image
                    style={styles.loginImage}
                    source={require("../Images/login.png")}
                />
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: "25%",
        flexDirection: "row",
        backgroundColor: "rgb(240, 240, 240)",
        shadowColor: "black",
        elevation: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    },
    weather: {
        width: "30%",
        alignItems: "center",
        justifyContent: "center",
    },
    weatherIcon: {
        width: 60,
        height: 60,
        marginBottom: 5,
    },
    temperatureText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
    },
    logoCucei: {
        width: "40%",
        alignItems: "center",
        justifyContent: "center",
    },
    logoImage: {
        width: "80%",
        height: "80%",
        resizeMode: "contain",
    },
    login: {
        width: "30%",
        justifyContent: "center",
        alignItems: "center",
    },
    loginImage: {
        width: 50,
        height: 50,
        resizeMode: "contain",
    },header: {
        height: "25%",
        flexDirection: "row",
        backgroundColor: "rgb(240, 240, 240)",
        shadowColor: "black",
        elevation: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    },
    weather: {
        width: "30%",
        alignItems: "center",
        justifyContent: "center",
    },
    weatherIcon: {
        width: 60,
        height: 60,
        marginBottom: 5,
    },
    temperatureText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
    },
    logoCucei: {
        width: "40%",
        alignItems: "center",
        justifyContent: "center",
    },
    logoImage: {
        width: "80%",
        height: "80%",
        resizeMode: "contain",
    },
    login: {
        width: "30%",
        justifyContent: "center",
        alignItems: "center",
    },
    loginImage: {
        width: 50,
        height: 50,
        resizeMode: "contain",
    },
})