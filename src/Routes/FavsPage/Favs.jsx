import React, { useContext } from "react";
import Dentists from "../../Components/Dentists";
import { ContextGlobal } from "../../Components/utils/global.context";

const Favs = ({dentists}) => {

    const { datos } = useContext(ContextGlobal)

    return (
        <>
            <h1>Dentists Favs</h1>
            <div className="card-grid">
                <Dentists dentists={datos.favDentists} />
            </div>
        </>
    );
};

export default Favs;
