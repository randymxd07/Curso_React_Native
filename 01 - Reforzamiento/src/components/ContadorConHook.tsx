// Importamos el hook useCounter //
import { useCounter } from '../hooks/useCounter';

export const ContadorConHook = () => {
    
    /* Acá se extrae lo que me interesa del Hook useCounter,
    aquí está toda la lógica del contador, le paso un valor 100*/
    const {valor, acumular} = useCounter(100);

    return (
        <>

            {/* <h3>Contador <small>0</small> </h3> */}

            {/* Aquí imprimo el contador */}
            <h3>Contador con hook: <small>{valor}</small> </h3>

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

