// Importo el useState //
import { useState } from "react";

/* Un Hook es una función que recibe un numero inicial
que por defecto si no hay numero inicial entonces el
numero inicial es igual a 0 */
export const useCounter = (inicial: number = 0) => {

    // Hago el useState y lo comienzo en la variable inicial//
    const [valor, setValor] = useState(inicial);

    // Creo una funcion de tipo flecha que recibe un numero//
    const acumular = (numero: number) => {

        //Le pongo el valor//
        setValor(valor + numero);

    }

    // Retorno lo necesario //
    return {
        valor,
        acumular
    }

}
