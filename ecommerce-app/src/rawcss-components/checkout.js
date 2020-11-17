import React from "react";
import "../css/checkout.css";
import Subtotal from "./subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

export default function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  const removeAllFromBasket = () => {
    dispatch({
      type: "EMPTY_BASKET",
    });
  };

  return (
    <>
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />

          <div className="cart__container">
            {basket.length ? (
              <>
                <h2 className="checkout__title">Your shopping Basket</h2>
                <button onClick={removeAllFromBasket}>Clear Basket</button>
              </>
            ) : (
              <>
                <h2 className="checkout__title">Your shopping Basket</h2>
                <p className="checkout__subtitle">
                  Your cart is Empty!!! Please browse and add products to your
                  cart!!!
                </p>
              </>
            )}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </>
  );
}
