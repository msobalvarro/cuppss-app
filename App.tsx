import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Index from './views/Index/Index'
// import {  } from 'expo'

interface DefaultProps { }

interface DefautlState {
    name: string
}

class App extends Component<DefaultProps, DefautlState> {
    render() {
        return (
            <View style={styles.container}>
                <Text>ROY SE LA COME ENTERA</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        fontSize: 50,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})


const AppNavigation = createStackNavigator(
    {
        Home: {
            screen: Index,            
        }
    },
    {
        initialRouteKey: "Index",
        headerMode: "screen",
        navigationOptions: {
            headerTitle: 'Hello',
            headerTintColor: '#CCC'
        }
    }
)

export default createAppContainer(AppNavigation)