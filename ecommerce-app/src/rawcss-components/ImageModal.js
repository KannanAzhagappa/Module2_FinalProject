import React from "react";
import { motion } from "framer-motion";

const ImageModal = ({ setSelectedImg, selectedImg }) => {
  const handleClick = (e) => {
    setSelectedImg(null);
  };

  return (
    <>
      <div className="modalimage" onClick={handleClick}>
        <div>
          <motion.img
            src={selectedImg}
            alt="enlarged pic"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
          />
        </div>
      </div>
    </>
  );
};

export default ImageModal;
