import React from 'react';
import {View,StyleSheet, SafeAreaView,ScrollView ,Image,Text, StatusBar} from 'react-native';
import Headers from '../../components/Status/Headers';

const Status = () => {
  
   return (
    <View style={{flex:1}}>
      <StatusBar backgroundColor = 'red' barStyle="light-content"/>
    <ScrollView style={styles.container}>
      
        
        <Headers/>
        <View style = {styles.greeting}>
          <Text style={styles.textBody}>Welcome</Text>
          <Text style={[styles.textBody,{fontWeight:'bold'}]}>FRED</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.status}>
          <Image source={require('../../assets/img/young-man.png')} style={styles.image}/>
          <View style={styles.status_title}>
            <Text style={styles.status_header}>You are Safe</Text>
            <Text style={styles.status_sub_header}>Low risk of covid-19 infection</Text>
          </View>
          
          </View>
          <Text style={{fontSize:10,marginVertical:8,fontFamily:'Poppins-Light'}}>
            * Your risk level is determined by the self-assessment test. Ensure to check your risk level status daily.
          </Text>
         
        </View>
        
        <View style={styles.grid_card}>
          <View>
            
          </View>
        </View>
      

      
    </ScrollView>
    </View>
    
    
    
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    borderLeftWidth:24,
    borderLeftColor: '#fff',
    backgroundColor:'#fff'

  }, 
  greeting: {
    paddingTop: 10
  },
  body:{
    width: '100%',

    backgroundColor:'#d3f9c8',
    borderWidth:5,
    borderColor:'#d3f9c8',
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 10,
    paddingLeft: 10
  },
  textBody:{
    fontFamily:'Poppins-Light',
    fontSize:23
  },
  image:{
    width: 50,
    height: 50
  },
  imageBody:{

  },
  
  status:{
    flexDirection: 'row',
  },
  status_title:{
    marginHorizontal: 5
  },
  status_header:{
    fontFamily:'Poppins-Medium'
  },
  status_sub_header:{
    fontSize:12,
    fontFamily:'Poppins-Light'
  },
  grid_card:{

  }
});



export default Status;

