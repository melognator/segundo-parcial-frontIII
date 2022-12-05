import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Home from './Home'

const HomeContainer = () => {

    const [dentistas, setDentistas] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(respuesta => {
            // console.log(respuesta)
            setDentistas(respuesta.data)
        })
        .catch(err => {
            console.log("Promesa rechazada: ")
            console.log(err)
        })
    }, [])

    return <Home dentistas={dentistas} />
}

export default HomeContainer