import React from 'react'
import { View, Text, StatusBar, StyleSheet, ScrollView,Image } from 'react-native'
import { COLORS,images } from '../constants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowDown, faChartLine, faHome, faStethoscope ,faChartBar } from '@fortawesome/free-solid-svg-icons';
import Headers from '../components/Headers';
import Home from './Home/Home';
import Update from './Update/Update';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Assess from './Assess/Assess';


const Tab = createBottomTabNavigator();

const MainLayout = () => {
    
    return (
        <>
             <Tab.Navigator

                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle:{
                        position:'absolute',
                        bottom:0,
                        
                        elevation:0,
                        backgroundColor: '#fff',
                        borderTopLeftRadius: 25,
                        borderTopRightRadius:25,
                        height: 70,
                        ...styles.shadow
                    }
                }}
            
             >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown:false,
                    tabBarLabel:"",
                    
                    tabBarIcon:({color, size,focused}) => (
                        
                        <FontAwesomeIcon
                        icon={faHome}
                        color={focused ? COLORS.blue:COLORS.black}
                        />
                    )
                }}
            />


            <Tab.Screen
                name="Update"
                component={Update}
                options={{
                    headerShown:false,
                    tabBarLabel:"",
                    
                    tabBarIcon:({color, size,focused}) => (
                        
                        <FontAwesomeIcon
                        icon={faChartBar}
                        color={focused ? COLORS.blue:COLORS.black}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Assess"
                component={Assess}
                options={{
                    headerShown:false,
                    tabBarLabel:"",
                    tabBarVisibilityAnimationConfig:false,
                    
                    tabBarIcon:({color, size,focused}) => (
                        

                        <FontAwesomeIcon
                        icon={faStethoscope}
                            color={focused ? COLORS.blue:COLORS.black}
                            
                        />
                    )
                }}
            />

            
        </Tab.Navigator>

            {/* < Home /> */}
        </>
        

        
    )
}

export default MainLayout

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white,
        
    },

    shadow:{
        shadowColor: '#7f5df0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})
