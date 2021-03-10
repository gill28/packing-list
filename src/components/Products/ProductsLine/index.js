import React from "react";

const ProductLine = ({ id, label, price, changeStatus, onRemove, value }) => {
  return (
    <>
      <div className="product">
        <ul>
          <li key={id}>
            <input type="checkbox" onChange={changeStatus} value={false} />
          </li>
          <li>{label}</li>
          <li>${price}</li>
          <li>
            <button onClick={onRemove}>X</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProductLine;
