import axios from 'axios'
import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../../Components/utils/global.context'
import Detail from './Detail'

const DetailContainer = () => {

    const [dentista, setDentista] = useState({})
    const { id } = useParams();

    const { datos } = useContext(ContextGlobal)
    const tema = datos.theme


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

    return <Detail tema={tema} {...dentista}  />
}

export default DetailContainer