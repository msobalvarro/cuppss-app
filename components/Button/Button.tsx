import React, { Component } from 'react'
import { TouchableOpacityProps, TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize'
import { colorText, mainColor } from '../../views/util';

const { create } = StyleSheet

interface ButtonProps {
    // children: string
    type?: 'primary' | 'warning' | 'error' | 'outline'
    size?: 'normal' | 'small' | 'large'
    innerStyles?: ViewStyle
}

interface ButtonStylesProps {
    container?: ViewStyle
    text?: TextStyle
}

interface ButtonState {
    backgroundColor?: string
    colorText?: string
    size?: number
}

class Button extends Component<TouchableOpacityProps & ButtonProps, ButtonState> {
    state: ButtonState = {
        backgroundColor: mainColor,
        colorText: '#FFF',
        size: RFValue(18),
    }

    styles = create<ButtonStylesProps>({
        container: {
            alignItems: 'center',
            backgroundColor: this.state.backgroundColor,
            borderWidth: 2,
            borderColor: (this.props.type === 'outline') ? mainColor : 'transparent',
            borderRadius: RFValue(25),
            paddingVertical: RFValue(10),
        },

        text: {
            color: this.state.colorText,
            fontSize: this.state.size,
        },
    })

    componentWillMount = () => {
        let backgroundColor, colorText = '#FFF', _size

        const { type, size } = this.props

        switch (type) {
            case 'primary':
                backgroundColor = mainColor
                break

            case 'warning':
                backgroundColor = '#ffa502'
                break

            case 'error':
                backgroundColor = '#eb3b5a'
                break

            case 'outline':
                backgroundColor = 'transparent'
                colorText = mainColor
                break

            default:
                backgroundColor = mainColor
                break
        }

        switch (size) {
            case 'normal':
                _size = RFValue(18)
                break

            case 'large':
                _size = RFValue(22)
                break

            case 'small':
                _size = RFValue(14)
                break

            default:
                _size = RFValue(18)
                break
        }

        this.setState({ backgroundColor, colorText, size: _size })

    }

    render() {
        return (
            <TouchableOpacity style={[this.styles.container, this.props.innerStyles]} {...this.props}>
                <Text style={this.styles.text}>{this.props.children}</Text>
            </TouchableOpacity>
        )
    }
}

export default Button