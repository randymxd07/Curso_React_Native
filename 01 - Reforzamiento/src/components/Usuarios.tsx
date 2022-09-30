// Importo la interface Usuario //
import { Usuario } from '../interfaces/reqRes';

// Importo useUsuarios //
import { useUsuarios } from '../hooks/useUsuarios';

export const Usuarios = () => {

    // Voy a desestructurar lo del hook useUsuarios //
    const {usuarios, paginaSiguiente, paginaAnterior} = useUsuarios();

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

            <button className="btn btn-primary" onClick={paginaAnterior}>
                Anterior
            </button>

            &nbsp;
            
            <button className="btn btn-primary" onClick={paginaSiguiente}>
                Siguiente
            </button>
        
        </>
    )
}
