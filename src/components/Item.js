import React, { useState } from "react";

function Item({ name, category }) {
  const [bClick, setClick] = useState(false)
  const toggleClass = () => {
setClick(!bClick)
  }
  return (
    <li className={bClick ? "in-cart" : null}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick = {toggleClass} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
