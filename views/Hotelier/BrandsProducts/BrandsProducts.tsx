import React, { Component } from 'react'
import { NavigationScreenProps, NavigationState, NavigationParams } from 'react-navigation'
import { SafeAreaView, View, ScrollView, Text } from 'react-native'
import HeaderApp from '../../../components/Header/Header';
import { Toast } from '@ant-design/react-native';

interface dataProps {
    name?: string
    products: ObjectArray
}

interface DefaultState {
    data: dataProps
}

class BrandsProducts extends Component<NavigationScreenProps<NavigationState, NavigationParams>, DefaultState> {

    state = {
        data: {
            name: '',
            products: [],
        }
    }

    componentDidMount() {
        const { params } = this.props.navigation.state

        if (Object.keys(params).length > 0) {
            this.setState({ data: params })
        } else {
            Toast.show('No hay datos', Toast.SHORT)
        }
    }

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <HeaderApp title="Lista" />

                    <View>
                        {
                            (Object.keys(this.state.data).length > 0) &&
                            this.state.data.products.map(
                                (product, index) => (
                                    <View key={index}>
                                        <Text>{product}</Text>
                                    </View>
                                )
                            )
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default BrandsProducts