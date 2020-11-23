import React from "react";
import "../css/product.css";
import { useStateValue } from "./StateProvider";
import VisibilityIcon from "@material-ui/icons/Visibility";

export default function Product({
  id,
  title,
  image,
  price,
  rating,
  alt,
  setSelectedId,
}) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("this is the basket >>> ", basket);
  var number = 0;

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

  const setHiddenClass = (rating) => {
    if (rating <= 3) {
      return "hidden";
    }
  };

  return (
    <>
      <div className="product">
        <div className={`ribbon ${setHiddenClass(rating)}`}>
          <span className="ribbon1">
            <span>Popular</span>
          </span>
        </div>
        <div className="product__info">
          <p>{truncate(title, 50)}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={number + i}>🌟</p>
              ))}
            <br />
          </div>
        </div>
        <div className="image__container">
          <br />
          <img src={image} alt={alt} />
        </div>
        <div className="control__holder">
          <div className="view left" onClick={() => setSelectedId(id)}>
            <VisibilityIcon />
          </div>
          <div className="right">
            <button onClick={addToBasket}>Add to Basket</button>
          </div>
        </div>
      </div>
    </>
  );
}
