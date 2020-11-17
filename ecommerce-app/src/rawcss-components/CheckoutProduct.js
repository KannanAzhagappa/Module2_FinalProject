import React from "react";
import "../css/CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log(basket);

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <>
      <div className="checkoutProduct_container">
        <div className="checkoutProduct">
          <img className="checkoutProduct__image" src={image} alt={id} />

          <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price">
              <small>$</small>
              <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p>🌟</p>
                ))}
            </div>
            <button onClick={removeFromBasket}>Remove from Basket</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutProduct;
