import React from "react";
import "../css/top.css";
import SearchIcon from "@material-ui/icons/Search";
import ImageIcon from "@material-ui/icons/Image";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import useFirestore from "../hooks/useFirestore";

export default function Top() {
  const [{ basket }] = useStateValue();
  const { docs } = useFirestore("images");

  const handleclick = (e) => {
    e.preventDefault();
    var products = JSON.parse(localStorage.getItem("myproduct"));
    var filteredproducts = products.filter(function (element) {
      return element.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    localStorage.setItem("myfilteredproduct", JSON.stringify(filteredproducts));
  };

  return (
    <div className="header">
      <div id="searchterm" className="header__search">
        <input
          className="header__searchInput"
          placeholder="Enter Search here!"
          type="text"
          onChange={handleclick}
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Gallery</span>
        </div>
      </div>

      <Link to="/gallery">
        <div className="header__optionImage">
          <ImageIcon />
          <span className="header__optionLineTwo header__Count">
            {docs?.length}
          </span>
        </div>
      </Link>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Cart</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__Count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
