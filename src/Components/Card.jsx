import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id, handleFav, isFaved }) => {

    return (

        <div className="dentist-card">
            <img src="/images/doctor.jpg" alt={`${name}`} />
            <div className="info">
                {/* eslint-disable-next-line */}
                <Link role="dentist-name" to={`/dentist/${id}`} >{name}</Link>
                {/* eslint-disable-next-line */}
                <p role="dentist-username">{username}</p>
            </div>
            <button onClick={() => handleFav({ name, username, id })} className="favButton">{isFaved(id) ? "❌" : "⭐"}</button>
        </div>
    );
};

export default Card;
