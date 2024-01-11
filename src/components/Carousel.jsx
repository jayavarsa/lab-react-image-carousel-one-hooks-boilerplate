import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
  let [currentindex, Setcurrentindex] = useState(0);

  function movebackard(){
    if (currentindex <= 0) {
        Setcurrentindex(images.length-1)
  }else{
    Setcurrentindex(currentindex-1)
  }
  }

  function moveforward(){
    if (currentindex == images.length -1) {
        Setcurrentindex(0)
    }else{
    Setcurrentindex(currentindex+1)
    }
  }

  return (
    <>
      <div id="main">
        <div className="btn">
          <ArrowBackIosIcon onClick={movebackard} />
        </div>
        <div>
          <div id="image">
            <img src={images[currentindex].img} />
            <h1 className="abs-title">
              <span>{images[currentindex].title}</span>
            </h1>
            <p className="abs-sub">
              <span>{images[currentindex].subtitle}</span>
            </p>
          </div>
        </div>
        <div className="btn">
          <ArrowForwardIosIcon onClick={moveforward} />
        </div>
      </div>
    </>
  );
}

export default Carousel;
