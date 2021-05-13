// Importo react, useState //
import React, { useState } from 'react';

// Importo View, Text, TouchableOpacity, StyleSheet //
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export const ContadorScreen = () => {

    // Hago un useState le pongo contador, lo inicializo en 0 //
    const [contador, setContador] = useState(0);

    return (

        // Hago una vista, le pongo el estilo container //
        <View style={styles.container}>

            {/* Hago un texto, le pongo el estilo title */}
            <Text style={styles.title}>

                {/* Imprimo el contador del useState */}
                Contador: {contador}

            </Text>

            {/* Hago un TouchableOpacity que es como un botón que le puedo aplicar styles */}
            <TouchableOpacity

                // Cuando presione llamo la funcion setContador y hago que el contador incremente en 1//
                onPress={() => setContador(contador + 1)}

            >

                {/* Hago un texto */}
                {/* <Text>Click on me</Text> */}

                {/* Podemos hacer un botón personalizado, hago una vista */}
                <View>

                    {/* Hago un texto */}
                    <Text style={styles.botonIncrementar}>
                        +1
                    </Text>

                </View>

            </TouchableOpacity>

        </View>

    )

}

// Hago una constante para hacer los estilos de mi app//
// Nota: esto no es CSS //
const styles = StyleSheet.create({

    // Clase container del const styles //
    container: {

        // El flex para que abarque toda la pantalla //
        flex: 1,

        // El justifyContent para centrar el contenido de la pantalla //
        justifyContent: 'center',

    },

    title: {

        // El textAlign para centrar el texto //
        textAlign: 'center', 

        // El fontSize para poner las letras del texto más grandes //
        fontSize: 40,

        // El top -15 para que suba un poco el texto en la pantalla //
        top: -15,

    },

    botonIncrementar: {

        // Pongo el background gris //
        backgroundColor: 'grey',

        // El borderRadius es para hacer que el botón este redondeado //
        borderRadius: 100,

    }

})
