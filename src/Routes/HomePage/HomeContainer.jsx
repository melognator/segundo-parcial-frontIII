import React from 'react'
import { useContext } from 'react'
import { ContextGlobal } from '../../Components/utils/global.context'
import Home from './Home'

const HomeContainer = () => {

    const { datos } = useContext(ContextGlobal); 

    return <Home dentistas={datos.dentists} />
}

export default HomeContainer