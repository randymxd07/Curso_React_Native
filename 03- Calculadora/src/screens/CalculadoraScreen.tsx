import React from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/AppTheme';
import { BotonCalc } from '../components/BotonCalc';

export const CalculadoraScreen = () => {
    return (
        <View style={styles.calculadoraContainer}>
            

            {/*--------------
                RESULTADOS
            -----------------*/}
            <View>

                <Text style={styles.resultadoPequeno}>
                    1,500.00
                </Text>

                <Text style={styles.resultado}>
                    1,500.00
                </Text>

            </View>
            

            {/*-----------
                BOTONES
            --------------*/}
            <View style={styles.fila}>

                {/* Importo el boton */}
                <BotonCalc texto = 'C' color = '#9B9B9B'/>
                <BotonCalc texto = '+/-' color = '#9B9B9B'/>
                <BotonCalc texto = 'del' color = '#9B9B9B'/>
                <BotonCalc texto = '/' color = '#FF9427'/>

            </View>


        </View>
    )
}
