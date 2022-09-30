// Importamos el useState, este es el Hook de React //
import { useState } from "react";

export const Contador = () => {

    // Hago el useState y lo comienzo en 0 //
    const [valor, setValor] = useState(0);

    // Creo una funcion de tipo flecha que recibe un numero//
    const acumular = (numero: number) => {

        //Le pongo el valor//
        setValor(valor + numero);

    }

    return (
        <>

            {/* <h3>Contador <small>0</small> </h3> */}

            {/* Aquí imprimo el contador */}
            <h3>Contador: <small>{valor}</small> </h3>

            {/* Hago un boton para sumar 1 */}
            <button className="btn btn-primary" onClick={() => acumular(1)}>
                +1
            </button>

            {/* Para hacer una pequeña separación */}
            &nbsp;

            {/* Hago un boton para restar 1 */}
            <button className="btn btn-primary" onClick={() => acumular(-1)}>
                -1
            </button>
             
        </>
    )
    
}

