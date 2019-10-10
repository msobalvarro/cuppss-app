import React from 'react'
import { Image, Text, ImageSourcePropType, StyleSheet, ViewStyle, ImageStyle, TextStyle, TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

const { create } = StyleSheet
const sizeIcon = RFValue(100)

interface DefaultPropsItem {
    imageSource: ImageSourcePropType,
    text: string,
    onPress?: () => void
}

interface DefaultStyle {
    container?: ViewStyle,
    imageIcon?: ImageStyle,
    textTitle?: TextStyle
}

const styles = create<DefaultStyle>({
    container: {
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#CCC',
        borderRadius: 5,
        padding: RFValue(25),
        flexDirection: 'column',
        margin: RFValue(25),
        // width: '40%',
    },

    imageIcon: {
        resizeMode: 'contain',
        height: sizeIcon,
        width: sizeIcon,
    },

    textTitle: {
        fontSize: RFValue(18),
        marginTop: 20,
    },
})

const MenuItem = (props: DefaultPropsItem) => (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
        <Image style={styles.imageIcon} source={props.imageSource} />

        <Text style={styles.textTitle}>
            {props.text}
        </Text>
    </TouchableOpacity>
)

export default MenuItem