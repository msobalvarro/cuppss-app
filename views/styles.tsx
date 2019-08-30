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

interface DefaultStyleProdcutsHostelier {
    container: ViewStyle,
    itemProduct?: ViewStyle,
    // imageProduct?: ImageStyle,
    search?: TextStyle,
    imageProduct?: ViewStyle,
    itemContainerText?: TextStyle,
    itemTitle?: TextStyle,
    itemDescription?: TextStyle,

}

export const ProductsHostelier = create<DefaultStyleProdcutsHostelier>({
    /**Container of all products */
    container: {
        alignItems: 'center',
        flexDirection: 'column',
        // marginTop: RFValue(10),
        paddingHorizontal: RFValue(10),
        justifyContent: 'center',
        width: '100%',
    },

    search: {
        // backgroundColor: '#EEE',
        marginVertical: RFValue(25),
        marginHorizontal: RFValue(15),
        width: 'auto',
    },

    /**Styles item product */
    itemProduct: {
        borderRadius: 5,
        backgroundColor: 'rgba(50, 50, 50, 0.1)',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: RFValue(10),
        marginVertical: RFValue(5),
        width: '100%',
    },

    imageProduct: {
        backgroundColor: '#CCC',
        borderRadius: 5,
        height: 128,
        marginRight: RFValue(5),
        width: 128,
    },

    itemContainerText: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },

    itemTitle: {
        color: '#34495e',
        fontSize: RFValue(22),
    },

    itemDescription: {
        color: '#7f8c8d',
        fontSize: RFValue(14),
        width: '70%',
    },
})


interface DefaultStyleBrandsProducts {
    container?: ViewStyle
    itemBrand?: ViewStyle
    containerDescriptionItem?: ViewStyle,
    textItem?: TextStyle,
    avatar?: ViewStyle
    search?: TextStyle
}

export const BrandsProducts = create<DefaultStyleBrandsProducts>({
    container: {
        flexDirection: 'column',
        marginTop: RFValue(5),
    },
    itemBrand: {
        alignItems: 'center',
        backgroundColor: 'rgba(50, 50, 50, 0.1)',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: RFValue(10),
        paddingHorizontal: RFValue(5),
        margin: RFValue(10),
    },
    search: {
        marginVertical: RFValue(25),
        marginHorizontal: RFValue(15),
        width: 'auto',
    },
    containerDescriptionItem: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '70%',
    },
    avatar: {
        marginRight: RFValue(10),
    },
    textItem: {
        color: '#4d4d4d',
        fontSize: RFValue(16),
        fontWeight: 'bold',
    },
})