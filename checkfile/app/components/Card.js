import React from 'react'
import { View, Text } from 'react-native'
import { COLORS } from '../constants'

const Card = (props) => {
    return (
        <View
            style={{
                backgroundColor:COLORS.white,
                    marginHorizontal:20,
                    marginVertical:10,
                    flex:1,
                    borderRadius:5,
                    position:'relative',
                    shadowColor: '#7f5df0',
                    shadowOffset: {
                        width: 0,
                        height: 10
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.5,
                    elevation: 5

                
            }}
        >
           {props.children}
        </View>
    )
}

export default Card
