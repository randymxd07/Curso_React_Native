// Importo los axios //
import axios from "axios";

// Creo el export y lo llamo reqResApi //
export const reqResApi = axios.create({

    /* Defino la base a la cual voy a hacer la petición, 
    lo podemos tomar del postman o de la api, pero quitamos 
    el /users?page=2 */
    baseURL: 'https://reqres.in/api'

});