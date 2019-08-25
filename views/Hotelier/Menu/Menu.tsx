import React, { Component } from 'react'
import { SafeAreaView, ScrollView} from 'react-native'
import { NavigationScreenProps, NavigationState, NavigationParams } from 'react-navigation'
import HeaderApp from '../../../components/Header/Header'
import { MenuHostelier as styles } from '../../styles'
import MenuItem from '../../../components/MenuItem/MenuItem';

interface DefaultProps {}

interface DefaultState {
    menu: ObjectArray
}

class MenuHostelier extends Component<NavigationScreenProps<NavigationState, NavigationParams> & DefaultProps, DefaultState> {
    state = {
        menu: [
            {
                image: require('../../../assets/icons-menu/hotelier/cheers.png'),
                text: 'Destilados'
            },
            {
                image: require('../../../assets/icons-menu/hotelier/wine.png'),
                text: 'Vinos'
            },
            {
                image: require('../../../assets/icons-menu/hotelier/water.png'),
                text: 'Agua'
            },
            {
                image: require('../../../assets/icons-menu/hotelier/fruit.png'),
                text: 'Zumos'
            },
        ]
    }

    render() {
        return (
            <SafeAreaView>
                <HeaderApp hiddenBack logOut title="Username" />

                <ScrollView style={styles.container}>
                    {
                        this.state.menu.map(
                            ({ image, text }, index) => <MenuItem imageSource={image} text={text} key={index} />
                        )
                    }
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default MenuHostelier