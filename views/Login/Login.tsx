import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { NavigationScreenProps, NavigationState, NavigationParams } from 'react-navigation'
import Input from '../../components/Input/Input'

interface StateTypes {
    hosteler: boolean
}

class Login extends Component<NavigationScreenProps<NavigationState, NavigationParams> & StateTypes> {
    state = {

    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <SafeAreaView>
                <Text>Login</Text>

                <View>
                    <Input />
                </View>
            </SafeAreaView>
        )
    }
}

export default Login