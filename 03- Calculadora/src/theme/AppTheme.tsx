import { StyleSheet } from "react-native";


// Le ponemos export para poder exportar estos estilos a otros archivos //
export const styles = StyleSheet.create({
    
    // Fondo negro a la pantalla completa //
    fondo: {

        flex: 1,
        backgroundColor: 'black',

    },

    // Para poner el contenido al final y no ponerlo tan pegado a los bordes //
    calculadoraContainer: {

        flex: 1, // Abarca toda la pantalla //
        justifyContent: 'flex-end', // Pone el contenido al final //
        paddingHorizontal: 20,

    },

    // Texto de color blanco //
    resultado: {

        color: 'white', 
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10

    },

    // Texto del resoltado pequeño //
    resultadoPequeno: {

        color: 'rgba(255,255,255,0.5)', // Color blanco translucido //
        fontSize: 30,
        textAlign: 'right',

    },

    // La fila estara en el centro y la despego de los bordes //
    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },

    // Hago los estilos de los botones //
    boton: {

        height: 80,
        width: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,

    },

    // Hago el estilo del texto del boton //
    botonTexto: {

        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300',

    },

});