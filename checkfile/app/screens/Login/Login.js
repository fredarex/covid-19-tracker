import React,{useState,useEffect,useRef} from 'react';
import {View, 
  Text, 
  Image,
  StyleSheet,
  ScrollView,
   TextInput,
   Keyboard,
    RefreshControl, 
    TouchableOpacity,
     TouchableHighlight,
     KeyboardAvoidingView,
      StatusBar,
       Animated,
       Platform} from 'react-native';
import Icon  from 'react-native-vector-icons/AntDesign';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { images, theme } from '../../constants';


const {COLORS, FONTS, SIZES } = theme;
const Login = ({navigation}) => {
  



  const onRegisterHandler = () => {
      navigation.replace('Register');
  }

   return (
        <KeyboardAvoidingView 
        style={{flex:1}}
        behavior={Platform.OS === 'ios' ? 'padding': ''}
        >
            <ScrollView 
            contentContainerStyle={{flex:1}}

            >
              <View style={styles.container}>
                <StatusBar
                   backgroundColor={COLORS.blue}/>
                <View 
                style={{
                  flex:0.7,
                  justifyContent: 'center',
                  alignItems: 'center'
                  
                }}
                >
                  <Image source={require('../../assets/img/doctor.jpg')} resizeMode="stretch"  style={styles.image} />
                </View>
        
                <View style={{flex:0.2, justifyContent:'center'}}>
                  <View style={{width: '100%', alignSelf: 'center'}}>
                    <Text style={styles.header}>Login Now</Text>
                    <Text style={styles.body}>Please enter the details below to continue.</Text>
                  
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                      <View style={styles.input}>
                        <FontAwesomeIcon icon={faUser} size={15} color={COLORS.blue} />
                        <TextInput style={{paddingHorizontal: 5, width:'90%'}} placeholder="Enter Name"  />
                      </View>
                    </TouchableWithoutFeedback>
                    <View style={styles.input_2}>
                      <FontAwesomeIcon icon={faLock} size={15} color={COLORS.blue} />
                      <TextInput style={{paddingHorizontal: 5, width:'90%'}} placeholder="Enter Password"/>
                    </View>
                  </View>
                </View>
      
                <View style={{width:'75%', alignSelf:'center',marginTop:50}}>
                  <TouchableHighlight style={styles.button} underlayColor="red">
                    <Text style={styles.button_text}>Sign In</Text>
                  </TouchableHighlight>
                </View>
               
                <View style={{textAlign:'center',flexDirection:'row',justifyContent:'center',marginTop:10}}>
                  <Text>New User ?</Text>
                  <TouchableOpacity onPress={onRegisterHandler}>
                    <Text style={{color: '#ff2d5f', fontWeight: 'bold'}}>
                      Sign up
                    </Text>
                  </TouchableOpacity>
                </View>

              </View>
            </ScrollView>
        </KeyboardAvoidingView>
        
        

    
   
    
  )
}


const styles = StyleSheet.create({
 
container:{  
  flex: 1,
  backgroundColor:'#fff'
},

image:{
  width: '70%',
  height: '70%'
},
header:{

  fontSize: 23,
  fontFamily:'Poppins-Medium',
  textAlign:'center',
  width:'70%',
  margin:0,
  alignSelf:'center'

  

},
body:{
  fontFamily:'Poppins-Medium',
  textAlign:'center',
  width: '75%',
  marginHorizontal:55,
  alignSelf:'center',
  
  fontSize:12,
  opacity:0.3,
  lineHeight:17
},
input: {
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  marginHorizontal:55,
  borderWidth:2,
  marginTop:20,
  borderRadius:23,
  paddingHorizontal:10,
  borderColor:COLORS.blue,
 

},
input_2: {
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  marginHorizontal:55,
  borderWidth:2,
  marginTop:10,
  borderRadius:23,
  paddingHorizontal:10,
  borderColor:COLORS.blue,
 

},
button:{
 backgroundColor:COLORS.blue,
 borderRadius:25,
 justifyContent:'center',
 alignItems:'center',
 marginHorizontal:50,
 paddingVertical:10,
 marginTop:40
},
button_text:{
  color:'#fff',
  fontFamily:'Poppins-Medium',
  fontWeight:'bold'

}

});

export default Login;

