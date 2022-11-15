import React from "react";
import { Link } from "react-router-dom";

const CityCard = (props) => {
  return (
    <div className="col cities text-center">
      <Link to="/">
        <img src={props.src} alt={props.name} />
        <p className="s2-14-r p-0 city-name">{props.name}</p>
        <p className="o-10-r no-college">{props.number} Colleges</p>
      </Link>
    </div>
  );
};

export default CityCard;
