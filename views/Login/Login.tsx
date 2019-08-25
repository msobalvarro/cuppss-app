import React, { Component } from 'react'
import { SafeAreaView, Text, View, CheckBox, Image } from 'react-native'
import { NavigationScreenProps, NavigationState, NavigationParams } from 'react-navigation'
import { Login as styles } from '../styles'
import Input from '../../components/Input/Input'
import { Button, WhiteSpace } from '@ant-design/react-native';

interface StateTypes {
    email: string,
    password: string,
    hosteler: boolean,
    showPassword: boolean,
    remember: boolean,
}

class Login extends Component<NavigationScreenProps<NavigationState, NavigationParams>, StateTypes> {
    state = {
        email: '',
        password: '',
        hosteler: true,
        showPassword: false,
        remember: false,
    }

    // componentDidMount() {
    //     console.log(this.props)
    // }

    /**Checked true/false show password */
    onHandledChangeShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword })
    }

    /**Checked true/false remember */
    onHandledChangeRemember = () => {
        this.setState({ remember: !this.state.remember })
    }

    /**Return to view Index select type user */
    returnToindex = () => {
        this.props.navigation.pop()
    }

    render() {
        return (
            <SafeAreaView style={styles.main}>
                <Image style={styles.imageLogo} resizeMode="contain" source={require('../../assets/logo/logo.png')} />
                <Text style={styles.textMain}>Login</Text>

                <View style={styles.containerForm}>
                    <Input
                        innerStyle={styles.inputs}
                        value={this.state.email}
                        onChangeText={
                            (email: string) => {
                                this.setState({ email })
                            }
                        }
                        placeholder="Email" />
                    <Input
                        innerStyle={styles.inputs}
                        value={this.state.password}
                        onChangeText={
                            (password: string) => {
                                this.setState({ password })
                            }
                        }
                        placeholder="Password"
                        secureTextEntry={!this.state.showPassword} />

                    <View style={styles.containerCheck}>
                        <View style={styles.rowCheck}>
                            <CheckBox value={this.state.showPassword} onChange={this.onHandledChangeShowPassword} />
                            <Text onPress={this.onHandledChangeShowPassword} style={styles.textCheck}>
                                Show Password
                            </Text>
                        </View>

                        <View style={styles.rowCheck}>
                            <CheckBox value={this.state.remember} onChange={this.onHandledChangeRemember} />
                            <Text onPress={this.onHandledChangeRemember} style={styles.textCheck}>
                                Remember
                            </Text>
                        </View>
                    </View>

                    <Button type="warning">Iniciar Sesion</Button>
                    <WhiteSpace />
                    <Button onPress={this.returnToindex} type="ghost">Volver a Inicio</Button>
                </View>

            </SafeAreaView>
        )
    }
}

export default Login