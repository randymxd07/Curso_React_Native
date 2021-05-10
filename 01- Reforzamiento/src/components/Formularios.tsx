// Importo el useState //
import { useState } from "react"

export const Formularios = () => {

    // Hago un useState //
    const [formulario, setFormulario] = useState({
        email: 'test@test.com',
        password: '123456'
    });

    // Hago una funcion de tipo flecha para llamar al setFormulario //
    const onChange = (value: string, campo: string) => {
        setFormulario({

            // Desestructuro el formulario //
            ...formulario,

            // Computo el campo //
            [campo]: value

        });
    }

    return (
        <>
            <h3>Formularios</h3>

            <input type="text" className="form-control" placeholder="Email" value={formulario.email} onChange={({target}) => onChange( target.value, 'email')} />

            <input type="text" className="form-control mt-2 mb-2" placeholder="Password" value={formulario.password} onChange={({target}) => onChange( target.value, 'password')}/>

            <code>
                <pre>
                    {
                        JSON.stringify(formulario, null, 2)
                    }
                </pre>
            </code>

        </>
    )
}
