import React, { Component } from 'react'
import { View, Image, Text, SafeAreaView, Platform } from 'react-native'
// import imgLogo from '../../assets/logo.png'

/**
 * Selection view of **Hostelers** and **distributors**
 */
class Index extends Component {
    render() {
        return (
            <SafeAreaView style={{ paddingTop: (Platform.OS === 'android') ? 50 : 0 }}>
                <Image style={{ width: 150, height: 150 }} source={require('../../assets/logo/logo.png')} />
                <Text>Test</Text>
            </SafeAreaView>
        )
    }
}

export default Index