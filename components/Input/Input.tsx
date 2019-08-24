import React from 'react'
import { TextInput, TextInputProps } from 'react-native'

interface Styles {

}

const Input = (props:TextInputProps) => {
    return (
        <TextInput {...props} />
    )
}

export default Input