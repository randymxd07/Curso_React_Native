export const Funciones = () => {

    /* Hago una función de flecha, la flecha después de los parentesis significa lo que
    retorna la función Si dejamos la funcion sin nada retorna void osea undefined si
    ponemos numeros retorna number, texto string, verdadero o falso retorna boolean*/

    // Le digo que la funcion sumar tiene que retornar un number //
    // const sumar = (): number => {
    //     // return 2 + 2;
    //     // return true;
    //     // return 'Hola';
    //     return 1 + 2;
    // }

    // Funcion sumar con parametros //
    const sumar = ( a: number, b: number ): number => {
        return a + b;
    }

    return (
        <>
            
            <h3>Funciones</h3>

            <span>El resultado es: {sumar(10, 5)}</span>

        </>
    )
}
