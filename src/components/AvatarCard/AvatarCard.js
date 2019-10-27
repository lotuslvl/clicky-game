import React from "react";
import "./AvatarCard.css";

const AvatarCard = props => (
  <div 
    className="card" 
    value={props.id} 
    onClick={() => props.markCharacter (props.id)}
  >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default AvatarCard;