import React, { useState } from "react";
import "../css/productcontainer.css";
import Product from "./product";
import "./axios";
import Modal from "./modal";

export default function Productcontainer() {
  var base = "https://";
  var myproduct = JSON.parse(localStorage.getItem("myproduct"));
  var myfilteredproduct = JSON.parse(localStorage.getItem("myfilteredproduct"));
  const [selectedId, setSelectedId] = useState(null);
  const [products, setProduct] = useState(myproduct);

  const handleclick = () => {
    if (myfilteredproduct) {
      setProduct(myfilteredproduct);
    } else {
      setProduct(myproduct);
    }
  };

  return (
    <div className="product__container" onClick={handleclick}>
      {products.map((item) => (
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
