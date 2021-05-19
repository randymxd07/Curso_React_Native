import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const FlexScreen = () => {

    return (

        // Por defecto los elementos estan ordenados de manera de columna //

        <View style={styles.container}>
            
            <Text style={styles.caja1}>Caja 1</Text>

            <Text style={styles.caja2}>Caja 2</Text>

            <Text style={styles.caja3}>Caja 3</Text>

        </View>

    )

}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        // flexDirection: 'column', // Por defecto los elementos siempre estan en columnas //
        flexDirection: 'row',
        // flexDirection: 'row-reverse', // Es lo mismo que el row pero se invierten las posiciones //
        // flexDirection: 'column-reverse' // Es lo mismo que el column pero se invierten las posiciones //
    },

    // Si el flex es igual en todos entonces se reparte el espacio entre todos //

    caja1: {
        // flex: 4, // 40% de la pantalla //
        // flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },

    caja2: {
        // flex: 4, // 40% de la pantalla //
        // flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },

    caja3: {    
        // flex: 2, // 20% de la pantalla //
        // flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },

});
