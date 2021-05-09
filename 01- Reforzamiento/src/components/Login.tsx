//El useReducer es una alternativa al useState //

// Importo el useReducer y el useEffect //
import { useEffect, useReducer } from "react";

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

// Vamos a manejar las acciones como un tipo propiamente de TypeScript //
type AuthAction = {type: 'logout'}

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
    
        // Default: caso contrario, retorno el estato tal y como está //
        default:
        return state;

    }

}

export const Login = () => {

    // Hago el useReducer, no se va a necesitar el init//
    // Si quiero puedo quitar el state y poner entre {} el validando, asi no tengo que poner el state.validando //
    const [{validando}, dispatch] = useReducer(authReducer, initialState)

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

            <div className="alert alert-danger">
                No autenticado
            </div>
            
            <div className="alert alert-success">
                Autenticado
            </div>

            <button className="btn btn-primary">
                Login
            </button>

            <button className="btn btn-danger">
                Logout
            </button>

        </>
    )
}
