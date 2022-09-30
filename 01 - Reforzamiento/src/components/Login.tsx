//El useReducer es una alternativa al useState //

// Importo el useReducer y el useEffect //
import { useEffect, useReducer } from "react";
import { type } from 'os';

// Creo una interface //
interface AuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;
}

// Defino como quiero que luzca el estado inicial //
const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: '',
}

// Nos creamos otro tipo para manejar el payload del tipo login del AuthAction //
type LoginPayload = {
    username: string;
    nombre: string;
}

// Vamos a manejar las acciones como un tipo propiamente de TypeScript //
/* El AuthAction tendrá dos tipos el logout o el login, el login tiene
que recibir el payload para eso creamos el tipo LoginPayload para no tener
aglomerados tantas cosas despues de los dos puntos */
type AuthAction = {type: 'logout'} | {type: 'login', payload: LoginPayload};

/* Un reducer es una función que tiene ese nombre Reducer en algún lado 
un reducer tiene que tener par de argumentos el state y la action
el state es de tipo AuthState, el authReducer tiene que regresar algo
de tipo AuthState osea que tenga validando, token, username y nombre*/
const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    // Vamos a evaluar el action para esto usamos el .type //
    switch (action.type) {

        // En caso de que sea de tipo logout //
        case 'logout':

            // Cuando llame una acción de tipo logout ejecuto o limpio lo siguiente //
            return {
                validando: false,
                token: null,
                nombre: '',
                username: ''
            }
        
        // En caso de que sea de tipo login //
        case 'login':

            /* Desestructuramos lo que viene del action.payload asi no
            tenemos que poner action.payload allá abajo */
            const {nombre, username} = action.payload;

            // Tengo que retornar un nuevo state, NOTA: el token es inventado // 
            return {
                validando: false,
                token: 'ABC123',
                nombre,
                username
            }
    
        // Default: caso contrario, retorno el estato tal y como está //
        default:
        return state;

    }

}

export const Login = () => {

    // Hago el useReducer, no se va a necesitar el init//
    /* Si quiero puedo quitar el state y poner entre {} el validando, 
    asi no tengo que poner el state.validando, hago lo mismo con el token,
    hago lo mismo con el nombre*/
    const [{validando, token, nombre}, dispatch] = useReducer(authReducer, initialState)

    /* Cuando pase un segundo y medio quiero disparar la accion 
    para eso se utiliza el useEffect*/
    useEffect(() => {

        setTimeout(() => {
            
            // Hago el dispatch de una acción, está última tiene que ser de tipo AuthAction //
            dispatch({type: 'logout'});

        }, 1500); //1500 es un segundo y medio

    }, []) 
    /* Si pusieramos una dependencia dentro de este array ejemplo el state, 
    cada vez que ese elemento state cambiara entonces se va a volver a disparar
    el useEffect*/

    // Vamos a disparar la acción para el login, hacemos una función de tipo flecha //
    const login = () => {

        // Llamamos el dispatch con la acción que vayamos a realizar //
        dispatch({

            type: 'login', 

            // Este es el payload que se va a mandar al reducer //
            payload: {
                nombre: 'Randy',
                username: 'randymxd06'
            }

        })

    }

    // Vamos a disparar la acción para el logout, hacemos una función de tipo flecha //
    const logout = () => {

        // Llamamos el dispatch con la acción que vayamos a realizar //
        dispatch({type: 'logout'})

    }

    // Pregunto si estoy validando //
    if(validando){
        
        // Retorno un JSX que diga que estoy validando//
        return (
            <>
                <h3>Login</h3>

                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )

    }

    return (
        <>
            <h3>Login</h3>

            {/* Si tiene token estoy autenticado, si no tiene entonces no estoy autenticado */}
            {
                // Preguntamos si el token tiene algo //
                (token) ? <div className="alert alert-success">Autenticado como: {nombre}</div>
                // Caso contrario el token no tiene nada //
                : <div className="alert alert-danger">No autenticado</div>
            }

            {/*  */}
            {
                // Si el token existe entonces muestro el botón de logout //
                (token) ? (

                    <button className="btn btn-danger" onClick={logout}>
                        Logout
                    </button>

                // Caso contrario el token no existe entonces muestro el botón de login //
                ) : (

                    // Le ponemos el evento onClick al botón y le pasamos la función de tipo flecha login //
                    <button className="btn btn-primary" onClick={login}>
                        Login
                    </button>

                )
            }

            

        </>
    )
}
