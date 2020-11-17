import React from "react";
import "../css/product.css";
import { useStateValue } from "./StateProvider";

export default function Product({ id, title, image, price, rating, alt }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("this is the basket >>> ", basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        alt: alt,
      },
    });
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{truncate(title, 35)}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p id={title} key={i}>
                🌟
              </p>
            ))}
          <br />
        </div>
      </div>
      <div className="image__container">
        <br />
        <img src={image} alt={alt} />
      </div>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}
