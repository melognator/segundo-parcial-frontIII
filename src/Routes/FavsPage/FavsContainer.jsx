import React, { useContext } from 'react'
import { ContextGlobal } from '../../Components/utils/global.context'
import Favs from './Favs'

const FavsContainer = () => {
    const { datos } = useContext(ContextGlobal)
    return <Favs favDentists={ datos.favDentists } />
}

export default FavsContainer