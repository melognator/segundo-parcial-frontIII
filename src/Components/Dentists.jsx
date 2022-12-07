import React from 'react'
import Card from './Card';

const Dentists = ({dentists}) => {

    const renderizarDentistas = () => dentists ? (
        dentists.map(dentist => (
            <Card {...dentist} />
        ))
    ) : (
        <h3>No dentists found...</h3>
    )

    return renderizarDentistas();
}

export default Dentists