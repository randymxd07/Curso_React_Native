// rafc: para hacer la estructura de la App //

// Importamos react //
import React from 'react';

// Importo SafeAreaView //
import { SafeAreaView } from 'react-native';

// Importo TareaScreen //
import { TareaScreen } from './src/screens/TareaScreen';

// Importo FlexScreen //
// import { FlexScreen } from './src/screens/FlexScreen';

// Importo PositionScreen //
// import { PositionScreen } from './src/screens/PositionScreen';

// Importo DimensionesScreen //
// import { DimensionesScreen } from './src/screens/DimensionesScreen';

// Importo BoxObjectModelScreen //
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';

// Importo ContadorScreen //
// import { ContadorScreen } from './src/screens/ContadorScreen';

// Importo HolaMundoScreen //
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';

export const App = () => {

  return (

    // El SafeAreaView sirve para mostrar el contenido bien en los dispositivos de IOS en caso de que tengan notch //
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#28425B', // Esto es para que en IOS no se vea una parte blanca //
    }}>

      {/* Muestro lo que hay en el screen HolaMundoScreen */}
      {/* <HolaMundoScreen/> */}

      {/* Muestro mi screen ContadorScreen */}
      {/* <ContadorScreen/> */}

      {/* Muestro mi screen BoxObjectModelScreen */}
      {/* <BoxObjectModelScreen/> */}

      {/* Muestro mi screen DimensionesScreen */}
      {/* <DimensionesScreen/> */}

      {/* Muestro mi screen PositionScreen */}
      {/* <PositionScreen/> */}

      {/* Muestro mi screen FlexScreen */}
      {/* <FlexScreen/> */}

      {/* Muestro mi screen TareaScreen */}
      <TareaScreen/>

    </SafeAreaView>
    
  )

}
