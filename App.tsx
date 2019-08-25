import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Index from './views/Index/Index'
import Login from './views/Login/Login'

const AppNavigation = createStackNavigator(
    {
        Home: {
            screen: Index,            
        },
        Login: {
            screen: Login
        }
    },
    {
        initialRouteName: "Login",
        headerMode: "none"
    }
)

export default createAppContainer(AppNavigation)