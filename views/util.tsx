import Axios, { AxiosResponse } from "axios"
import { Alert, AsyncStorage } from "react-native"

export const mainColor: string = '#8a164b'

export const contrastColor: string = 'rgba(50, 50, 50, 0.1)'

export const colorText: string = '#4d4d4d'

/**Server backend */
export const urlServer = "http://192.168.88.253:8080"
// export const urlServer = "http://localhost:8080"

export const sendError = async (message: string) => {
    try {
        const token = await AsyncStorage.getItem('token')

        Axios.post(`${urlServer}/controlError`, { message }, {
            headers: {
                "token": token
            }
        }).catch(
            (reason: any) => {
                throw 'No se ha podido enviar el reporte del error'
            }
        ).then(
            ({ status }: AxiosResponse) => {
                if (status === 200) {
                    Alert.alert('Reporte recibido', 'El reporte del error se ha enviado', [
                        {
                            text: 'Ok',
                            onPress: () => { },
                            style: 'default'
                        }
                    ])
                } else {
                    Alert.alert('Error al enviar reporte', 'El reporte del error se ha podido completar', [
                        {
                            text: 'Ok',
                            onPress: () => { },
                            style: 'default'
                        }
                    ])
                }
            }
        )
    } catch (error) {
        Alert.alert('Error Exception', error, [
            {
                text: 'Ok',
                onPress: () => { },
                style: 'default'
            }
        ])
    }
}