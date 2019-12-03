import React from "react";
import "./ShowCard.css";

const ShowCard = ({ show }) => (
  <div className="showCard">
    <img src={show.image} alt="" />
    <p>{show.name}</p>
  </div>
);

export default ShowCard;
