import { faHeart,faSkull,faMedkit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { View, Text,Image } from 'react-native'
import { COLORS, images } from '../constants'

const Icons = ({icon}) => {
    return (
        <View
            style={{
                borderRadius:100,
                backgroundColor:COLORS.white2
            }}
        >
            <FontAwesomeIcon
                icon={icon}
                size={20}
                color={COLORS.blue}
            />
            
        </View>
    )
}


export default Icons
