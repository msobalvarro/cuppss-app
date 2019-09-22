import React, { Component } from 'react'
import { NavigationScreenProps, ScrollView } from 'react-navigation'
import { SafeAreaView, Keyboard, View, Image, ImageSourcePropType, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import Header from '../../../components/Header/Header'
import { ProductModel as styles, width } from '../../styles'
import Button from '../../../components/Button/Button'
import { RFValue } from 'react-native-responsive-fontsize'

interface ModelProductProps { }

interface ModelProductState {
    allImage: Array<ImageSourcePropType>
    productNumber: number
}

class ModelProduct extends Component<NavigationScreenProps<ModelProductProps>, ModelProductState> {
    state: ModelProductState = {
        allImage: [
            require('./image/first.png'),
            require('./image/second.png'),
            require('./image/third.png')
        ],
        productNumber: 1
    }

    componentWillMount() {
        // const { params } = this.props.navigation.state
    }

    RenderImage = (e: { item: ImageSourcePropType, index: number }): React.ReactNode => {
        return (
            <View key={e.index} style={styles.containerImageCarouse}>
                <Image source={e.item} style={styles.imageCarousel} />
                {/* <ParallaxImage
                    source={e.item}
                    containerStyle={styles.containerParalax}
                    parallaxFactor={0.4}
                    style={styles.imageCarousel}
                /> */}
            </View>
        )
    }

    /**Sum number products */
    sumProduct = () => {
        const { productNumber } = this.state

        this.setState({ productNumber: productNumber + 1 })
    }

    /**Minus product of state */
    minustProduct = () => {
        const { productNumber } = this.state

        if(productNumber !== 1) {
            this.setState({ productNumber: productNumber - 1 })
        }
    }

    render() {
        return (
            <SafeAreaView>
                <ScrollView keyboardDismissMode="on-drag" onScroll={Keyboard.dismiss}>
                    <Header title="Comprar Producto" />

                    {/* Carousel Images */}
                    <Carousel
                        style={styles.carousel}
                        data={this.state.allImage}
                        renderItem={this.RenderImage}
                        sliderWidth={width}
                        itemWidth={width}
                    // hasParallaxImages={true}
                    />

                    <Text style={styles.nameProduct}>Flor de Joya 1000 ML</Text>
                    
                    {/* Buy description */}
                    <View style={styles.containerDescription}>
                        <View style={styles.containerRow}>
                            <Text style={styles.textTitle}>
                                Precio
                            </Text>

                            <Text style={styles.textDescription}>
                                $ 25
                            </Text>
                        </View>

                        <View style={styles.containerRow}>
                            <Text style={styles.textTitle}>
                                Cantidad Minima
                            </Text>

                            <Text style={styles.textDescription}>
                                5
                            </Text>
                        </View>

                        <View style={styles.containerRow}>
                            <Text style={styles.textTitle}>
                                Formato
                            </Text>

                            <Text style={styles.textDescription}>
                                1000 ML
                            </Text>
                        </View>

                        <View style={styles.containerRow}>
                            <Text style={styles.textTitle}>
                                Tiempo de Entrega
                            </Text>

                            <Text style={styles.textDescription}>
                                10 a 15 dias
                            </Text>
                        </View>

                        <View style={styles.containerRow}>
                            <Text style={styles.textTitle}>
                                Proveedor
                            </Text>

                            <Text style={styles.textDescription}>
                                Jose Company.
                            </Text>
                        </View>
                    </View>

                    {/* Units to buy */}
                    <KeyboardAvoidingView behavior="padding" enabled style={styles.containerUnit}>
                        <Text style={styles.unitTitle}>Unidades a Comprar</Text>

                        <View style={styles.containerUnitToBuy}>
                            <TextInput
                                placeholder="Digite una cantidad"
                                keyboardType="numeric"
                                defaultValue={this.state.productNumber.toString()}
                                keyboardAppearance="dark"
                                style={styles.textInputUnit}
                            />

                            <TouchableOpacity style={styles.buttonsUnit} onPress={this.sumProduct}>
                                <Image source={require('./image/add.png')} style={styles.imageButtonsUnit} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonsUnit} onPress={this.minustProduct}>
                                <Image source={require('./image/remove.png')} style={styles.imageButtonsUnit} />
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>

                    <Button innerStyles={{ marginVertical: RFValue(10) }} size="small" type="error">Agregar a Catalogo</Button>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default ModelProduct