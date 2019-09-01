import React, { Component } from 'react'
import { View, StyleSheet, ViewStyle, Image, ImageStyle } from 'react-native'
import Modal from 'react-native-modal'
import { RFPercentage } from 'react-native-responsive-fontsize';

const { create } = StyleSheet

interface ModalProps {
    active: boolean
    onClose: () => void
    buttonClose?: boolean
}
interface ModalState {
    active?: boolean
}

interface StylesModalComponent {
    container: ViewStyle,
    containerChildren: ViewStyle,
    contentICons?: ViewStyle
    iconClose?: ImageStyle
    // modal?: ModalStyle,
}

const styles = create<StylesModalComponent>({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerChildren: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        elevation: 10,
        minHeight: '50%',
        width: '90%',
    },
    contentICons: {
        position: 'absolute',
        top: 0,
        justifyContent: 'flex-end',
        left: 0,
        right: 0,
        width: '100%',
    },
    iconClose: {
        height: RFPercentage(25),
        width: RFPercentage(25),
    },
})

class ModalProduct extends Component<ModalProps, ModalState> {
    state: ModalState = {
        active: false
    }

    componentWillMount = () => {
        const { active } = this.props

        this.setState({ active })
    }

    componentWillReceiveProps = (props: ModalProps) => {
        if (props.active !== this.state.active) {
            this.setState({ active: props.active })
        }
    }

    render() {
        return (
            <Modal
                animationIn="fadeIn"
                animationOut="fadeOut"
                backdropColor="rgba(50, 50, 50, 0.8)"
                style={styles.container}
                onBackButtonPress={this.props.onClose}
                onBackdropPress={this.props.onClose}
                isVisible={this.state.active}>

                <View style={styles.contentICons}>
                    {
                        (this.props.buttonClose) &&
                        <Image source={require('./images/close.png')} onProgress={this.props.onClose} style={styles.iconClose} />
                    }

                </View>

                <View style={styles.containerChildren}>
                    {this.props.children}
                </View>
            </Modal>
        )
    }
}

export default ModalProduct