import React from "react";
import supeEth from "../assets/supereth.png"
export default function Card({ image, series, title, price, tag, time }) {
  return (
    <div className="card">
      <div className="card-image">
      <img src={image}  alt="super1"/>
      </div>
      <div className="card-content">
     <div className="card-heading">
     <span className="card-series">{series}</span>
     <span classN></span>
     </div>
      </div>
    </div>
  );
}
