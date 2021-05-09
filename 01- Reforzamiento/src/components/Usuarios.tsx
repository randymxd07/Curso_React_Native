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
            // console.log(resp.data.data);
            setUsuarios(resp.data.data);
        })

        // El .catch es por si algo nos sale mal a la hora de llamar la API //
        .catch(console.log);
    
    }, [])

    // Me creo una nueva función de tipo flecha para mostrar los datos del tbody //
    const renderItem = ({id, first_name, last_name, email, avatar}: Usuario) => {

        return (

            // NOTA: el key tiene que ser un string para eso usamos el .toString//
            <tr key={id.toString()}>
                <td>
                    <img src={avatar} alt={first_name} style={{width: 35, borderRadius: 100}} />
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        
        )

    }

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
                    {
                        // usuarios.map es para imprimir todo lo que tenga usuarios con la funcion renderItem//
                        usuarios.map(renderItem)
                    }
                </tbody>
            </table>

            <button className="btn btn-primary">
                Siguientes
            </button>
        
        </>
    )
}
