import React,{useRef, useState} from 'react'
import {
  Animated,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View, } from 'react-native'


import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowDown, faArrowLeft, faCog } from '@fortawesome/free-solid-svg-icons';
import { COLORS, images } from '../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Set_Global_Data,Set_Country_Data,Pick_Country } from '../stores/Country/countryAction';
import { connect } from 'react-redux';
import CountryPicker, {Country} from 'react-native-country-picker-modal';


const HEADER_HEIGHT_EXPANDED = 135;
const HEADER_HEIGHT_NARROWED = 55;

const PROFILE_PICTURE_URI = require('../assets/img/young-man.png');

const PROFILE_BANNER_URI = require('../assets/img/doctor.jpg');

const AnimatedImageBackground = Animated.createAnimatedComponent(
  ImageBackground
);



const Headers = ({top,button,img,selectedCountry,Pick_Country}) => {
  const insets = useSafeAreaInsets();
  const scrollY = useRef(new Animated.Value(0)).current;
  const [pickerVisible, setPickerVisible] = useState(false);
  const onSelect = (country) => {
    Pick_Country(country);
  };


  return (
    <View
      
    >
       <StatusBar barStyle="light-content" />
       

      <Animated.View
        style={{
          zIndex: 2,
          position: 'absolute',
          top: insets.top + 13,
          left: 0,
          right: 0,
          alignItems: 'center',
          opacity: scrollY.interpolate({
            inputRange: [-20, 0],
            outputRange: [1, 0],
          }),
          transform: [
            {
              rotate: scrollY.interpolate({
                inputRange: [-45, -35],
                outputRange: ['180deg', '0deg'],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}
      >
         <FontAwesomeIcon icon={faArrowDown} size={15} color={COLORS.white} />
      </Animated.View>


        {/* Name + tweets count */}
      <Animated.View
        style={{
          zIndex: 2,
          position: 'absolute',
          top: insets.top + 6,
          left: 0,
          right: 0,
          padding:20,
          flex:1,
          opacity: scrollY.interpolate({
            inputRange: [90, 110],
            outputRange: [1, 0],
          }),
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [90, 120],
                outputRange: [30, 0],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}
      >
        {top}
       

        {/* <Text style={{
          fontSize:30,
          color:'white',
          fontWeight:'bold'
        }}>Emergency
        </Text>

        <Text style={[styles.text,{color:'lightgray'}]}>
          Have you been infected with covid-19
        </Text> */}

        {button}
       
      </Animated.View>

      <Animated.View
        style={{
          zIndex: 2,
          position: 'absolute',
          top: insets.top + 6,
          left: 0,
          right: 0,
          alignItems: 'center',
          opacity: scrollY.interpolate({
            inputRange: [90, 110],
            outputRange: [0, 1],
          }),
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [90, 120],
                outputRange: [30, 0],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}
      >
        {/* <Text style={[styles.text,{
          letterSpacing:5
        }]}>NgCov</Text> */}

        
      </Animated.View>


        {/* Banner */}
      <AnimatedImageBackground
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: HEADER_HEIGHT_EXPANDED + HEADER_HEIGHT_NARROWED,
          backgroundColor:COLORS.blue,
          borderBottomLeftRadius:40,
          borderBottomRightRadius:40,
          flexDirection:'row',
          justifyContent:'space-between',
          padding:20,
                  
          
          transform: [
            {
              scale: scrollY.interpolate({
                inputRange: [-200, 0],
                outputRange: [5, 1],
                extrapolateLeft: 'extend',
                extrapolateRight: 'clamp',
              }),
            },
          ],
        }}
      >

      

        <View
          style={{
            flexDirection:'row'
          }}
        >
          <Image
            source={images.young_man}
            resizeMode="stretch"
            style={{
              width:30,
              height:30
            }}
          />
          <Text
            style={{
              color:'#fff',
              letterSpacing:2,
              marginLeft:6,
              fontSize:12
            }}
          >
            Hi, Fred
          </Text>

        </View>

        <TouchableOpacity
              onPress={() => setPickerVisible(!pickerVisible)}
              style={styles.flagRow}
              >
                
                <CountryPicker  
                  withFlag={true}
                  
                  visible={pickerVisible}
                  withFilter={true}
                  withAlphaFilter={false}
                  onSelect={onSelect}
                  containerButtonStyle={{
                    alignItems:'center',
                    marginLeft: 10,
                    opacity:0.2,
    
                    
                  }}
                
                   
                />
                

                <Text h4 
                style={{
                  color: COLORS.black,
                  marginLeft:10
              }}
              numberOfLines={1}
              >
                  {selectedCountry}
                </Text>
              
        </TouchableOpacity>
        
      </AnimatedImageBackground>



        
      
      




     
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  text: {
    color: 'white',
    
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: -3,
  },
  tweetsCount: {
    fontSize: 13,
  },
  flagRow: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tweet: {
    flexDirection: 'column',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(255, 255, 255, 0.25)',
  },
});



const mapStateToProps = (state) =>{
  return {
    global: state.globalReducer.global,
    countries: state.countryReducer.countries,
    selectedCountry:state.SelectedCountryReducer.country.name
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      Set_Global_Data: (global) => {
        return dispatch(
          Set_Global_Data(global)
        )

      },

      Set_Country_Data: (countries) => {
        return dispatch(
          Set_Country_Data(countries)
        )
      },

      Pick_Country: (selectedCountry) => {
        return dispatch(
          Pick_Country(selectedCountry)
        )

      }


    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Headers)
