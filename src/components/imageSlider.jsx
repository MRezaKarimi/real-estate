import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

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

  console.log(images[index]);

  return (
    <React.Fragment>
      <div
        style={{ backgroundImage: `url(${images[index]})` }}
        className={`flex flex-col h-48 rounded-lg bg-cover bg-no-repeat`}
      >
        <div className="flex flex-row items-center grow">
          <ChevronLeftIcon
            className="w-7 h-7 p-1 bg-white opacity-75 rounded-full mx-1"
            onClick={previousImage}
          />
          <div className="grow"></div>
          <ChevronRightIcon
            className="w-7 h-7 p-1 bg-white opacity-75 rounded-full mx-1"
            onClick={nextImage}
          />
        </div>
      </div>

      {/* <div className="flex flex-row justify-center">.....</div> */}
    </React.Fragment>
  );
};

export default ImageSlider;
