import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (Props) => {
  return (
    <div className="item">
      <Link to={`/product/${Props.id}`}>
        {" "}
        <img  onClick={window.scrollTo(0,0)} src={Props.image}  alt=""></img>
      </Link>

      <p>{Props.name}</p>

      <div className="item-prices">
        <div className="item-price-new">${Props.new_price}</div>

        <div className="item-price-old">${Props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
