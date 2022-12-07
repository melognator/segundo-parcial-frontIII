import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id, handleFav }) => {


  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (

    <div className="dentist-card">
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
            <img src="/images/doctor.jpg" alt={`Picture of ${name}`} />
        <div className="info">
            <Link to={`/dentist/${id}`} >{name}</Link>
            <p>{username}</p>
        </div>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={() => handleFav({name, username, id})} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
