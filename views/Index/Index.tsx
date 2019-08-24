import React, { Component } from 'react'
import { Image, Text, SafeAreaView} from 'react-native'
import { Index as styles } from '../styles'
/**
 * Selection view of **Hostelers** and **distributors**
 */
class Index extends Component {
    render() {
        return (
            <SafeAreaView style={styles.main}>
                <Image style={styles.imageLogo} resizeMode="contain" source={require('../../assets/logo/logo.png')} />
                <Text>Test</Text>
            </SafeAreaView>
        )
    }
}

export default Index