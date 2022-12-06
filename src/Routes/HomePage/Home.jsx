import React, { useContext } from 'react'
import Card from '../../Components/Card'
import { ContextGlobal } from '../../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = ({ dentistas }) => {

    const {datos} = useContext(ContextGlobal)

    const tema = datos.theme

    const renderizarDentistas = () => dentistas ? (
        dentistas.map(dentista => (
            <Card {...dentista} />
        ))
    ) : (
        <h3>No dentists found...</h3>
    )

    return (
        <main className={tema} >
            <h1>Home</h1>
            <div className='card-grid'>
                {renderizarDentistas()}
            </div>
        </main>
    )
}

export default Home