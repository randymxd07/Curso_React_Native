//rafc: nos crea una estructura de nuestro componente//

//Podemos quitar el import porque con las últimas actualizaciones no es necesario tenerlo
//import React from 'react';

// Las interfaces sirven para ponerle reglas de validacion a sus objetos //

// Definimos una interface para declarar de qué tipo seran los miembros de mi objeto persona //
interface Persona {

    nombreCompleto: string;
    edad: number;

    // No se van a crear objetos dentro de la interfaz //
    // direccion: {
    //     pais: string,
    //     casaNo: number
    // }

    // Le asigno la interface Direccion //
    direccion: Direccion;

}

// Defino una interface para el objeto direccion // 
interface Direccion {
    
    pais: string;
    casaNo: number;

}

// Las interfaces no sirven para crear instancias para esto tenemos que crear clases, ejemplo:
// const persona = new Persona();

export const ObjetosLiterales = () => {

    // Objeto persona //
    const persona: Persona = {
        // nombre: 'Randy',
        nombreCompleto: 'Randy',
        edad: 21,
        direccion: {
            pais: 'República Dominicana',
            casaNo: 18
        }
    }

    // persona.nombreCompleto = 'Randy R. Martínez Cepeda';

    return (
        <>

            {/* Pongo un título */}
            <h3>Objetos Literales</h3>

            {/* {persona} Esto no se puede hacer */}

            {/* JSON.stringify transforma un objeto a su representación JSON como si fuera un string*/}
            {/* {JSON.stringify(persona)} */}

            {/* Ponemos el codigo de arriba dentro de las siguientes etiquetas */}
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)} {
                    /* El null es el replacer osea es un array de los campos que tenemos,
                    el 2 es el espaciado */}
                </pre>
            </code>


        </>
    )

}
