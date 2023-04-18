import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import "./Preview.css";

const Preview = ({ allImg, selectedImgIndex, onClose }) => {
  const [index, setIndex] = useState(selectedImgIndex);

  function decrementIndex() {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    } else {
      setIndex((prevIndex) => (prevIndex = allImg.length - 1));
    }
  }

  function inkrementIndex() {
    if (index < allImg.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      setIndex((prevIndex) => (prevIndex = 0));
    }
  }

  return (
    <div className="NavMain">
      <div className="backdrop"></div>
      <Navigation name="Previous" handleClick={decrementIndex} />
      <div>
        <img
          src={allImg[index]}
          alt="img"
          className="active"
          onClick={onClose}
        />
      </div>
      <Navigation name="Next" handleClick={inkrementIndex} />
      <Navigation name="X" handleClick={onClose} />
    </div>
  );
};

export default Preview;
