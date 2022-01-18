import React from 'react'
import { View, Text } from 'react-native'
import { COLORS } from '../constants'

const TextLine = () => {
    return (
        <View
              style={{
                width:80,
                height:5,
                marginLeft:20,
                backgroundColor:COLORS.blue,
                opacity:0.6
              }}
            >

            </View>
    )
}

export default TextLine
