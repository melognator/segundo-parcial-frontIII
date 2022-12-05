import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Detail from './Detail'

const DetailContainer = () => {

    const [dentista, setDentista] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(respuesta => {
            // console.log(respuesta)
            setDentista(respuesta.data)
        })
        .catch(err => {
            console.log("Promesa rechazada: ")
            console.log(err)
        })
    }, [])

    return <Detail {...dentista}  />
}

export default DetailContainer