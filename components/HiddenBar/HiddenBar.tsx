import React from 'react'
import { StatusBar, Platform } from 'react-native'

const HiddenBar = () => <StatusBar hidden={Platform.OS === 'android'} translucent={true} />

export default HiddenBar