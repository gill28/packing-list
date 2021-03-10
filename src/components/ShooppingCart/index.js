import React, { useState, useEffect } from "react";
import Input from "../Input/index";
import Button from "../Button/index";
import ProductLine from "../Products/ProductsLine/index";
import { v4 as uuidv4 } from "uuid";

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [packedItems, setPackedItems] = useState([]);
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    setProducts([
      ...products,
      {
        id: uuidv4(),
        label: productName,
        price: productPrice,
        value: value,
      },
    ]);
  };

  const removeItem = (id) => {
    const newList = products.filter((item) => item.id !== id);
    setProducts(newList);
  };
  const removePackedItem = (id) => {
    const newList = packedItems.filter((item) => item.id !== id);
    setPackedItems(newList);
  };
  const sum = products.reduce((acc, product) => {
    return acc + product.price * 1;
  }, 0);

  return (
    <>
      <form>
        <Input
          value={productName}
          handleChange={(e) => setProductName(e.target.value)}
          width="150px"
          placeholder="Products"
        />
        <Input
          value={productPrice}
          handleChange={(e) => setProductPrice(e.target.value)}
          width="150px"
          placeholder="Price"
        />
        <Button title="Add" handleAdd={handleAdd} />
      </form>
      <div className="unpacked">
        <h2>Unpacked Items ({products.length})</h2>
        {/* Filter Products */}
        <Input
          type="text"
          handleChange={(e) => setValue(e.target.value)}
          placeholder="Filter inside the unpacked items"
        />
        {products
          .filter((item) => {
            if (!value) return true;
            if (item.label.includes(value)) {
              return true;
            }
            return false;
          })
          .map((product) => {
            return (
              <ProductLine
                key={product.id}
                label={product.label}
                price={product.price}
                onRemove={() => removeItem(product.id)}
                onChange={() => checked.toggle(checked)}
                value={checked}
              />
            );
          })}
      </div>
      <div className="packed">
        <h2>Packed Items ({packedItems.length})</h2>
        <Input
          type="text"
          handleChange={(e) => setValue(e.target.value)}
          placeholder="Filter inside the unpacked items"
        />
        {packedItems
          .filter((item) => {
            if (!value) return true;
            if (item.label.includes(value)) {
              return true;
            }
            return false;
          })
          .map((product) => {
            return (
              <ProductLine
                key={product.id}
                label={product.label}
                price={product.price}
                onRemove={() => removePackedItem(product.id)}
              />
            );
          })}
      </div>
      <div>
        <button>Mark all as unpacked</button>
      </div>
      <div>
        <span>Total: {sum} </span>
      </div>
    </>
  );
};

export default ShoppingCart;
