import React from 'react'
import {SafeAreaView, StatusBar} from 'react-native';
import { CalculadoraScreen } from './src/screens/CalculadoraScreen';
import { styles } from './src/theme/AppTheme';

export const App = () => {
  return (
    // Para el notch del IPhone //
    <SafeAreaView style = {styles.fondo}>

        <StatusBar 
          backgroundColor = 'black'
          barStyle = 'dark-content'
        />

        <CalculadoraScreen/>
        
    </SafeAreaView>
  )
}

export default App;