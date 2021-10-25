import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/AppTheme';

interface Props {
    texto: string;
    color?: string;
    ancho?: boolean;
    accion: (numeroTexto: string) => void;
}

/*------------------------------------
    Este es el componente BotonCalc
--------------------------------------*/
export const BotonCalc = ({texto, color = '#2D2D2D', ancho = false, accion}: Props) => {
    return (
        <TouchableOpacity onPress = { () => accion(texto) } >
            <View style={{
                ...styles.boton,
                backgroundColor: color,
                width: (ancho) ? 180 : 80
            }}>
                <Text style={{
                    ...styles.botonTexto, 
                    color: (color === '#9B9B9B') ? 'black' : 'white'
                }}>{texto}</Text>
            </View>
        </TouchableOpacity>
    )
}