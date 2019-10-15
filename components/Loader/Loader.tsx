import React from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native'
import { ActivityIndicator } from '@ant-design/react-native'

interface DefaultProps {
    active: boolean
    size?: 'large' | 'small'
}

interface DefaultStyles {
    container: ViewStyle
}

const styles = StyleSheet.create<DefaultStyles>({
    container: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        ...StyleSheet.absoluteFillObject,
    }
})

const Loader = (props: DefaultProps) => (props.active) ? (
    <View style={styles.container}>
        <ActivityIndicator toast size={props.size} text="Loading" />
    </View>
) : null

export default Loader