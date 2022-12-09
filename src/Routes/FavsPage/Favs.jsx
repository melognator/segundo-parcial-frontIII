import React from "react";
import Dentists from "../../Components/Dentists";

const Favs = ({ favDentists }) => {

    return (
        <>
            <h1>Dentists Favs</h1>
            <div className="container card-grid">
                <Dentists dentists={favDentists} />
            </div>
        </>
    );
};

export default Favs;
