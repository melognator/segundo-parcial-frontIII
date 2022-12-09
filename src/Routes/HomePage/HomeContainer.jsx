import axios from 'axios'
import React, { useMemo, useContext } from 'react'
import { ContextGlobal } from '../../Components/utils/global.context'
import Home from './Home'

const HomeContainer = () => {

    
    const { datos, datosDispatch } = useContext(ContextGlobal)
    useMemo(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(respuesta => {
            // console.log(respuesta)
            datosDispatch({type: "dentists", dentists: respuesta.data})
        })
        .catch(err => {
            console.log("Promesa rechazada: ")
            console.log(err)
        })
        // eslint-disable-next-line
    }, [])

    return <Home dentists={ datos.dentists } />
}

export default HomeContainer