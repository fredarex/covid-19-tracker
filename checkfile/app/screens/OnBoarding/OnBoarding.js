import React from 'react';
import { Image, StatusBar, StyleSheet,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';
import { View,Animated,Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { images, theme } from '../../constants';

// Theme
const {COLORS, FONTS, SIZES } = theme;
const {covid_mask,covid_hand,covid_app} = images
// Dummy Data
const onBoardings = [
  {
    title: "Wash Your Hands",
    description: "Use warm water and soap and rub your hands for at least 20 seconds.",
    img: covid_hand
  },
  {
    title: "Use a Face Mask",
    description: "The Centers for Disease Control and Prevention (CDC) recommends that almost everyone wears a cloth face mask in public settings where physical distancing may be difficult.",
    img: covid_mask
  },
  {
    title: "Use the Covid-19 Application Regularly",
    description: "To ensure your safety from covid-19, keep yourself updated using the covid-19 app daily",
    img: covid_app
  }
]
const OnBoarding = ({navigation}) => {

  const scrollX = new Animated.Value(0);
  const handleSkip = () => {
    navigation.replace('Login');
  }
  //Render

  function renderContent() {
    return (
      <Animated.ScrollView
      horizontal
      pagingEnabled
      decelerationRate={0}
      scrollEnabled
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event([
        {nativeEvent: {contentOffset: {x: scrollX } } },
      ],{useNativeDriver:false})}
    >
        {
          onBoardings.map((item, index) => {
             return (
               <View
                key={index}
                style={{width: SIZES.width}}
               >
                 <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}} >
                    <Image 
                      source={item.img}
                      resizeMode="cover"
                      style={{
                        width: "100%",
                        height: "100%"
                      }}
                    />
                 </View>
                 {/* Text */}
                  <View
                    style={{
                      position: 'absolute',
                      top: '60%',
                      marginLeft:10
                    
                    }}
                  >
                      <Text style={{
                        ...FONTS.h1,
                        color: COLORS.gray,
                        textAlign: 'center'
                        }}>{item.title}</Text>
                      <Text
                        style={{
                          ...FONTS.body3,
                          textAlign: 'center',
                          marginTop: SIZES.base,
                          color: COLORS.gray
                        }}
                      >
                        {item.description}
                        </Text>
                  </View>
                  {/*  Button */}
                  <TouchableOpacity
                    style={{
                      position:'absolute',
                      bottom:0,
                      right:0,
                      width:150,
                      height: 60,
                      paddingLeft: 50,
                      justifyContent:'center',
                      borderTopLeftRadius:30,
                      borderBottomLeftRadius:30,
                      backgroundColor:COLORS.blue
                    }}
                    onPress={handleSkip}
                  >
                    <Text 
                    style={{
                      color:'#fff',
                      fontSize:25,
                      
                      }}>Skip</Text>
                  </TouchableOpacity>
               </View>
             )
          })
        }
    </Animated.ScrollView>

    )
    
  }

  function ContentDot () {
    
    const dotPosition = Animated.divide(scrollX,SIZES.width)

      return (
          <View style={styles.dotContain}>
            {
            onBoardings.map((item,index)=> {

              const opacity = dotPosition.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [0.3, 1, 0.3],
                extrapolate: "clamp"
              })

              const dotSize = dotPosition.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [SIZES.base, 17, SIZES.base],
                extrapolate:"clamp"
              });

              
              return (
                  <Animated.View 
                  key={`dot-${index}`} 
                  opacity={opacity}
                  style={[styles.dot,{width:dotSize,height:dotSize}]}>

                  </Animated.View>
              )
            }
            )}
          </View>
      )
  }
  
   return (
       <SafeAreaView style={styles.container}>
         <StatusBar
         backgroundColor={COLORS.blue}
  
         />
         <View>
          {renderContent()}
         </View>
         <View style={styles.dotPositioned}>
           {ContentDot()}
         </View>
          
       </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: COLORS.white
  },
  dot:{
    borderRadius:SIZES.radius,
    marginHorizontal:SIZES.radius/2,
    backgroundColor: COLORS.blue
  },
  dotContain:{
    flexDirection:'row',
    height: SIZES.padding,
    alignItems: 'center',
    justifyContent:'center'
  },
  dotPositioned:{
    position: 'absolute',
    bottom: SIZES.height > 700 ? '45%' : '45%'
  }

});




export default OnBoarding;

