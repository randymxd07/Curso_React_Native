import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const FlexScreen = () => {

    return (

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
    },

    // Si el flex es igual en todos entonces se reparte el espacio entre todos //

    caja1: {
        flex: 4, // 40% de la pantalla //
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },

    caja2: {
        flex: 4, // 40% de la pantalla //
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },

    caja3: {    
        flex: 2, // 20% de la pantalla //
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },

});
