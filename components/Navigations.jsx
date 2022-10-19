import React from 'react';
import { StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import CryptoScreen from '../screens/CryptoScreen';
import ExchangeScreen from '../screens/ExchangeScreen';

import { Ionicons } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator 
        initialRouteName='Home'
         screenOptions={{ 
            tabBarActiveTintColor: "#018E58",
            headerShown: false,
            tabBarStyle: {
                height: 70,
                borderBottomColor: 10
            }, 
            }}>
                <Tab.Screen 
                name='Home' 
                component={HomeScreen} 
                options={{ 
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home-outline" size={size} color={color} />
                ), 
                }}/>
                <Tab.Screen 
                name='Crypto' 
                component={CryptoScreen}
                options={{ 
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <Foundation name="bitcoin" size={size} color={color} />
                    ),
                }}
                />
                <Tab.Screen 
                name='Exchanges' 
                component={ExchangeScreen}
                options={{ 
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="exchange" size={size} color={color} />
                    ),
                }}
                />
        </Tab.Navigator>
    )
}

export default function Navigation(){
    return (
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    back: {
        elevation: 5,
        backgroundColor: "#E1E8D9",
        borderWidth: 1,
        borderColor: "transparent",
    }
});