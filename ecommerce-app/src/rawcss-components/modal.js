import React from "react";
import { motion } from "framer-motion";
import "../css/modal.css";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const Modal = ({ setSelectedId, selectedId }) => {
  var products = JSON.parse(localStorage.getItem("myproduct"));
  var base = "https://";

  var filteredArray = products.filter(function (element) {
    return element.id === selectedId;
  });

  const handleClick = (e) => {
    setSelectedId(null);
  };

  return (
    <motion.div
      className="modal__container"
      initial={{ opacity: 0, y: "-100vh" }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="close__modal" onClick={handleClick}>
        <HighlightOffIcon />
      </div>
      <div className="modal__content">
        <p className="modal__para">
          <span>Name:</span> {filteredArray[0].name}
        </p>
        <p className="modal__para">
          <span>Brand:</span> {filteredArray[0].brandName}
        </p>
        <p className="modal__para">
          <span>Price Currency:</span> {filteredArray[0].price.currency}
        </p>
        <p className="modal__para">
          <span>Amount:</span> {filteredArray[0].price.current.text}
        </p>
        <img src={`${base}${filteredArray[0].imageUrl}`} alt="enlarged pic" />
      </div>
    </motion.div>
  );
};

export default Modal;
