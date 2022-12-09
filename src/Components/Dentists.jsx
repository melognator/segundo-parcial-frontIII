import React, { useContext } from 'react'
import Card from './Card';
import { ContextGlobal } from './utils/global.context';

const Dentists = ({dentists}) => {

    const { handleFav, isFaved } = useContext(ContextGlobal)

    // console.log(isFaved)

    const renderizarDentistas = () => dentists?.length > 0 ? (
        dentists.map(dentist => (
            <Card handleFav={handleFav} isFaved={isFaved} key={dentist.id} {...dentist} />
        ))
    ) : (
        <p>No dentists found...</p>
    )

    return renderizarDentistas();
}

export default Dentists