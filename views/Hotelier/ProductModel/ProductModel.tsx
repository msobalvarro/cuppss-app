import React, { Component } from 'react'
import { NavigationScreenProps, ScrollView } from 'react-navigation'
import { SafeAreaView, Keyboard, View, Image, ImageSourcePropType, Text } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import Header from '../../../components/Header/Header'
import { ProductModel as styles ,width } from '../../styles'

interface ModelProductProps { }

interface ModelProductState {
    allImage?: Array<ImageSourcePropType>
}

class ModelProduct extends Component<NavigationScreenProps<ModelProductProps>, ModelProductState> {
    state: ModelProductState = {
        allImage: [
            require('./image/first.png'),
            require('./image/second.png'),
            require('./image/third.png')
        ]
    }

    componentWillMount() {
        // const { params } = this.props.navigation.state
    }

    RenderImage = (e: { item: ImageSourcePropType, index: number }): React.ReactNode => {
        return (
            <View key={e.index} style={styles.containerImageCarouse}>
                <Image source={e.item} style={styles.imageCarousel} />
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView>
                <ScrollView keyboardDismissMode="on-drag" onScroll={Keyboard.dismiss}>
                    <Header title="Comprar Producto" />

                    <Carousel
                        style={styles.carousel}
                        data={this.state.allImage}
                        renderItem={this.RenderImage}
                        sliderWidth={width}
                        itemWidth={width}
                    />

                    <Text style={styles.nameProduct}>Flor de Joya 1000 ML</Text>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default ModelProduct