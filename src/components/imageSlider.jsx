import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const previousImage = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <React.Fragment>
      <div
        style={{ backgroundImage: `url(${images[index]})` }}
        className={`flex flex-col h-48 rounded-xl bg-cover bg-no-repeat`}
      >
        <div className="flex flex-row items-center justify-between grow">
          <FontAwesomeIcon
            className="w-5 h-5 p-1 bg-white opacity-75 rounded-full mx-1 cursor-pointer"
            onClick={previousImage}
            icon={faChevronLeft}
          />
          <FontAwesomeIcon
            className="w-5 h-5 p-1 bg-white opacity-75 rounded-full mx-1 cursor-pointer"
            onClick={nextImage}
            icon={faChevronRight}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ImageSlider;
