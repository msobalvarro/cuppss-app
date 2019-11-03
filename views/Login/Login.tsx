import React, { Component } from 'react'
import { SafeAreaView, Text, View, CheckBox, Image, Alert, AsyncStorage, Keyboard } from 'react-native'
import { NavigationScreenProps, NavigationState, NavigationParams } from 'react-navigation'
import RNLocation, { Location } from 'react-native-location'
import device from 'react-native-device-info'
import Axios, { AxiosResponse } from 'axios'
import { Login as styles } from '../styles'
import Input from '../../components/Input/Input'
import { Button, WhiteSpace, NoticeBar } from '@ant-design/react-native'
import HiddenBar from '../../components/HiddenBar/HiddenBar'
import { urlServer, sendError } from '../util'
import Loader from '../../components/Loader/Loader'
import { RFValue } from 'react-native-responsive-fontsize'
import validator from 'validator'

interface DeviceInfoType {
    mac: string
    brand: string
    model: string
    coordinate?: string
}

interface StateTypes {
    email: string
    password: string
    hosteler: boolean
    showPassword: boolean
    remember: boolean
    deviceInfo: DeviceInfoType
    loader: boolean
    loginFailed: boolean
}

const ImageError = () => (
    <Image style={{ width: RFValue(15), height: RFValue(15) }} source={require('../../assets/icon-error-auth.png')} />
)

class Login extends Component<NavigationScreenProps<NavigationState, NavigationParams>, StateTypes> {
    state: StateTypes = {
        email: '',
        password: '',
        hosteler: true,
        showPassword: false,
        remember: false,
        deviceInfo: {
            brand: '',
            model: '',
            mac: '',
            coordinate: ''
        },
        loader: false,
        loginFailed: false,
    }

    async componentDidMount() {
        this.setState({ loader: true })

        const { deviceInfo } = this.state

        const credentials: string | null = await AsyncStorage.getItem('credentials')

        if(credentials) {
            const { email, password } = JSON.parse(credentials)
    
            this.setState({ email, password })

        }



        await device.getBrand().then(
            (brand: string) => this.setState({
                deviceInfo: {
                    ...deviceInfo,
                    brand
                }
            })
        )

        await device.getModel().then(
            (model: string) => this.setState({
                deviceInfo: {
                    ...deviceInfo,
                    model
                }
            })
        )

        await device.getMacAddress().then(
            (mac: string) => this.setState({
                deviceInfo: {
                    ...deviceInfo,
                    mac
                }
            })
        )

        await RNLocation.configure({
            distanceFilter: 0.5
        })

        await RNLocation.requestPermission({
            ios: "whenInUse",
            android: {
                detail: "coarse"
            }
        }).then(
            (granten: any) => {
                if (granten) {
                    RNLocation.subscribeToLocationUpdates(
                        (location: Location[]) => {
                            const coordinate: string = location[0].latitude + ', ' + location[0].longitude

                            this.setState({
                                deviceInfo: {
                                    ...deviceInfo,
                                    coordinate
                                }
                            })
                        }
                    )
                }
            }
        ).catch(
            (reasons: any) => {
                Alert.alert(
                    'Error de ubicacion',
                    'Compruebe que su GPS esté activo e inténtelo de nuevo',
                    [
                        {
                            onPress: () => { },
                            text: 'Cerrar',
                            style: 'cancel',
                        }
                    ]
                )
            }
        )

        // En the all process
        this.setState({ loader: false })
    }

    /**Method login button press in view */
    tryLogin = async () => {
        Keyboard.dismiss()

        this.setState({ loader: true })

        const { email, password, deviceInfo } = this.state

        // Validate data login
        if (validator.isEmail(email) && !validator.isEmpty(password)) {
            if (this.state.remember) {
                try {
                    const { email, password } = this.state

                    const credentials = JSON.stringify({ email, password })

                    await AsyncStorage.setItem('credentials', credentials)
                } catch (error) {
                    sendError(error)
                }
            }


            Axios.post(`${urlServer}/login`, { email, password, deviceInfo, mobile: true }).then(
                async (data: AxiosResponse) => {
                    if (data.data.error || data.status === 401) {
                        this.setState({ loginFailed: true, password: '' })
                    } else {
                        try {
                            const { navigation } = this.props

                            // Set token in Local Storage
                            await AsyncStorage.setItem('token', data.data.token)

                            // @ts-ignore
                            navigation.dispatch(navigation.navigate({ routeName: this.state.hosteler ? 'MenuHostelier' : 'Index' }))

                        } catch (error) {
                            sendError('Error al set token - Login.tsx `tryLogin()`')
                        }
                    }
                    // Login Succesfull
                    // this.props.navigation.navigate({ routeName: 'MenuHostelier' })
                }
            )
        } else {
            this.setState({ loginFailed: true })
        }


        this.setState({ loader: false })
    }

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

                <HiddenBar />

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

                    {
                        this.state.loginFailed &&
                        <NoticeBar style={styles.NoticeBar} mode="closable" icon={<ImageError />}>
                            Usuario o clave incorrecta
                        </NoticeBar>
                    }

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

                    <Button type="warning" onPress={this.tryLogin} loading={this.state.loader}>Iniciar Sesion</Button>
                    <WhiteSpace />
                    <Button onPress={this.returnToindex} type="ghost" disabled={this.state.loader}>Volver a Inicio</Button>
                </View>

                <Loader active={this.state.loader} />

            </SafeAreaView>
        )
    }
}

export default Login