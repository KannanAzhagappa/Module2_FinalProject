import React from "react";
import "../css/top.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

export default function Top() {
  const [{ basket }] = useStateValue();
  var searchterm;

  const handleclick = (e) => {
    searchterm = e.target.value;
    var products = JSON.parse(localStorage.getItem("myproduct"));
    console.log(products);
    var filteredproducts = products.filter(function (element) {
      return element.name.includes(searchterm);
    });
    console.log(filteredproducts);
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
          <span className="header__optionLineTwo">Cart</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
