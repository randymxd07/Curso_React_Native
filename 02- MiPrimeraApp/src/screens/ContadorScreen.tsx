// Importo react, useState //
import React, { useState } from 'react';

// Importo View, Text, Button //
import { Text, View, Button } from 'react-native';

export const ContadorScreen = () => {

    // Hago un useState le pongo contador, lo inicializo en 0 //
    const [contador, setContador] = useState(0);

    return (

        // El flex para que abarque toda la pantalla //
        // El justifyContent para centrar el contenido de la pantalla //
        <View style={{flex: 1, justifyContent: 'center'}}>

            {/* Hago un texto */}
            {/* El textAlign para centrar el texto */}
            {/* El fontSize para poner las letras del texto más grandes */}
            {/* El top -15 para que suba un poco el texto en la pantalla */}
            <Text style={{textAlign: 'center', fontSize: 40, top: -15}}>

                {/* Imprimo el contador del useState */}
                Contador: {contador}

            </Text>

            {/* Hago un botón */}
            <Button
                
                // Título del botón //
                title="Click"

                /* Cuando presiono el botón voy a llamar a setContador
                y incremento en 1 el valor del contador */
                // Nota: no se puede hacer contador++ ni tampoco contador += 1 //
                onPress={() => setContador(contador + 1)}

            />

        </View>

    )

}
