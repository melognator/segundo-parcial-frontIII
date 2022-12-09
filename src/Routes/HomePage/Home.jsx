import React from 'react'
import Dentists from '../../Components/Dentists'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = ({ dentists }) => {

    return (
        <>
            <h1>Home</h1>
            <div className='container card-grid'>
                <Dentists dentists={ dentists } />
            </div>
        </>
    )
}

export default Home