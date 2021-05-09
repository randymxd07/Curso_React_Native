// Importamos el useEffect //
import { useEffect } from "react";

// Importamos el reqResApi //
import { reqResApi } from '../api/reqRes';

export const Usuarios = () => {

    /* Cuando se ejecute este useEffect, osea cuando el componente es montado,
    entonces aquí se va a utilizar el reqResApi*/
    useEffect(() => {

        // Llamado al API //
        reqResApi.get('/users')

        // El .then nos da la respuesta //
        // NOTA: el status: 200 significa que se hizo correctamente, esto se ve en la consola //
        .then(resp => {
            console.log(resp.data.data);
        })

        // El .catch es por si algo nos sale mal a la hora de llamar la API //
        .catch(console.log);
    
    }, [])

    return (
        <>
            <h3>Usuarios:</h3>

            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        
        </>
    )
}
