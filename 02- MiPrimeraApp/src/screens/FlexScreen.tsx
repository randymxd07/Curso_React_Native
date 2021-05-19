import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const FlexScreen = () => {

    return (

        // Por defecto los elementos estan ordenados de manera de columna //

        <View style={styles.container}>
            
            <Text style={styles.caja1}>Caja 1</Text>

            <Text style={styles.caja2}>Caja 2</Text>

            <Text style={styles.caja3}>Caja 3</Text>
            
            {/* <Text style={styles.caja1}>Caja 1</Text>

            <Text style={styles.caja2}>Caja 2</Text>

            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja1}>Caja 1</Text>

            <Text style={styles.caja2}>Caja 2</Text>

            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja1}>Caja 1</Text>

            <Text style={styles.caja2}>Caja 2</Text>

            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja1}>Caja 1</Text>

            <Text style={styles.caja2}>Caja 2</Text>

            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja1}>Caja 1</Text>

            <Text style={styles.caja2}>Caja 2</Text>

            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja1}>Caja 1</Text>

            <Text style={styles.caja2}>Caja 2</Text>

            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja1}>Caja 1</Text>

            <Text style={styles.caja2}>Caja 2</Text>

            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja1}>Caja 1</Text>

            <Text style={styles.caja2}>Caja 2</Text>

            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja1}>Caja 1</Text>

            <Text style={styles.caja2}>Caja 2</Text>

            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja1}>Caja 1</Text>

            <Text style={styles.caja2}>Caja 2</Text>

            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja1}>Caja 1</Text>

            <Text style={styles.caja2}>Caja 2</Text>

            <Text style={styles.caja3}>Caja 3</Text> */}

        </View>

    )

}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',

        /*-----------------
            flexDirection
        -------------------*/
        // flexDirection: 'column', // Por defecto los elementos siempre estan en columnas //
        // flexDirection: 'row',
        // flexDirection: 'row-reverse', // Es lo mismo que el row pero se invierten las posiciones //
        // flexDirection: 'column-reverse' // Es lo mismo que el column pero se invierten las posiciones //

        /*------------------
            justifyContent
        --------------------*/
        // justifyContent: 'flex-start', // Este es el que siempre esta por defecto //
        // justifyContent: 'flex-end', // Este pone todo el contenido en la parte de abajo //
        // justifyContent: 'center', // Este pone todo el contenido en el centro pero no en el medio de la pantalla, sino en el medio del componente padre //
        // justifyContent: 'space-around', // Distribuye el espacio entre el contenido //
        // justifyContent: 'space-between', // Distribuye el espacio entre el contenido desde el principio hasta el final //
        // justifyContent: 'space-evenly', // Distribuye el espacio entre el contenido, desde el principio hasta el final //

        /*--------------
            alignItems
        ----------------*/
        // alignItems: 'stretch', // La opcion que esta por defecto //
        // alignItems: 'baseline', // Es lo mismo que el flex-start, toma el espacio minimo //
        // alignItems: 'flex-start', // Es lo mismo que el flex-start //
        // alignItems: 'flex-end', // Los alinea al final del elemento //
        // alignItems: 'center', // Los alinea en el centro //

        /*------------
            flexWrap
        --------------*/
        // flexWrap: 'nowrap', // Es la opcion por defecto //
        flexWrap: 'wrap', // Cuando hay muchos componentes puedes hacer que todos quepan en pantalla con esto //

    },

    // Si el flex es igual en todos entonces se reparte el espacio entre todos //

    caja1: {
        // flex: 4, // 40% de la pantalla //
        // flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        // alignItems: 'flex-start'

        /*-------------
            alignSelf
        ---------------*/
        // alignSelf: 'flex-start', // Toma el espacio minimo del componente //
        // alignSelf: 'center', // Toma el espacio minimo del componente en el centro //
        // alignSelf: 'flex-end', // Toma el espacio minimo del componente en el final //
        // alignSelf: 'auto', //
        // alignSelf: 'baseline', //
        // alignSelf: 'stretch', //

    },

    caja2: {
        // flex: 4, // 40% de la pantalla //
        // flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        // alignSelf: 'flex-start',
    },

    caja3: {    
        // flex: 2, // 20% de la pantalla //
        // flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        // alignSelf: 'flex-end',  
    },

});
