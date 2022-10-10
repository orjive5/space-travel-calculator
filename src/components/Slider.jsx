import React, { useState } from "react";
import styled from "styled-components";
import SliderThumb from "../assets/slider-thumb.png";
import Slider2 from "./Slider2";

const Slider = () => {
  const [value, setValue] = useState(0);
  const MAX = 100;
  const getBackgroundSize = () => {
    return {
      backgroundSize: `${(value * 100) / MAX}% 100%`,
    };
  };
  const getTranslateX = () => {
    return {
      transform: `translateX(${(value * 100) / MAX - 50}%)`,
    };
  };

  return (
    <div className="relative mb-20 bg-[#383838] p-4 rounded w-[400px] flex flex-col z-10">
      <datalist id="range_list2">
        <option>1</option>

        <option>2</option>

        <option>3</option>

        <option>4</option>

        <option>5</option>

        <option>6</option>

        <option>7</option>
      </datalist>
      {/* <input
        type="range"
        min="0"
        max={MAX}
        onChange={(e) => setValue(e.target.value)}
        style={getBackgroundSize()}
        value={value}
        className="slider"
        // list="range_list"
      /> */}
      <Slider2
        min="0"
        max={MAX}
        onChange={(e) => setValue(e.target.value)}
        style={getBackgroundSize()}
        value={value}
      />
      <datalist id="range_list">
        <option>1</option>

        <option>2</option>

        <option>3</option>

        <option>4</option>

        <option>5</option>

        <option>6</option>

        <option>7</option>
      </datalist>
    </div>
  );
};

export default Slider;
