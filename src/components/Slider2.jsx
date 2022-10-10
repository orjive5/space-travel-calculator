import React from "react";
import styled from "styled-components";
import SliderThumb from "../assets/slider-thumb.png";

const Slider2 = styled.input.attrs({ type: "range" })`
  -webkit-appearance: none;
  height: 10px;
  width: 100%;
  background: #1c1c1d;
  border-radius: 5px;
  background-image: linear-gradient(#ffc700, #ffc700);
  background-repeat: no-repeat;
  border: 3px solid #2a2a2d;
  z-index: 20;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    transform: ${(props) =>
      `translateX(${(props.value * 100) / props.max - 50}%)`};
    background: ${(props) =>
      `linear-gradient(to right, #ff9800 0%, #ff9800 ${props.value}%, #fff ${props.value}%, #fff 100%);`};
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
    background-image: url(${SliderThumb});
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    cursor: pointer;
  }
  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
`;

export default Slider2;
// import React from "react";
// import styled from "styled-components";

// const Slider2 = styled.input.attrs({ type: "range" })`
//   -webkit-appearance: none;
//   -moz-appearance: none;
//   outline: 0;
//   height: 12px;
//   border-radius: 40px;
//   background: ${(props) =>
//     `linear-gradient(to right, #ff9800 0%, #ff9800 ${props.value}%, #fff ${props.value}%, #fff 100%);`};
//   box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);

//   ::-webkit-slider-thumb {
//     -webkit-appearance: none;
//     width: 24px;
//     height: 24px;
//     background-image: radial-gradient(circle, #f7f7fc 40%, #ff9800 45%);
//     border-radius: 50%;
//     box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
//   }

//   ::-moz-range-thumb {
//     width: 24px;
//     height: 24px;
//     -moz-appearance: none;
//     background-image: radial-gradient(circle, #f7f7fc 40%, #ff9800 45%);
//     border-radius: 50%;
//     box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
//   }
// `;

// export default Slider2;
