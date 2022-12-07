import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Favs from './Favs'

const FavsContainer = () => {

    const [dentists, setDentists] = useState();

    useEffect(() => {
        setDentists(JSON.parse(localStorage.getItem("favs")))
    }, [])

    return <Favs dentists={dentists} />
}

export default FavsContainer