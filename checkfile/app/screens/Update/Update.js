import React,{useEffect, useRef, useState} from 'react'
import {
  Animated,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View, } from 'react-native'


import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowDown, faArrowLeft, faCog, faHeart, faMedkit, faSkull } from '@fortawesome/free-solid-svg-icons';
import { COLORS, images } from '../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Headers from '../../components/Headers';
import Card from '../../components/Card';
import Icons from '../../components/Icons';
import { connect } from 'react-redux';
import { getCountryCases,getGlobalCases } from '../../service/covid';
import { Set_Country_Data,Set_Global_Data,Pick_Country } from '../../stores/Country/countryAction';
import { setStatus } from '../../stores/Covid_risk/covidAction';



const HEADER_HEIGHT_EXPANDED = 135;
const HEADER_HEIGHT_NARROWED = 55;

const PROFILE_PICTURE_URI = require('../assets/img/young-man.png');

const PROFILE_BANNER_URI = require('../assets/img/doctor.jpg');

const AnimatedImageBackground = Animated.createAnimatedComponent(
  ImageBackground
);



const Update = ({selectedCountry,global,countries,Set_Global_Data,Set_Country_Data,setStatus,covidStatus}) => {
  const insets = useSafeAreaInsets();
  const scrollY = useRef(new Animated.Value(0)).current;
  const [covidCountry,setCovidCountry] = useState({});

  useEffect(()=>{
      
      getCountryCases()
      .then((data)=>{
        Set_Country_Data(data)
        //console.log(data);
      }).catch((error)=>{
        console.log('there is an error',error)
      })
  },[selectedCountry]);

  useEffect(()=>{
      
    getGlobalCases()
    .then((data)=>{
      Set_Global_Data(data)
      //console.log(data);
    }).catch((error)=>{
      console.log('there is an error',error)
    })
},[selectedCountry]);

  const viaCountry = countries.find((data) => data.Country === selectedCountry);
  console.log(viaCountry);
 
 


  return (
    <View style={styles.container}>
       
    <Headers
    top={
      <>
        <Text
          style={{
            color:'#fff',
            fontSize:24
          }}
        >Latest Covid-19 Update</Text>
        <Text
          style={{
            color:'#fff',
            fontSize:17
          }}
        >The national Picture</Text>

      </>
    }
    
    />
       {/* Tweets/profile */}
       <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: scrollY },
              },
            },
          ],
          { useNativeDriver: true }
        )}
        style={{
          zIndex: 3,
          marginTop: HEADER_HEIGHT_NARROWED,
          paddingTop: HEADER_HEIGHT_EXPANDED,
        }}
      >
        <View
          style={[styles.container, { backgroundColor: COLORS.lightGray2 }]}
        >
                <Card>
                    <Text
                      style={{
                        textAlign:'center',
                        fontWeight:'bold',
                        fontSize:20
                      }}
                    >
                      {selectedCountry} cases
                      </Text>

                      {/* array */}

                      {
                        viaCountry ? 
                        <>
                        <View
                          style={{
                            flexDirection:'row',
                            paddingVertical:10,
                            paddingHorizontal:10
                          }}
                        >
                          <Icons color={COLORS.white2} icon={faHeart} size="15"/>
                          <View
                            style={{
                              marginLeft:20
                            }}
                          >
                            <Text
                              style={{
                                fontWeight:'bold'
                              }}
                            >
                              {viaCountry.TotalConfirmed}
                            </Text>
                            <Text>
                              Total confirmed cases
                            </Text>
                          </View>
                        </View>

                        <View
                        style={{
                          flexDirection:'row',
                          paddingVertical:10,
                          paddingHorizontal:10
                        }}
                        >
                        <Icons color={COLORS.white2} icon={faSkull} size="15"/>
                        <View
                          style={{
                            marginLeft:20
                          }}
                        >
                          <Text
                            style={{
                              fontWeight:'bold'
                            }}
                          >
                            {viaCountry.TotalDeaths}
                          </Text>
                          <Text>
                            Total Death cases
                          </Text>
                        </View>
                        </View>

                        <View
                        style={{
                          flexDirection:'row',
                          paddingVertical:10,
                          paddingHorizontal:10
                        }}
                        >
                        <Icons color={COLORS.white2} icon={faMedkit} size="15"/>
                        <View
                          style={{
                            marginLeft:20
                          }}
                        >
                          <Text
                            style={{
                              fontWeight:'bold'
                            }}
                          >
                            {viaCountry.TotalRecovered}
                          </Text>
                          <Text>
                            Total Recovered cases
                          </Text>
                        </View>
                        </View>
                        
                        </>



                        :
                        <Text
                            style={{
                              textAlign:'center'
                            }}
                        >
                          No data found
                        </Text>


                      }

                        
                      

              
                </Card>


                {/* Second card */}
                
                <View
                  style={{
                    backgroundColor:COLORS.white,
                    marginHorizontal:20,
                    marginVertical:10,
                    flex:1,
                    borderRadius:5,
                    position:'relative',
                    marginBottom:150,
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
                    <Text
                      style={{
                        textAlign:'center',
                        fontWeight:'bold',
                        fontSize:20
                      }}
                    >
                      Global cases
                      </Text>

                      {/* array */}

                      {
                        global ? 
                        <>
                        <View
                          style={{
                            flexDirection:'row',
                            paddingVertical:10,
                            paddingHorizontal:10
                          }}
                        >
                          <Icons color={COLORS.transparentBlack1} icon={faHeart} size="15"/>
                          <View
                            style={{
                              marginLeft:20
                            }}
                          >
                            <Text
                              style={{
                                fontWeight:'bold'
                              }}
                            >
                              {global.TotalConfirmed}
                            </Text>
                            <Text>
                              Total confirmed cases
                            </Text>
                          </View>
                        </View>

                        <View
                        style={{
                          flexDirection:'row',
                          paddingVertical:10,
                          paddingHorizontal:10
                        }}
                        >
                        <Icons  icon={faSkull} />
                        <View
                          style={{
                            marginLeft:20
                          }}
                        >
                          <Text
                            style={{
                              fontWeight:'bold'
                            }}
                          >
                            {global.TotalDeaths}
                          </Text>
                          <Text>
                            Total Death cases
                          </Text>
                        </View>
                        </View>

                        <View
                        style={{
                          flexDirection:'row',
                          paddingVertical:10,
                          paddingHorizontal:10
                        }}
                        >
                        <Icons color={COLORS.blue} icon={faMedkit} size="15"/>
                        <View
                          style={{
                            marginLeft:20
                          }}
                        >
                          <Text
                            style={{
                              fontWeight:'bold'
                            }}
                          >
                            {global.TotalRecovered}
                          </Text>
                          <Text>
                            Total Recovered cases
                          </Text>
                        </View>
                        </View>
                        
                        </>



                        :
                        <Text
                            style={{
                              textAlign:'center'
                            }}
                        >
                          No data found
                        </Text>


                      }

                        
                      

              
                </View>
              
        </View>
  
      </Animated.ScrollView>
     
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

});


const mapStateToProps = (state) =>{
  return {
    global: state.globalReducer.global,
    countries: state.countryReducer.countries,
    selectedCountry:state.SelectedCountryReducer.country.name,
    covidStatus: state.covidStatusReducer.covidStat
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

      },
      setStatus: (covidStatus) => {
        return dispatch(
            setStatus(covidStatus)
        )
    }


    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Update)


// return (
//   <View
//   style={{
//     flexDirection:'row',
//     paddingVertical:10,
//     paddingHorizontal:10
//   }}
// >
//   <Icons color={COLORS.blue} img={images.covid_logo} size="15"/>
//   <View
//     style={{
//       marginLeft:20
//     }}
//   >
//     <Text
//       style={{
//         fontWeight:'bold'
//       }}
//     >
//       {data.TotalConfirmed}
//     </Text>
//     <Text>
//       Total confirmed cases
//     </Text>
//   </View>
// </View>
// )
