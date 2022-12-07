import React from 'react'
import { addFavFail, addFavSuccess } from './Alerts/Alert';
import Card from './Card';

const Dentists = ({dentists}) => {

    const handleFav = (dentist) => {
        let prevFavs = JSON.parse(localStorage.getItem("favs"))
        prevFavs = prevFavs ? prevFavs : []
        if (prevFavs.filter(d => d.id === dentist.id) < 1) {
            prevFavs.push(dentist)
            addFavSuccess(dentist.name)
        } else {
            addFavFail(dentist.name)
        }
        localStorage.setItem("favs", JSON.stringify(prevFavs));
    }

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