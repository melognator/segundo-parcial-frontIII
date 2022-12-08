import React, { useContext } from 'react'
import Card from './Card';
import { ContextGlobal } from './utils/global.context';

const Dentists = ({dentists}) => {

    const { handleFav } = useContext(ContextGlobal)

    const renderizarDentistas = () => dentists?.length > 0 ? (
        dentists.map(dentist => (
            <Card handleFav={handleFav} key={dentist.id} {...dentist} />
        ))
    ) : (
        <p>No dentists found...</p>
    )

    return renderizarDentistas();
}

export default Dentists