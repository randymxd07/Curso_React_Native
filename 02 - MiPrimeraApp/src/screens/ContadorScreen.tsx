// Importo react, useState //
import React, { useState } from 'react';

// Importo View, Text, StyleSheet //
import { Text, View, StyleSheet } from 'react-native';

// Importo el componente Fab //
import { Fab } from '../components/Fab';

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
            
            {/* Muestro el componente Fab, puedo personalizar mi componente, le mando un title y una funcion */}
            {/* NOTA: Fab significa Floating Action Button */}
            <Fab
                title="+1"
                position="br"
                onPress={() => setContador(contador + 1)}
            />
            
            <Fab
                title="-1"
                position="bl"
                onPress={() => setContador(contador - 1)}
            />

            {/* <TouchableOpacity
                style={styles.fabLocationBL}
                onPress={() => setContador(contador - 1)}
            >

                <View style={styles.fab}>
                    <Text style={styles.fabText}>
                        -1
                    </Text>
                </View>

            </TouchableOpacity> */}

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

})
