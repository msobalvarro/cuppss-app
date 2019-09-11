import React, { PureComponent } from 'react'
import { TouchableOpacityProps, TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize'
import { colorText, mainColor } from '../../views/util';

const { create } = StyleSheet

interface ButtonProps {
    children: JSX.Element[] | JSX.Element
    type?: 'primary' | 'warning' | 'error' | 'outline'
    size?: 'normal' | 'small' | 'large'
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

class Button extends PureComponent<TouchableOpacityProps & ButtonProps, ButtonState> {
    state: ButtonState = {}

    styles = create<ButtonStylesProps>({
        container: {
            padding: RFValue(5),
            borderRadius: RFValue(25),
        },

        text: {
            color: (this.props.type === 'outline') ? colorText : '#FFF',
            // fontSize: 
        },
    })

    componentWillMount = () => {
        let backgroundColor, colorText, _size

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
        }


    }

    render() {
        return (
            <TouchableOpacity style={this.styles.container} {...this.props}>
                <Text style={this.styles.text}>{this.props.children}</Text>
            </TouchableOpacity>
        )
    }
}

export default Button