import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native'
import { COLORS, images } from '../../constants';
import { Set_Global_Data,Set_Country_Data,Pick_Country } from '../../stores/Country/countryAction';
import { connect } from 'react-redux';
import CountryPicker, {Country} from 'react-native-country-picker-modal';
import Question from '../../components/Question';
import { setStatus } from '../../stores/Covid_risk/covidAction';
import { Covid_question } from './Covid_question';



const SetQuestion = ({covidStatus,number,setNumber,setStatus,showIntro,setShowIntro,covidResult,setCovidResult,restartApp,setRestartApp,navigation}) => {

    const checkStatus = () => {
        if(covidResult.length == 4){
          const getYes = covidResult.filter((result) => result == 'yes');
          console.log()
          if(getYes.length > 3) {
              setStatus('High')
          } else if( getYes.length == 3){
              setStatus('Medium')
          }else{
              setStatus('low')
          }

        }
    }
    
    useEffect(() => {
        navigation.addListener('blur',  async() => {
            if(number >= Covid_question.length){
                checkStatus();
            }
        });
        
        
    })

    
       
    return (
        <>
            {
                number < Covid_question.length ?  
                <Question Covid_question={Covid_question} number={number} setNumber={setNumber} setCovidResult={setCovidResult} covidResult={covidResult} />
                : 
                
                <View
                    style={{
                        padding:20
                    }}
                >
                    <Text
                        style={{
                            fontWeight:'700',
                            fontSize:25,
                            lineHeight:40
                        }}
                    >
                        Thank you
                    </Text>

                    <Text
                        style={styles.StatusText}
                    >
                        These symptoms are a match for the symptoms of 
                        coronavirus, Remember, 8 out of 10 people with COVID-19
                        recover at home with rest and over-the-counter medicine.
                    </Text>
                    <Text
                        style={{
                            fontWeight:'700',
                            fontSize:25,
                            lineHeight:40,
                            
                        }}
                    >
                        What to do next
                    </Text>
                    <Text
                        style={styles.StatusText}
                    >
                        Please self-isolate at home to protect others.

                    </Text>
                    <Text
                        style={styles.StatusText}
                    >
                        Call your GP to get advice and see if you should be tested for 
                        COVID-19.
                    </Text>


                </View>
                
            }
            
        </>
    )
    
   
        
    
}


const Questions = ({navigation,setStatus,covidStatus,number,setNumber,showIntro,setShowIntro,covidResult,setCovidResult,restartApp,setRestartApp}) => {


    return (
        <View>
            <View
                style={styles.shadow}
            >
                {showIntro ?
                    <>
                            <Text
                        style={{
                            paddingHorizontal: 10,
                            fontSize:18,
                            fontWeight:'700'
                        }}
                    >
                        Welcome back
                    </Text>
                    <Text
                        style={{
                            paddingHorizontal: 10,
                            fontSize:18,
                            fontWeight:'700'
                        }}
                    >
                        How are you feeling today?
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
                            navigation.navigate('Home')
                        }}
                    >
                        <Text
                            style={{
                                textAlign: 'center',
                                color:COLORS.darkGray,
                                fontSize:18
                            }}
                        >I'm good, no symptoms</Text>
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
                            setShowIntro(false);
                            
                            
                        
                        }}
                    >
                        <Text
                            style={{
                                textAlign: 'center',
                                color:COLORS.darkGray,
                                fontSize:18
                            }}
                        >I'm not feeling well today</Text>
                    </TouchableOpacity>
                    </>
                
                : 
                    <>
                       {
                           
                           <SetQuestion
                           covidStatus={covidStatus}
                           number={number}
                           setNumber={setNumber}
                           showIntro={showIntro}
                           setShowIntro={setShowIntro}
                           covidResult={covidResult}
                           setCovidResult={setCovidResult}
                           restartApp={restartApp}
                           setRestartApp={setRestartApp}
                           setStatus={setStatus}
                           navigation={navigation}

                           />
                        
                       }
                    </>
                    
                }
                
            </View>
        </View>
    )
}



const Assess = ({selectedCountry,Pick_Country,navigation,covidStatus,setStatus}) => {
    const [pickerVisible, setPickerVisible] = useState(false); 
    const [number, setNumber] = useState(0);
    const [covidResult, setCovidResult] = useState([]);
    const [showIntro, setShowIntro] = useState(true);
    const [restartApp, setRestartApp] = useState(false);


    navigation.addListener('focus',  async() => {
      setShowIntro(true);
      setCovidResult([]);
       setNumber(0);
    });
   
    const onSelect = (country) => {
        Pick_Country(country);
        };

    return (
        <View
            style={{
                flex:1
            }}
        >
            <View
            style={{
            position: 'relative',
            left: 0,
            right: 0,
            height: 90,
            backgroundColor:COLORS.blue,
            borderBottomLeftRadius:40,
            borderBottomRightRadius:40,
            flexDirection:'row',
            justifyContent:'space-between',
            padding:20,
                    
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
                    visible={pickerVisible}
                    withFlag

                    withCurrencyButton={true}
                    withFilter={true}
                    withAlphaFilter={false}
                    onSelect={onSelect}
                    containerButtonStyle={{
                        alignItems:'center',
                        marginLeft: 10,
                        opacity:0.2,
                        
                        
                    }}
                    showCountryNameWithFlag={true}
    
                    />

                    <Text h4 
                    style={{
                    color: COLORS.blue,
                    marginLeft:10
                }}
                numberOfLines={1}
                >
                    {selectedCountry}
                    </Text>
                
            </TouchableOpacity>
            
            </View>
               {
                  <Questions navigation={navigation} covidStatus={covidStatus}number={number} setNumber={setNumber}
                   showIntro={showIntro}
                   setShowIntro={setShowIntro}
                   covidResult={covidResult}
                   setCovidResult={setCovidResult}
                   restartApp={restartApp}
                   setRestartApp={setRestartApp}
                   setStatus={setStatus}
               />
               } 
               
          
            
            
      </View>
    )
}




const styles = StyleSheet.create({
    flagRow: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
      },

      StatusText:{
          lineHeight:25,
          fontSize:17
      },
      

      shadow:{
        backgroundColor:COLORS.white,
        marginHorizontal:20,
        marginVertical:10,
        marginBottom:250,
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
    }
})



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
  



  export default connect(mapStateToProps,mapDispatchToProps)(Assess)
  
