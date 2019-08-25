import React from 'react'
import { TextInput, TextInputProps, StyleSheet, TextStyle } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

const { create } = StyleSheet

interface StylesDefault {
    input: TextStyle
}

interface InputProps {
    innerStyle?: TextStyle
}

const styles = create<StylesDefault>({
    input: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#CCC',
        fontSize: RFValue(16),
        padding: 8,
        width: '100%',
    }
})

const Input = (props: TextInputProps & InputProps) => {
    return (
        <TextInput style={[styles.input, props.innerStyle]} {...props} />
    )
}

export default Input