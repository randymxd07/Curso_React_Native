//rafc: nos crea una estructura de nuestro componente//

//Podemos quitar el import porque con las últimas actualizaciones no es necesario tenerlo
//import React from 'react'
import { TiposBasicos } from './typescript/TiposBasicos';

export const App = () => {
  return (
    <div className="mt-2">

      <h1>Introduccion a TS - React</h1>
      
      <hr/>

      {/* Importamos el componente TiposBasicos */}
      <TiposBasicos />

    </div>
  )
}

export default App;