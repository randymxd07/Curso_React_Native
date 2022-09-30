// Importo el useState //
import { useState } from "react";

export const useForm = <T extends Object> (formulario: T) => {

    // Hago un useState //
    const [state, setState] = useState(formulario);

    // Hago una funcion de tipo flecha para llamar al setFormulario //
    // Tengo que decirle que el campo es una llave de T //
    const onChange = (value: string, campo: keyof T) => {

        // Pongo el setState //
        setState({

            // Desestructuro el formulario //
            ...state,

            // Computo el campo //
            [campo]: value

        });

    }

    return {
        ...state,
        formulario:     state,
        onChange
    }

}
