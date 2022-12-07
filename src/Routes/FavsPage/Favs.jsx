import React, { useContext } from "react";
import Dentists from "../../Components/Dentists";
import { ContextGlobal } from "../../Components/utils/global.context";

const Favs = () => {

    const { datos } = useContext(ContextGlobal)

    const tema = datos.theme

    return (
        <main className={tema}>
            <h1>Dentists Favs</h1>
            <div className="card-grid">
                <Dentists dentists={[]} />
            </div>
        </main>
    );
};

export default Favs;
