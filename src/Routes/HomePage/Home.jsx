import React, { useContext } from 'react'
import { ContextGlobal } from '../../Components/utils/global.context'
import Dentists from '../../Components/Dentists'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

    const {datos} = useContext(ContextGlobal)

    const tema = datos.theme

    return (
        <main className={tema} >
            <h1>Home</h1>
            <div className='card-grid'>
                <Dentists dentists={datos.dentists} />
            </div>
        </main>
    )
}

export default Home