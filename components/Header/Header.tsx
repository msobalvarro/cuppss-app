import React, { Component } from 'react'
import { StyleSheet, ViewStyle, Text, TextStyle, Image, ImageStyle, StatusBar, TouchableOpacity, View } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'
import { RFValue } from 'react-native-responsive-fontsize'

const { create } = StyleSheet

/**Size icon header */
const SizeIcon = RFValue(30)

interface DefaultProps {
    title: string,
    hiddenBack?: boolean,
    logOut?: boolean,
}

interface DefaultState {
    notification: boolean
}

interface DefaultStyle {
    container?: ViewStyle,
    textTitle?: TextStyle,
    imageReturn?: ImageStyle,
    imageNotify?: ImageStyle,
}

const styles = create<DefaultStyle>({
    container: {
        alignItems: 'center',
        borderBottomColor: '#CCC',
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // elevation: 10,
        paddingHorizontal: RFValue(10),
        paddingVertical: RFValue(20),
        width: '100%',
    },
    imageReturn: {
        height: SizeIcon,
        width: SizeIcon,
    },
    textTitle: {
        fontSize: RFValue(18),
    },
    imageNotify: {
        resizeMode: 'contain',
        height: SizeIcon,
        width: SizeIcon,
    },
})


class HeaderApp extends Component<DefaultProps, DefaultState> {
    state = {
        notification: false
    }

    componentDidMount() {
        console.log()        
    }

    logOut = () => {
        // const Reset = StackActions.reset({
        //     index: 0,
        //     actions: [NavigationActions.navigate({ routeName: 'Index' })]
        // })

        // NavigationActions.init()

        // StackActions.popToTop({ immediate: true })
        // StackActions.
    }

    /**Back a screen */
    redirectBack = () => {
        // this.props.navigation.pop()
        // StackActions.pop({ n: 1 })
        // StackActions.pop({  })
        // NavigationActions.
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />

                {
                    (this.props.logOut === true) &&
                    <TouchableOpacity onPress={this.logOut}>
                        <Image style={styles.imageReturn} source={require('./images/exit.png')} />
                    </TouchableOpacity>
                }
                
                {
                    (this.props.hiddenBack !== true) &&
                    <TouchableOpacity onPress={this.redirectBack}>
                        <Image style={styles.imageReturn} source={require('./images/left-arrow.png')} />
                    </TouchableOpacity>
                }

                <Text style={styles.textTitle}>{this.props.title}</Text>

                <TouchableOpacity>
                    <Image style={styles.imageNotify} source={require('./images/bell.png')} />
                </TouchableOpacity>

            </View>
        )
    }
}

export default HeaderApp