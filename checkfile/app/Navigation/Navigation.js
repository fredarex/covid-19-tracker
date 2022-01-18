import  React,{useEffect} from 'react';
import {View, Text, Button,StyleSheet,Linking, FlatList,TextInput, RefreshControl, TouchableOpacity, TouchableHighlight, Alert, Modal} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import OnBoarding from '../screens/OnBoarding/OnBoarding';
import { StatusBar } from 'react-native';
import { COLORS } from '../constants';
import MainLayout from '../screens/MainLayout';
import Assess from '../screens/Assess/Assess';
import SplashScreen from 'react-native-splash-screen';


const Stack = createStackNavigator();
const Navigation = ({navigation}) => {
    useEffect(() => {
        setTimeout(()=>{
          SplashScreen.hide();
          
        },500)
        
      },[]);
  
   return (
    
    <NavigationContainer>
        <StatusBar backgroundColor={COLORS.blue}/>
        <Stack.Navigator
            initialRouteName="OnBoarding"
            screenOptions = {
                {
                    ...TransitionPresets.DefaultTransition,
                    headerMode:"screen",
                    
                    headerStyle:{elevation:0}
                    
                    
                    
                }
            
            }
            >
                <Stack.Screen name="OnBoarding" component={OnBoarding} options={({navigation})=> (
                    {
                        headerShown:false
                    }
                )} />
                <Stack.Screen name="Login" component={Login} options={({navigation}) =>({
                headerShown:false
                })} />
             
                 <Stack.Screen name="Register" component={Register} options={({navigation}) =>({
                headerShown:false
                })}
            
                />

                <Stack.Screen name="MainLayout" component={MainLayout} options={({navigation})=> ({
                    headerShown:false
                })}/>

        </Stack.Navigator>

        
    </NavigationContainer>
    
  )
}


const styles = StyleSheet.create({
 


});

export default Navigation;

