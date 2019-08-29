import React, { Component } from 'react'
import { View, Image, ViewStyle, ImageStyle, StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

const { create } = StyleSheet

/**Souyrce image start */
const ImageStar = require('../../assets/start.png')

interface StarsProps {
    count: number,
    size?: 'small' | 'medium' | 'large' | undefined
}

interface StarState {
    sizeNumber: number
    dataCount: ObjectArray
}

interface StylesStar {
    container: ViewStyle
    starImage?: ImageStyle
}

const styles = create<StylesStar>({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})



class Stars extends Component<StarsProps, StarState> {
    state: StarState = {
        sizeNumber: 0,
        dataCount: []
    }

    componentWillMount() {
        /**Count stars */
        const dataCount = new Array(this.props.count).fill('YES')

        this.setState({ dataCount })
    }


    componentDidMount() {

        /**Size string component props */
        const { size } = this.props

        /**Size image star */
        const sizeNumber = size === undefined && RFValue(10)
            || size === 'small' && RFValue(10)
            || size === 'medium' && RFValue(20)
            || size === 'large' && RFValue(30)

        console.log(sizeNumber)

        this.setState({ sizeNumber })
    }



    render() {
        const { dataCount, sizeNumber } = this.state

        return (
            <View style={styles.container}>
                {
                    dataCount.map(
                        (_: any, index: number) => (
                            <Image
                                style={
                                    [styles.starImage, {
                                        height: sizeNumber,
                                        width: sizeNumber,
                                    }]
                                }
                                source={ImageStar}
                                key={index} />
                        )
                    )
                }
            </View>
        )
    }

}

export default Stars