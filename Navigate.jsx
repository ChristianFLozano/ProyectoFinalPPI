import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './Pages/MainPage';
import Module from './Pages/Module';
export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const Stack = createNativeStackNavigator();

        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Pagina principal' component={MainPage} options={{ headerShown: false }} />
                    <Stack.Screen name='Module' component={Module} options={{headerShown:false}}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}