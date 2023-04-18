import { useState } from "react";
import Preview from "../Preview/Preview";
import "./Gallery.css";

const Gallery = ({ collection }) => {
  const [isShown, setIsShown] = useState(false);
  const [selectedImgIndex, setSelectedImgIndex] = useState(false);

  const showSomething = (index) => {
    setSelectedImgIndex(index);
    setIsShown(true);
  };

  return (
    <div className="gallery-wraper">
      {collection.map((el, index) => (
        <img
          src={el}
          key={index}
          alt={el}
          className="cards"
          onClick={() => showSomething(index)}
        />
      ))}
      {isShown && (
        <Preview
          allImg={collection}
          selectedImgIndex={selectedImgIndex}
          onClose={() => setIsShown(false)}
        />
      )}
    </div>
  );
};

export default Gallery;
