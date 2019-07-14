import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { UIManager, Platform } from 'react-native';
import { store, persistor } from './src/configure/configureStore'
import Home from './src/containers/Home'

if(Platform.OS === 'android') {
  console.log('ANDROID')
  UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)
}

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  )
}
export default App;
