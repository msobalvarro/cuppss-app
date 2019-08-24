import React, { Component } from 'react'
import { Image, Text, SafeAreaView, TouchableOpacity, View} from 'react-native'
import { Index as styles } from '../styles'
/**
 * Selection view of **Hostelers** and **distributors**
 */
class Index extends Component {
    render() {
        return (
            <SafeAreaView style={styles.main}>
                <Image style={styles.imageLogo} resizeMode="contain" source={require('../../assets/logo/logo.png')} />
                
                <View style={styles.containerButtons}>
                    <TouchableOpacity style={styles.buttons}>
                        <Text style={styles.textButton}>Soy Hostelero</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <Text style={styles.textButton}>Soy Distribuidor</Text>
                    </TouchableOpacity>                    
                </View>

            </SafeAreaView>
        )
    }
}

export default Index