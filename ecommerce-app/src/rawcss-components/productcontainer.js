import React, { useState } from "react";
import "../css/productcontainer.css";
import Product from "./product";
import "./axios";
import Modal from "./modal";
var products = JSON.parse(localStorage.getItem("myproduct"));

export default function Productcontainer() {
  var base = "https://";
  const [selectedId, setSelectedId] = useState(null);
  var filteredproducts = JSON.parse(localStorage.getItem("myfilteredproduct"));

  return (
    <div className="product__container">
      {!filteredproducts &&
        products.map((item) => (
          <Product
            key={item.productCode}
            id={item.id}
            title={item.name}
            price={item.price.current.value}
            rating={Math.floor(Math.random() * 5) + 1}
            image={`${base}${item.imageUrl}`}
            alt={item.name}
            setSelectedId={setSelectedId}
          />
        ))}

      {filteredproducts &&
        filteredproducts.map((item) => (
          <Product
            key={item.productCode}
            id={item.id}
            title={item.name}
            price={item.price.current.value}
            rating={Math.floor(Math.random() * 5) + 1}
            image={`${base}${item.imageUrl}`}
            alt={item.name}
            setSelectedId={setSelectedId}
          />
        ))}

      {selectedId && (
        <Modal selectedId={selectedId} setSelectedId={setSelectedId} />
      )}
    </div>
  );
}
