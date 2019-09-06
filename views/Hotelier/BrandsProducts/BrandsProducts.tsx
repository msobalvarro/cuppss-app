import React, { Component } from 'react'
import { NavigationScreenProps } from 'react-navigation'
import { SafeAreaView, View, ScrollView, Text, Keyboard, TouchableOpacity } from 'react-native'
import HeaderApp from '../../../components/Header/Header'
import { Toast, WhiteSpace } from '@ant-design/react-native'
import Stars from '../../../components/Stars/Stars'
import AvatarName from '../../../components/AvatarName/AvatarName'
import { BrandsProducts as styles, ModalStyles } from '../../styles'
import Input from '../../../components/Input/Input'
import Modal from 'react-native-modal'
import { RFValue } from 'react-native-responsive-fontsize';

interface dataProps {
    name?: string
    products?: ObjectArray
}

interface DefaultState {
    data: dataProps
    filter?: string
    showModal?: boolean
    nameSelect?: string
}

class BrandsProducts extends Component<NavigationScreenProps<dataProps>, DefaultState> {

    state: DefaultState = {
        data: {
            name: '',
            products: [],
        },
        filter: '',
        showModal: false,
        nameSelect: ''
    }

    componentDidMount() {
        const { params } = this.props.navigation.state

        if (Object.keys(params).length > 0) {
            this.setState({ data: params })
        } else {
            Toast.show('No hay datos', Toast.SHORT)
        }
    }

    onCloseModal = () => {
        this.setState({ showModal: false })
    }

    itemBrand = (product, index: number) => {
        if (product.length > 0 && product.toLowerCase().search(this.state.filter.toLocaleLowerCase()) > -1)
            return (
                <TouchableOpacity onPress={() => this.setState({ showModal: true, nameSelect: product })} style={styles.itemBrand} key={index}>
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

                    <Modal
                        animationIn="fadeIn"
                        animationOut="fadeOut"
                        backdropColor="rgba(50, 50, 50, 0.8)"
                        onBackButtonPress={this.onCloseModal}
                        isVisible={this.state.showModal}
                        onBackdropPress={this.onCloseModal}
                        style={ModalStyles.container}>
                        <View style={[ModalStyles.containerChildren, {
                            padding: RFValue(10)
                        }]}>
                            <Text style={styles.titleModal}>{this.state.nameSelect}</Text>

                            <WhiteSpace style={{ borderBottomColor: '#CCC', borderBottomWidth: 2 }} />

                            <React.Fragment>
                                <TouchableOpacity style={styles.itemProduct}>
                                    <Text style={styles.itemProductText}>Product Detail</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.itemProduct}>
                                    <Text style={styles.itemProductText}>Product Detail</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.itemProduct}>
                                    <Text style={styles.itemProductText}>Product Detail</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.itemProduct}>
                                    <Text style={styles.itemProductText}>Product Detail</Text>
                                </TouchableOpacity>
                            </React.Fragment>

                        </View>
                    </Modal>

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