import React, { Component } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { NavigationScreenProps, NavigationState, NavigationParams } from 'react-navigation'
import HeaderApp from '../../../components/Header/Header'
import { MenuHostelier as styles } from '../../styles'
import MenuItem from '../../../components/MenuItem/MenuItem';

/**Render item multiple menu */
const MenuHostelier = (props: NavigationScreenProps<NavigationState, NavigationParams>) => (
    <SafeAreaView>
        <HeaderApp hiddenBack logOut title="Username" />

        <ScrollView style={styles.container}>
            <View style={styles.rowItem}>
                <MenuItem onPress={() => props.navigation.navigate({ routeName: 'Products' })}
                    imageSource={require('../../../assets/icons-menu/hotelier/cheers.png')}
                    text="Destilados" />
                <MenuItem
                    imageSource={require('../../../assets/icons-menu/hotelier/wine.png')}
                    text="Vinos" />
            </View>

            <View style={styles.rowItem}>
                <MenuItem
                    imageSource={require('../../../assets/icons-menu/hotelier/water.png')}
                    text="Agua" />
                <MenuItem
                    imageSource={require('../../../assets/icons-menu/hotelier/fruit.png')}
                    text="Zumos" />
            </View>
        </ScrollView>
    </SafeAreaView>
)

export default MenuHostelier