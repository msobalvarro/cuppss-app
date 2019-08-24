import { StyleSheet, ViewStyle, ImageStyle, Platform } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

const { create } = StyleSheet

interface DefaultStylesIndex {
    main: ViewStyle,
    imageLogo: ImageStyle,
    buttons?: ViewStyle
}

/**General styles screen Index view (main screen) */
export const Index = create<DefaultStylesIndex>({
    /**Style main container */
    main: {
        paddingTop: (Platform.OS === 'android') ? 50 : 0
    },

    /**Styles logo image */
    imageLogo: {
        borderColor: "#CCC",
        borderWidth: 2,
        height: RFPercentage(40),
        width: RFPercentage(40),
    }
})