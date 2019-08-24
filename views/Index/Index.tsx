import React, { Component } from 'react'
import { Image, Text, SafeAreaView, TouchableOpacity, View} from 'react-native'
import { NavigationScreenProps, NavigationState, NavigationParams } from "react-navigation"
import { Button } from '@ant-design/react-native'
import { Index as styles } from '../styles'
/**
 * Selection view of **Hostelers** and **distributors**
 */
class Index extends Component<NavigationScreenProps<NavigationState, NavigationParams>> {
    moveScreenHostelero = () => {
        this.props.navigation.navigate('Login', { hosteler: true })
    }

    moveScreenDistribuidor = () => {
        this.props.navigation.navigate('Login', { hosteler: false })
    }

    render() {
        return (
            <SafeAreaView style={styles.main}>
                <Image style={styles.imageLogo} resizeMode="contain" source={require('../../assets/logo/logo.png')} />
                
                <View style={styles.containerButtons}>

                    <Button type="primary" style={styles.buttons} onPress={this.moveScreenHostelero}>
                        <Text style={styles.textButton}>Soy Hostelero</Text>
                    </Button>
                    {/* <TouchableOpacity style={styles.buttons} onPress={this.moveScreenHostelero}>
                    </TouchableOpacity> */}

                    <Button style={styles.buttons} onPress={this.moveScreenDistribuidor}>
                        <Text style={styles.textButton}>Soy Distribuidor</Text>
                    </Button>                    
                </View>

            </SafeAreaView>
        )
    }
}

export default Index