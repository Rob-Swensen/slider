import React, { useState } from "react";
import "../Styles/slider.scss";
import Images from "./Images";
import I1 from "../Pics/Cyberpunk.jpg";
import I2 from "../Pics/Ghost.jpg";
import I3 from "../Pics/Rdr2.jpg";
import I4 from "../Pics/TLOU2.jpg";
import I5 from "../Pics/WZ.jpg";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

function Slider(props) {
  let sliderArr = [
    <Images src={I1} />,
    <Images src={I2} />,
    <Images src={I3} />,
    <Images src={I4} />,
    <Images src={I5} />,
  ];
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };
  return (
    <div className="slider">
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}>
        <FontAwesomeIcon className='icon' icon={faChevronLeft} size='4x'/>
      </button>
      <button id="goRight" onClick={goRight}>
        <FontAwesomeIcon className='icon' icon={faChevronRight} size='4x'/>
      </button>
    </div>
  );
}

export default Slider;
