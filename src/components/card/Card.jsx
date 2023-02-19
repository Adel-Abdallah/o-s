import React, { useState } from "react";
import "./Card.css";

function Card(props) {
  const { imgSrc, price, colorVariants, title } = props;

  const [activeColor, setActiveColor] = useState(colorVariants[0]);

  return (
    <div className="card">
      <img src={imgSrc} alt="Item" />
      <div  className="card-body">
      <div>
        {colorVariants.map((color, index) => (
          <button
            key={index}
            className="variant-button"
            style={{ backgroundColor: color, border: activeColor === color ? "2px solid black" : "" }}
            onClick={() => setActiveColor(color)}
          >
            &nbsp;
          </button>
        ))}
      </div>
      <p>{title}</p>
      <p>Price: {price}</p>
      </div>
      
    </div>
  );
}

export default Card;
