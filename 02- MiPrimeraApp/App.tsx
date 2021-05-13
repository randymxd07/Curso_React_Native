// rafc: para hacer la estructura de la App //

// Importamos react //
import React from 'react';

// Importamos el View, Text //
import { Text, View } from 'react-native';

const App = () => {
  return (

    // El View es como si fuera un div //
    // Nota: por defecto el View tiene un tamaño de 0px //
    // Nota: para estilizar las letras o elementos de la app usamos el atributo style={} //
    <View style={{

      // Tamaño de un elemanto flexible //
      flex: 1,

      // Fondo del View //
      // backgroundColor: 'red',

      // Para centrar el contenido usamos justifyContent //
      justifyContent: 'center',

    }}>

      {/* Muestra texto */}
      <Text style={{

        // Tamaño de las letras //
        fontSize: 45,

        // Para alinear el texto en el centro de la pantalla //
        textAlign: 'center',

      }}>
        Hola Mundo!!!
      </Text>

    </View>
  )
}

export default App;
