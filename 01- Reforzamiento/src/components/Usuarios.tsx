// Importamos el useEffect y el useState //
import { useEffect, useState } from "react";

// Importamos el reqResApi //
import { reqResApi } from '../api/reqRes';

// Importo la interface ReqResListado y Usuario //
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {

    // Hago un useState y el state lo reemplazo por usuario y initialState lo reemplazo por un array [] vacío //
    // Le digo que el useState es de tipo Usuario[] //
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    /* Cuando se ejecute este useEffect, osea cuando el componente es montado,
    entonces aquí se va a utilizar el reqResApi*/
    useEffect(() => {

        // Llamado al API, entre <> despues del get le ponemos la interface ReqResListado //
        reqResApi.get<ReqResListado>('/users')

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
