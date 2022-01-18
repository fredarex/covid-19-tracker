import React,{useEffect} from 'react'
import { View, Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from './app/Navigation/Navigation'
import { createStore,applyMiddleware} from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import SplashScreen from 'react-native-splash-screen'
import { rootReducer } from './app/stores/rootReducer'

const App = () => {
  
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  )
  return (
    <Provider store={store}>
        <SafeAreaProvider>
          <Navigation/>
        </SafeAreaProvider>
    </Provider>
  )
  

 
}

export default App
