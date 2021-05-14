import React from 'react'
import { Text, View, StyleSheet, TouchableNativeFeedback } from 'react-native';

// Hago una interface //
interface Props {

    // El titulo tiene que ser string //
    title: string;

    // El onPress tiene que ser una función //
    onPress: () => void;

    // El position tiene que ser bt o bl, para decirle que esto es opcional se pone el ? //
    position?: 'br' | 'bl';

}

// Los props van a ser de tipo Props, desestructuro el title, onPress de mis props //
export const Fab = ({title, onPress, position = "br"}: Props) => {

    return (

        // Hago un View y muevo mi TouchableNativeFeedback dentro de este //
        <View
            // Localizacion del TouchableNativeFeedback //
            style={[ // Puedo mandarlo como un array //

                // Si la posicion es exactamente igual al bl, entonces //
                // (position === 'bl')
                //     ? styles.fabLocationBL // Pongo los estilos del bl, caso contrario //
                //     : styles.fabLocationBR // Pongo los estilos del br //

                // Le pongo la posición //
                styles.fabLocation,

                // Le digo que si la posicion es exactamente igual a bl que aplicque styles.left, caso contrario que aplique styles.right //
                (position === 'bl') ? styles.left : styles.right

            ]}
        >

            {/* Hago un TouchableNativeFeedback que es como un botón que le puedo aplicar styles */}
            <TouchableNativeFeedback
                        
                // Cuando presione llamo la prop onPress y hago que el contador incremente en 1 //
                onPress={onPress}

                // Ponemos un background //
                background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}

            >

                {/* Hago un texto */}
                {/* <Text>Click on me</Text> */}

                {/* Podemos hacer un botón personalizado, hago una vista */}
                <View style={styles.fab}>

                    {/* Hago un texto */}
                    <Text style={styles.fabText}>
                        {title}
                    </Text>

                </View>

            </TouchableNativeFeedback>

        </View>
        
    )

}

const styles = StyleSheet.create({

    // Clase fabLocationBR del const styles //
    // fabLocationBR: {

    //     // La posicion va a ser absoluta //
    //     position: 'absolute',

    //     // Basado en el padre si pongo 0 me va a poner el boton en la posición final osea abajo del todo //
    //     bottom: 25,

    //     // Me va a poner el boton al lado derecho del todo si pongo 0 //
    //     right: 25,


    // },

    // Clase fabLocationBL del const styles //
    // fabLocationBL: {

    //     // La posicion va a ser absoluta //
    //     position: 'absolute',

    //     // Basado en el padre si pongo 0 me va a poner el boton en la posición final osea abajo del todo //
    //     bottom: 25,

    //     // Me va a poner el boton al lado derecho del todo si pongo 0 //
    //     left: 25,


    // },

    // Clase fabLocation del const styles //
    fabLocation: {

        // La posicion va a ser absoluta //
        position: 'absolute',

        // Basado en el padre si pongo 0 me va a poner el boton en la posición final osea abajo del todo //
        bottom: 25,

    },

    // Clase right del const styles //
    right: {

        // Me va a poner el boton al lado derecho del todo si pongo 0 //
        right: 25,

    },

    // Clase left del const styles //
    left: {

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

        shadowColor: "#000",

        shadowOffset: {
            width: 0,
            height: 4,
        },

        shadowOpacity: 0.30,

        shadowRadius: 4.65,

        elevation: 8,

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


    },

})