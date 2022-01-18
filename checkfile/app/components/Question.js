import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import { COLORS } from '../constants'

const Question = ({Covid_question,number,setCovidResult,covidResult,setNumber}) => {
    return (
        <View>
            
            <Text
                        style={{
                            paddingHorizontal: 10,
                            fontSize:18,
                            fontWeight:'700'
                        }}
                    >
                        {Covid_question[number].question}?
                    </Text>
                    <Text
                        style={{
                            paddingHorizontal: 10,
                            fontSize:18,
                            fontWeight:'700',
                            color:COLORS.darkGray2
                        }}
                    >
                        {Covid_question[number].tip}
                    </Text>

                    <TouchableOpacity
                        style={{
                            backgroundColor:COLORS.white,
                            marginHorizontal:20,
                            marginBottom:10,
                            borderRadius:5,
                            marginTop:20,
                            padding:10,
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
                        onPress={() => {
                            setNumber(number + 1);
                            setCovidResult(
                                [
                                    ...covidResult,
                                    'no'
                                ]
                            );
                            
                        }}
                    >
                        <Text
                            style={{
                                textAlign: 'center',
                                color:COLORS.darkGray,
                                fontSize:18
                            }}
                        >
                            No
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            backgroundColor:COLORS.white,
                            marginHorizontal:20,
                            marginBottom:20,
                            borderRadius:5,
                            marginTop:20,
                            padding:10,
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
                        onPress={() => {
                            setNumber(number + 1);
                            setCovidResult(
                                [
                                    ...covidResult,
                                    'yes'
                                ]
                            );
                        }}
                    >
                        <Text
                            style={{
                                textAlign: 'center',
                                color:COLORS.darkGray,
                                fontSize:18
                            }}
                        >
                            Yes
                        </Text>
                    </TouchableOpacity>
        </View>
    )
}

export default Question
