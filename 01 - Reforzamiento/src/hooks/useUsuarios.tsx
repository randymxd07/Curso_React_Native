
// Importo useState, useRef, useEffect //
import { useEffect, useRef, useState } from "react";

// Importo reqResAPi //
import { reqResApi } from "../api/reqRes";

// Importo Usuario, ReqResListado //
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const useUsuarios = () => {

    // Hago un useState y el state lo reemplazo por usuario y initialState lo reemplazo por un array [] vacío //
    // Le digo que el useState es de tipo Usuario[] //
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    // Hago un useRef que comienza en la pagina 1 //
    const paginaRef = useRef(1);

    /* Cuando se ejecute este useEffect, osea cuando el componente es montado,
    entonces aquí se va a utilizar la funcion cargarUsuarios */
    useEffect(() => {

        // Llamo la funcion cargarUsuarios //
        cargarUsuarios();
        
    }, [])

    // Funcion para cargar los usuarios de la API //
    const cargarUsuarios = async() => {

        // Llamado al API, entre <> despues del get le ponemos la interface ReqResListado //
        const resp = await reqResApi.get<ReqResListado>('/users', {
            params: {
                /* Para mandar el valor pongo el .current, este ultimo es la referencia 
                al valor que contiene el objeto paginaRef */
                page: paginaRef.current
            }
        })

        // Pregunto si resp.data.data es mayor a 0, si lo es entonces //
        if(resp.data.data.length > 0){

            // Pongo los usuarios //
            setUsuarios(resp.data.data);

        // En caso de que no haya nada //
        } else {

            // Hago el decremento si la pagina no existe //
            paginaRef.current --;

            // Mando un mensaje //
            alert("No hay mas registros");
            
        }

        // El .then nos da la respuesta //
        // NOTA: el status: 200 significa que se hizo correctamente, esto se ve en la consola //
        // .then(resp => {
        //     // console.log(resp.data.data);
        //     setUsuarios(resp.data.data);
        // })

        // El .catch es por si algo nos sale mal a la hora de llamar la API //
        // .catch(console.log);

    }

    const paginaSiguiente = () => {

        // Hago el incremento //
        paginaRef.current ++;

        // Cargo los usuarios //
        cargarUsuarios();

    }
    
    const paginaAnterior = () => {

        // Pregunro si hay mas de una página //
        if(paginaRef.current > 1){

            // Hago el decremento //
            paginaRef.current --;

            // Cargo la página //
            cargarUsuarios();
        }
    }

    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior
    }

}
