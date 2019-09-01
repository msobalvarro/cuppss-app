import React, { Component } from 'react'
import { NavigationScreenProps } from 'react-navigation'
import { SafeAreaView, View, ScrollView, Text, Keyboard, TouchableOpacity } from 'react-native'
import HeaderApp from '../../../components/Header/Header'
import { Toast } from '@ant-design/react-native'
import Stars from '../../../components/Stars/Stars'
import AvatarName from '../../../components/AvatarName/AvatarName'
import { BrandsProducts as styles } from '../../styles'
import Input from '../../../components/Input/Input';
import ModalProduct from '../../../components/ModalProduct/ModalProduct';

interface dataProps {
    name?: string
    products?: ObjectArray
}

interface DefaultState {
    data: dataProps
    filter?: string
    showModal?: boolean
}

class BrandsProducts extends Component<NavigationScreenProps<dataProps>, DefaultState> {

    state: DefaultState = {
        data: {
            name: '',
            products: [],
        },
        filter: '',
        showModal: false
    }

    componentDidMount() {
        const { params } = this.props.navigation.state

        if (Object.keys(params).length > 0) {
            this.setState({ data: params })
        } else {
            Toast.show('No hay datos', Toast.SHORT)
        }
    }

    itemBrand = (product, index: number) => {
        if (product.length > 0 && product.toLowerCase().search(this.state.filter.toLocaleLowerCase()) > -1)
            return (
                <TouchableOpacity onPress={() => this.setState({ showModal: true })} style={styles.itemBrand} key={index}>
                    <View style={styles.containerDescriptionItem}>
                        <AvatarName innerStyles={styles.avatar} text={product} />

                        <Text style={styles.textItem}>{product}</Text>
                    </View>
                    <Stars count={5} />
                </TouchableOpacity>
            )
    }

    render() {
        return (
            <SafeAreaView>
                <ScrollView keyboardDismissMode="on-drag" onScroll={Keyboard.dismiss}>
                    <HeaderApp title="Lista" />

                    <ModalProduct onClose={() => this.setState({ showModal: false })} active={this.state.showModal}>
                        <Text>Test container</Text>
                    </ModalProduct>

                    <Input
                        onBlur={Keyboard.dismiss}
                        onChangeText={(filter: string) => this.setState({ filter })}
                        innerStyle={styles.search}
                        placeholder="Buscar producto" />

                    <View style={styles.container}>
                        {
                            (Object.keys(this.state.data).length > 0) &&
                            this.state.data.products.map(this.itemBrand)
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default BrandsProducts