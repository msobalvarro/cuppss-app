import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Dimensions } from 'react-native'

const { create } = StyleSheet

/**Dimension screen app */
export const { width, height } = Dimensions.get("screen")

/**Return size **%** width screen app */
const screenWidth = (e: number): number => {
    return Number(width * Number(`0.${e}`))
}

/**Return size **%** height screen app */
const screenHeight = (e: number): number => {
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
        // paddingTop: (Platform.OS === 'android') ? 50 : 0,
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
        // fontSize: RFValue(24),
        textAlign: 'center',
    }
})

interface DefaultStyleLogin {
    main: ViewStyle,
    textMain?: TextStyle,
    imageLogo?: ImageStyle,
    containerForm?: ViewStyle,
    inputs?: TextStyle,
    containerCheck?: ViewStyle
    rowCheck?: ViewStyle,
    textCheck?: ViewStyle

}

export const Login = create<DefaultStyleLogin>({
    /**Style main container */
    main: {
        // paddingTop: (Platform.OS === 'android') ? 50 : 0,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width,
        height,
    },

    /**Styles logo image */
    imageLogo: {
        height: RFPercentage(30),
        width: RFPercentage(40),
    },

    /**Text title login */
    textMain: {
        color: '#2D2D2D',
        fontSize: RFValue(18),
        marginVertical: RFValue(20),
    },

    /**Container Form */
    containerForm: {
        flexDirection: 'column',
        paddingHorizontal: RFPercentage(5),
        width: '100%',
    },

    inputs: {
        marginVertical: RFValue(2),
    },

    /**Container Check */
    containerCheck: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginVertical: RFValue(20),
    },

    /**Row checkbox and text of checkbox */
    rowCheck: {
        alignItems: 'center',
        flexDirection: 'row',
    }

})

interface DefaultStyleMenuHostelier {
    container?: ViewStyle,
    rowItem?: ViewStyle,
    items?: ViewStyle,
}

export const MenuHostelier = create<DefaultStyleMenuHostelier>({
    container: {
        // flexDirection: 'row',
        // flex: 1,
        // flexWrap: 'nowrap',
        // alignItems: 'center',
        // justifyContent: 'center',
        marginTop: RFValue(20),
        width: '100%',
    },

    rowItem: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        // marginTop: RFValue(10),
        width: '100%',
    },

    items: {
        marginHorizontal: RFValue(10),
    },
})