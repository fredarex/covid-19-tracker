import React,{useEffect, useRef, useState} from 'react'
import {
  Alert,
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
import { faArrowDown, faArrowLeft, faCog } from '@fortawesome/free-solid-svg-icons';
import { COLORS, images } from '../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Headers from '../../components/Headers';
import Card from '../../components/Card';
import TextLine from '../../components/TextLine';
import { getArticle } from '../../service/news';
import { ActivityIndicator } from 'react-native-paper';
import { Set_Global_Data,Set_Country_Data,Pick_Country } from '../../stores/Country/countryAction';
import { connect } from 'react-redux';
import { setStatus } from '../../stores/Covid_risk/covidAction';

const HEADER_HEIGHT_EXPANDED = 135;
const HEADER_HEIGHT_NARROWED = 55;

const PROFILE_PICTURE_URI = require('../assets/img/young-man.png');

const PROFILE_BANNER_URI = require('../assets/img/doctor.jpg');

const AnimatedImageBackground = Animated.createAnimatedComponent(
  ImageBackground
);



const Home = ({setStatus,covidStatus,navigation}) => {
  const insets = useSafeAreaInsets();
  const scrollY = useRef(new Animated.Value(0)).current;

  const [loading, setLoading] = useState(true);
  const [newData, setNewData] = useState([]);
  const [newCovidStatus,setNewCovidStatus] = useState("");
 

  useEffect(()=>{
      navigation.addListener('focus',async()=>{
        getArticle().then(data => {
          setLoading(false);
          
          setNewData(data)
          console.log(data);
        }).catch((error)=>{
          console.log('there is an error')
        })
      });
      
    
      
  },[])

  




  return (
    <View style={styles.container}>
       
    <Headers
        top={
          <>
            <Text style={{
              fontSize:30,
              color:'white',
              fontWeight:'bold'
            }}>Emergency
            </Text>

            <Text style={[{color:'lightgray'}]}>
              Have you been infected with covid-19
            </Text>
          </>
          
        }

        button={
          <>
            <View
              style={{
                flexDirection:'row',
                marginVertical:10
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor:'#000',
                  padding:15,
                  borderRadius:20,
                  marginRight:20
                }}
              >
                <Text
                  style={{
                    color:'#fff'
                  }}
                >
                Call Now
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor:'white',
                  padding:15,
                  borderRadius:20,
                  marginRight:20
                }}
              >
                <Text>
                Send SMS
                </Text>
              </TouchableOpacity>
            </View>
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
          <Text 
            style={{
              marginLeft:20,
              marginTop:10,
              fontWeight:'bold',
              fontSize:18
            }}
          >
            Covid-19 Status
          </Text>
          <TextLine/>
          <Card>
            <View
              style={{
                justifyContent:'center',
                alignSelf:'center',
                paddingVertical:10

              }}
            >
              <Image
                source={images.covid_status}
                style={{
                  width:70,
                  height:70,
                  
                }}
                resizeMode="stretch"
              />
              <Text
                style={{
                  fontWeight:'bold'
                }}
              > Risk Level : {covidStatus}</Text>
            </View>
          </Card>

          <Text 
            style={{
              marginLeft:20,
              marginTop:10,
              fontWeight:'bold',
              fontSize:18,
              flexDirection:'column'
            }}
          >
            Trending News
            
          </Text>
          <TextLine/>

          
            <View
              style={{
                backgroundColor:COLORS.white,
                marginHorizontal:20,
                marginVertical:10,
                marginBottom:250,
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
             

              {
                loading ? 
                <View>
                  <ActivityIndicator
                    animating={loading}
                  />
                  <Text
                    style={{
                      textAlign:'center',
                      fontSize:20

                    }}
                  >
                    Loading News...
                  </Text>
                </View>
                : 
                newData.slice(1, 7).map((data,index) => {
                  return (

                    <View
                      key={index}
                    >
                        <View
                          style={{
                            paddingVertical:10,
                            paddingHorizontal:10,
                            flexDirection:'column',
                            flex:1
                            
                          }}
                        >
                          <Image
                            source={{uri:`${data.urlToImage}`}}
                            style={{
                              width:300,
                              height:200

                            }}
                            resizeMode="stretch"
                          />
                          <View
                            style={{
                              marginHorizontal:10
                            }}
                          >
                            <Text>{data.title}</Text>
                            <Text
                            numberOfLines={3}
                            style={{
                              color:COLORS.gray2
                            }}
                            
                            > {data.description}</Text>
                              <TouchableOpacity

                              >
                                  <Text
                                    style={{
                                      color:COLORS.blue
                                    }}
                                  >View</Text>
                              </TouchableOpacity>
                          </View>
                          
                        </View>
                        <View
                            style={{
                              width:300,
                              height:3,
                              
                              backgroundColor:COLORS.lightGray1
                            }}
                          >

                        </View>



                    </View>
                  )
              })
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

export default connect(mapStateToProps,mapDispatchToProps)(Home)
