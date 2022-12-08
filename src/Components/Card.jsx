import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id, handleFav }) => {

    const { isFaved } = useContext(ContextGlobal);

    return (


        <div className="dentist-card">
            <img src="/images/doctor.jpg" alt={`${name}`} />
            <div className="info">
                <Link to={`/dentist/${id}`} >{name}</Link>
                <p>{username}</p>
            </div>
            <button onClick={() => handleFav({ name, username, id })} className="favButton">{isFaved(id) ? "❌" : "⭐"}</button>
        </div>
    );
};

export default Card;
