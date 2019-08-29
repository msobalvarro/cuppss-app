import React, { Component } from 'react'
import { SafeAreaView, View, Image, Text, TouchableOpacity, Keyboard, ScrollView } from 'react-native'
import { NavigationScreenProps, NavigationState, NavigationParams } from 'react-navigation'
import HeaderApp from '../../../components/Header/Header'
import { ProductsHostelier as styles } from '../../styles'
import dataProducts from './products.json'
import Input from '../../../components/Input/Input'

/**Avatar image config */
const avatar = {
    /**Size avatar */
    size: 128,

    /**Url apir request image avatar */
    url: 'https://api.adorable.io/avatars',

    /**Function return string api ulr image request */
    getUrlImage: (idKey: number): string => {
        return `${avatar.url}/${avatar.size}/${idKey}.png`
    }
}

interface DefaultState {
    products: ObjectArray,
    filter?: string
}

interface propProduct {
    name?: string
    products: ObjectArray
}


class Products extends Component<NavigationScreenProps<NavigationState, NavigationParams>, DefaultState> {
    state = {
        products: [],
        filter: ''
    }

    componentDidMount() {
        this.setState({ products: dataProducts })
    }

    /**Component return data product */
    Item = (props: propProduct, index: number) => {

        const { name } = props

        if (name.length > 0 && name.toLowerCase().search(this.state.filter.toLocaleLowerCase()) > -1) {
            return (
                <TouchableOpacity 
                    onPress={
                        () => this.props.navigation.navigate({ routeName: 'BrandsProduct', params: props })
                    }
                    style={[styles.itemProduct, {borderTopColor: (index === 0) ? 'transparent' : '#CCC' }]} 
                    key={index}>
                    {/* <Image
                        style={styles.imageProduct}
                        source={{ uri: avatar.getUrlImage(index) }} /> */}

                    <View style={styles.imageProduct} />

                    <View style={styles.itemContainerText}>
                        <Text style={styles.itemTitle}>
                            {name}
                        </Text>

                        <Text style={styles.itemDescription}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Text>
                    </View>
                </TouchableOpacity>
            )
        }

    }

    render() {
        return (
            <SafeAreaView>
                <ScrollView keyboardDismissMode="on-drag" onScroll={Keyboard.dismiss}>

                    <HeaderApp title="Listado de productos" />

                    <Input
                        onBlur={Keyboard.dismiss}
                        onChangeText={(filter: string) => this.setState({ filter })}
                        innerStyle={styles.search}
                        placeholder="Buscar producto" />

                    <View style={styles.container}>
                        {
                            this.state.products.map(this.Item)
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Products