import React, { Component } from 'react'
import { View, Text, StyleSheet, ViewProps, TextStyle, ViewStyle } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

const { create } = StyleSheet

/**Return random number, recive *length* array */
const Random = (max: number): number => {
    return Math.floor(Math.random() * max)
}

interface AvatarNameState {
    index?: number
    colors: ObjectArray
    sizeNumber?: number,
    textShort: string
}

interface AvatarNameProps {
    text: string
    size?: 'small' | 'medium' | 'large' | undefined
    innerStyles?: ViewStyle
}

interface AvatarStyles {
    content?: ViewProps
    text?: TextStyle
}

const styles = create<AvatarStyles>({
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
    },
    text: {
        color: '#FFF',
        fontWeight: 'bold',
    }
})

/**Component represent initial string random color */
class AvatarName extends Component<AvatarNameProps, AvatarNameState> {
    state: AvatarNameState = {
        colors: ['#1abc9c', '#34495e', '#e74c3c', '#f1c40f', '#2980b9', '#9b59b6'],
        index: 0,
        sizeNumber: 0,
        textShort: '.|.',
    }

    componentWillMount() {
        const index = Random(this.state.colors.length)
        const { size } = this.props

        const sizeNumber = size === undefined && RFValue(50)
            || size === 'small' && RFValue(50)
            || size === 'medium' && RFValue(80)
            || size === 'large' && RFValue(100)

        this.setState({ index, sizeNumber })
    }

    componentDidMount() {
        const { text } = this.props

        if (text.length) {
            const textShort = text.substr(0, 1)

            this.setState({ textShort })
        }
    }

    render() {
        const { textShort, index, colors, sizeNumber } = this.state


        return (
            <View style={[
                styles.content,
                this.props.innerStyles,
                {
                    backgroundColor: colors[index],
                    height: sizeNumber,
                    width: sizeNumber,
                }
            ]}>
                <Text style={styles.text}>{textShort}</Text>
            </View>
        )
    }
}

export default AvatarName