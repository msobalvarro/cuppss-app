import React, { Component } from 'react'
import { NavigationScreenProps } from 'react-navigation'
import { SafeAreaView, View, ScrollView, Text } from 'react-native'
import HeaderApp from '../../../components/Header/Header';
import { Toast } from '@ant-design/react-native';
import Stars from '../../../components/Stars/Stars';
import AvatarName from '../../../components/AvatarName/AvatarName';

interface dataProps {
    name?: string
    products?: ObjectArray
}

interface DefaultState {
    data: dataProps
}

class BrandsProducts extends Component<NavigationScreenProps<dataProps>, DefaultState> {

    state:DefaultState = {
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
                <ScrollView keyboardDismissMode="on-drag">
                    <HeaderApp title="Lista" />

                    <View>
                        {
                            (Object.keys(this.state.data).length > 0) &&
                            this.state.data.products.map(
                                (product, index) => (
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} key={index}>
                                        <AvatarName text={product} />
                                        
                                        <Text>{product}</Text>
                                        <Stars count={5} />
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