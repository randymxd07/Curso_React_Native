import React from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/AppTheme';

interface Props {
    texto: string;
    color?: string;
}

/*------------------------------------
    Este es el componente BotonCalc
--------------------------------------*/
export const BotonCalc = ({texto, color = '#2D2D2D'}: Props) => {
    return (
        <View style={{...styles.boton, backgroundColor: color}}>

            <Text style={styles.botonTexto}>{texto}</Text>

        </View>
    )
}
