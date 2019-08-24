import { StyleSheet, ViewStyle, ImageStyle, Platform, TextStyle } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Dimensions } from 'react-native'

const { create } = StyleSheet

/**Dimension screen app */
const { width, height } = Dimensions.get("screen")

/**Return size **%** width screen app */
const screenWidth = (e:number): number => {
    return Number(width * Number(`0.${e}`))
}

/**Return size **%** height screen app */
const screenHeight = (e:number): number => {
    return Number(height * Number(`0.${e}`))
}

interface DefaultStylesIndex {
    buttons?: ViewStyle,
    main: ViewStyle,
    imageLogo: ImageStyle,
    containerButtons?: ViewStyle,
    textButton?: TextStyle
}

/**General styles screen Index view (main screen) */
export const Index = create<DefaultStylesIndex>({
    /**Style main container */
    main: {
        paddingTop: (Platform.OS === 'android') ? 50 : 0,
        justifyContent: 'center',
        alignItems: 'center',
        width,
        height,
    },

    /**Styles logo image */
    imageLogo: {
        height: RFPercentage(40),
        width: RFPercentage(40),
    },

    containerButtons: {
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 25,
        width: '100%',
    },

    /**Buttons style */
    buttons: {
        backgroundColor: '#34495e',
        borderColor: 'transparent',
        marginVertical: 10,
        width: '70%',
    },

    /**Text buttons styles */
    textButton: {
        color: '#FFF',
        fontSize: RFValue(24),        
        textAlign: 'center',
    }
})