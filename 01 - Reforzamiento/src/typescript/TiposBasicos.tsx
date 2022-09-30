//rafc: para crear la estructura de nuestro componente//

//Quitamos el import de react//
//import React from 'react';

export const TiposBasicos = () => {

    /*
    //Con esto puedo decirle a mi variable que puede ser
    //tanto de tipo string o de tipo number
    let nombre: string | number = 'Randy';
    nombre = 123;
    */

    /* Los dos puntos despues del nombre de la variable es para 
    especificarle a a typescript de qué tipo de datos es esa variable*/

    /*---------------------------
        Variable de tipo string 
    -----------------------------*/
    const nombre: string = 'Randy';

    /*---------------------------
        Variable de tipo number 
    -----------------------------*/
    const edad: number = 20;

    /*----------------------------
        Variable de tipo boolean 
    ------------------------------*/
    const estaActivo: boolean = false;
    // const estaActivo: boolean = true;

    /*----------
        Arrays
    ------------*/
    // Le definimos el array de tipo string, se pone el tipo de dato seguido de [] //
    const poderes: string[] = []; //'Velocidad', 'Volar', 'Rayos X'

    // Un arreglo para meterle lo que sea //
    // const array: any[] = [];

    // El .push es para insertar datos en el array
    // poderes.push(1);
    // poderes.push('123');
    // poderes.push(true);

    return (

        //Trasformamos la etiqueta en un fragmento quitandole la palabra div//
        <>
            {/* Hago un título */}
            <h3>Tipos básicos</h3>

            {/* Imprimo las variables */}
            {nombre}, {edad}, {(estaActivo) ? 'Activo' : 'No Activo'}

            {/* Hago una línea */}
            <hr/>

            {/* Imprimo el array de string, el .join es para unir los
            elementos del array con una coma y un espacio*/}
            {poderes.join(', ')}

        </>
    )

}
