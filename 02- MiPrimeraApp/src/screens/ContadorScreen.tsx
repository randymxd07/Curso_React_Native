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
                
                // Localizacion del TouchableOpacity //
                style={styles.fabLocationBR}

                // Cuando presione llamo la funcion setContador y hago que el contador incremente en 1//
                onPress={() => setContador(contador + 1)}

            >

                {/* Hago un texto */}
                {/* <Text>Click on me</Text> */}

                {/* Podemos hacer un botón personalizado, hago una vista */}
                <View style={styles.fab}>

                    {/* Hago un texto */}
                    <Text style={styles.fabText}>
                        +1
                    </Text>

                </View>

            </TouchableOpacity>

            {/* Hago un TouchableOpacity que es como un botón que le puedo aplicar styles */}
            <TouchableOpacity
                
                // Localizacion del TouchableOpacity //
                style={styles.fabLocationBL}

                // Cuando presione llamo la funcion setContador y hago que el contador incremente en 1//
                onPress={() => setContador(contador - 1)}

            >

                {/* Hago un texto */}
                {/* <Text>Click on me</Text> */}

                {/* Podemos hacer un botón personalizado, hago una vista */}
                <View style={styles.fab}>

                    {/* Hago un texto */}
                    <Text style={styles.fabText}>
                        -1
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

    // Clase title del const styles //
    title: {

        // El textAlign para centrar el texto //
        textAlign: 'center', 

        // El fontSize para poner las letras del texto más grandes //
        fontSize: 40,

        // El top -15 para que suba un poco el texto en la pantalla //
        top: -15,

    },

    // Clase fabLocationBR del const styles //
    fabLocationBR: {

        // La posicion va a ser absoluta //
        position: 'absolute',

        // Basado en el padre si pongo 0 me va a poner el boton en la posición final osea abajo del todo //
        bottom: 25,

        // Me va a poner el boton al lado derecho del todo si pongo 0 //
        right: 25,


    },

    // Clase fabLocationBL del const styles //
    fabLocationBL: {

        // La posicion va a ser absoluta //
        position: 'absolute',

        // Basado en el padre si pongo 0 me va a poner el boton en la posición final osea abajo del todo //
        bottom: 25,

        // Me va a poner el boton al lado derecho del todo si pongo 0 //
        left: 25,


    },

    // Clase fab del const styles //
    fab: {

        // Agrego un color morado //
        backgroundColor: '#5856D6',

        // Ancho de 60 //
        width: 60,

        // Altura de 60 //
        height: 60,

        // Para hacer el borde redondo //
        borderRadius: 100,

        // Justifico el contenido en el centro //
        justifyContent: 'center',

    },

    // Clase fabText del const styles //
    fabText: {

        // Color de texto blanco //
        color: 'white',

        // Tamaño de las letras //
        fontSize: 25,

        // Texto en negritas //
        fontWeight: 'bold',

        // Centraliza el texto //
        // textAlign: 'center',

        // Centraliza el texto //
        alignSelf: 'center'


    }

})
