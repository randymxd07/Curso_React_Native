//rafc: nos crea una estructura de nuestro componente//

// Se importa el componente Contador automaticamente//
import { Contador } from "./components/Contador";

// Se importa el componente Funciones automaticamente//
// import { Funciones } from "./typescript/Funciones";

// Se importa el componente ObjetosLiterales automaticamente//
// import { ObjetosLiterales } from "./typescript/ObjetosLiterales";

//Podemos quitar el import porque con las últimas actualizaciones no es necesario tenerlo
//import React from 'react';

// Se importa el componente TiposBasicos automaticamente//
// import { TiposBasicos } from './typescript/TiposBasicos';

export const App = () => {
  return (
    <div className="mt-2">

      <h1>Introduccion a TS - React</h1>
      
      <hr/>

      {/* Importamos el componente TiposBasicos */}
      {/* <TiposBasicos /> */}

      {/* Importamos el componente ObjetosLiterales */}
      {/* <ObjetosLiterales /> */}

      {/* Importamos el componente Funciones */}
      {/* <Funciones /> */}

      {/* Importamos el componente Contador */}
      <Contador />

    </div>
  )
}

export default App;