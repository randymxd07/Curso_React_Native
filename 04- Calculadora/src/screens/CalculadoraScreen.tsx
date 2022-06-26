import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/AppTheme';
import { BotonCalc } from '../components/BotonCalc';

export const CalculadoraScreen = () => {

    const [numeroAnterior, setNumeroAnterior] = useState('0')

    // useState para poner digitos en la calculadora //
    const [numero, setNumero] = useState('0')

    // Funcion de flecha para limpiar la calculadora y ponerla en 0 //
    const limpiar = () => {
        setNumero('0');
    }

    const armarNumero = (numeroTexto: string) => {

        // No aceptar doble punto //
        if(numero.includes('.') && numeroTexto.includes('.')) return;

        if(numero.startsWith('0') || numero.startsWith('-0')){

            // Punto decimal //
            if(numeroTexto === '.'){

                setNumero( numero + numeroTexto);
                
            // Evaluar sie s otro 0 y hay otro punto
            }else if(numeroTexto === '0' && numero.includes('.')){

                setNumero(numero + numeroTexto);

            // Evaluar si es iferente de cero y no tiene un punto //
            } else if(numeroTexto !== '0' && !numero.includes('.')){

                setNumero(numeroTexto);

            // Evitar el 0000.0 //
            } else if(numeroTexto === '0' && !numero.includes('.')){

                setNumero(numero);

            }else{

                setNumero(numero + numeroTexto);

            }

        } else {
            setNumero( numero + numeroTexto )
        }
    }

    /*-------------------------
        Logica del boton +/- 
    ---------------------------*/
    const positivoNegativo = () => {
        if(numero.includes('-')){ // Si el numero tiene el simbolo de - entonces //
            setNumero(numero.replace('-', '')); // Reemplazo el simbolo de - por un espacio vacío //
        }else{
            setNumero('-' + numero);
        }
    }

    const btnDelete = () => {

        let simbolo = '';
        let numeroTemp = numero;
       
        if(numero.includes('-')){
            simbolo = '-';
            numeroTemp = numero.substr(1);
        }

        if(numeroTemp.length > 1){

            setNumero(simbolo + numeroTemp.slice(0,-1)); // Esto me quita la ultima posicion //

        }else{// Si solo hay un digito entonces se pone un 0 //

            setNumero('0');

        }

    }

    return (

        <View style={styles.calculadoraContainer}>
            
            {/*--------------
                RESULTADOS
            -----------------*/}
            <Text style={styles.resultadoPequeno}>
                {numeroAnterior}
            </Text>

            <Text style={styles.resultado} numberOfLines = {1} adjustsFontSizeToFit>
                {numero}
            </Text>
            
            {/*-----------
                BOTONES
            --------------*/}
            <View style={styles.fila}>
                <BotonCalc texto = 'C' color = '#9B9B9B' accion = {limpiar} />
                <BotonCalc texto = '+/-' color = '#9B9B9B' accion = {positivoNegativo}/>
                <BotonCalc texto = 'del' color = '#9B9B9B' accion = {btnDelete}/>
                <BotonCalc texto = '/' color = '#FF9427' accion = {limpiar}/>
            </View>

            {/* FILA DE BOTONES */}
            <View style={styles.fila}>
                <BotonCalc texto = '7'accion = {armarNumero} />
                <BotonCalc texto = '8' accion = {armarNumero} />
                <BotonCalc texto = '9' accion = {armarNumero} />
                <BotonCalc texto = 'x' color = '#FF9427' accion = {limpiar}/>
            </View>

            {/* FILA DE BOTONES */}
            <View style={styles.fila}>
                <BotonCalc texto = '4' accion = {armarNumero} />
                <BotonCalc texto = '5' accion = {armarNumero} />
                <BotonCalc texto = '6' accion = {armarNumero} />
                <BotonCalc texto = '-' color = '#FF9427' accion = {limpiar}/>
            </View>

            {/* FILA DE BOTONES */}
            <View style={styles.fila}>
                <BotonCalc texto = '1' accion = {armarNumero} />
                <BotonCalc texto = '2' accion = {armarNumero} />
                <BotonCalc texto = '3' accion = {armarNumero} />
                <BotonCalc texto = '+' color = '#FF9427' accion = {limpiar}/>
            </View>

            {/* FILA DE BOTONES */}
            <View style={styles.fila}>
                <BotonCalc texto = '0' ancho accion = {armarNumero} />
                <BotonCalc texto = '.' accion = {armarNumero} />
                <BotonCalc texto = '=' color = '#FF9427' accion = {limpiar}/>
            </View>

        </View>
        
    )
}