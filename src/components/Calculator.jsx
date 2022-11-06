import React, { useState, useEffect } from "react";
import Slider from "./Slider";

const Calculator = ({
  arrow,
  pos,
  posMd,
  destinationDesc,
  destinationDistance,
  destinationDistanceKm,
}) => {
  const [acceleration, setAcceleration] = useState("Low");
  const [maxSpeed, setMaxSpeed] = useState(10);
  const [earthTime, setEarthTime] = useState(330);
  const [spaceshipTime, setSpaceshipTime] = useState(0);
  //Slider
  const MAX = 100;
  const getBackgroundSize = () => {
    return {
      backgroundSize: `${(maxSpeed * 100) / MAX}% 100%`,
    };
  };

  const handleAcceleration = (event) => setAcceleration(event.target.value);
  const handleMaxSpeed = (event) => {
    event.target.value <= 100 &&
      event.target.value >= 0 &&
      setMaxSpeed(event.target.value);
    event.target.value === "" && setMaxSpeed(0);
  };
  const handleTime = () => {
    switch (acceleration) {
      case "Low":
        setEarthTime(() =>
          Math.sqrt(
            Math.pow(
              Number(destinationDistanceKm) / ((maxSpeed / 100) * 300000),
              2
            ) +
              Number(2n * destinationDistanceKm) / 0.00981
          )
        );
        break;
      case "High":
        setEarthTime(() =>
          Math.sqrt(
            Math.pow(
              Number(destinationDistanceKm) / ((maxSpeed / 100) * 300000),
              2
            ) +
              Number(2n * destinationDistanceKm) / 0.0981
          )
        );
        break;
    }
  };

  useEffect(() => {
    handleTime();
    maxSpeed.length > 1 &&
      maxSpeed[0] === "0" &&
      setMaxSpeed(maxSpeed.slice(1));
  });

  useEffect(() => {
    let spaceshipSpeed = maxSpeed == 100 ? 0.995 : maxSpeed / 100;
    switch (acceleration) {
      case "Low":
        setSpaceshipTime(() => {
          return (
            Math.sqrt(
              1 - Math.pow(spaceshipSpeed * 300000, 2) / Math.pow(300000, 2)
            ) * earthTime
          );
        });
        break;
      case "High":
        setSpaceshipTime(() => {
          return (
            Math.sqrt(
              1 - Math.pow(spaceshipSpeed * 300000, 2) / Math.pow(300000, 2)
            ) * earthTime
          );
        });
        break;
    }
  }, [earthTime]);

  const upArrowDiv = `absolute top-[320px] w-screen sm:w-auto sm:top-[320px] lg:top-[295px] z-10 pt-10 ${
    pos === "left" && "lg:left-0"
  } ${pos === "right" && "lg:right-0"}`;
  const downArrowDiv = `absolute top-[320px] w-screen sm:w-auto lg:top-[-450px] sm:top-[320px] z-10 sm:pt-10 lg:pt-0 ${
    pos === "left" && "lg:left-0"
  } ${pos === "right" && "lg:right-0"}`;

  const upArrow = `absolute w-[40px] top-5 h-[40px] ml-[-20px] rotate-45 z-20 bg-[rgba(28,28,30)] border-2 border-[#2d2d2d] ${
    pos === "left" && "lg:left-[150px]"
  } ${pos === "center" && "lg:left-1/2"} ${
    pos === "right" && "lg:right-[150px] lg:left-auto"
  } border-b-0 border-r-0 left-1/2`;
  const downArrow = `absolute w-[40px] top-5 h-[40px] ml-[-20px] lg:top-[400px] lg:rotate-45 rotate-[225deg] z-20 bg-[rgba(28,28,30)] border-2 border-[#2d2d2d] ${
    pos === "left" && "lg:left-[150px]"
  } ${pos === "center" && "lg:left-1/2"} ${
    pos === "right" && "lg:right-[150px] lg:left-auto"
  } border-t-0 border-l-0 left-1/2`;

  // Radio button styling
  const radioStyling =
    "form-radio h-2 w-2 checked:bg-yellow-500 focus:ring-yellow-500 sm:checked:bg-[#636363] sm:focus:ring-[#636363] focus:ring-2 text-yellow-500 sm:text-[#636363] p-2 mr-2";
  return (
    <div className={arrow === "up" ? upArrowDiv : downArrowDiv}>
      <div className={arrow === "up" ? upArrow : downArrow}></div>
      <div
        className={`relative flex flex-col items-center sm:items-start ${
          posMd === "left" ? "sm:left-32" : "sm:right-32"
        } lg:left-0 lg:right-0 ${
          arrow === "down" && "lg:bottom-[80px] top-10"
        } px-4 py-8 sm:top-auto justify-between bg-[rgba(28,28,30,0.8)] border-2 border-[#2d2d2d] h-[500px]`}
      >
        <div>
          <p>{destinationDesc}</p>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <h1 className="text-[#a0986a] text-2xl font-bold mb-2">Distance</h1>
            <p>{destinationDistance} light years</p>
          </div>
          <div>
            <div className="border-[#2d2d2d] sm:text-left border-b-2 pb-4 sm:border-0 sm:p-0">
              <h1 className="text-[#a0986a] text-2xl font-bold mb-2">
                Spaceship acceleration
              </h1>
              <div className="flex items-center justify-center gap-5 sm:block">
                <div className="flex flex-col items-center sm:block">
                  <input
                    type="radio"
                    id="low"
                    name="acceleration"
                    value="Low"
                    checked={acceleration === "Low"}
                    onChange={handleAcceleration}
                    className={radioStyling}
                  />
                  <label htmlFor="low">Low: 1G (9,81 m/s^2)</label>
                </div>
                <div className="flex flex-col items-center sm:block">
                  <input
                    type="radio"
                    id="high"
                    name="acceleration"
                    value="High"
                    checked={acceleration === "High"}
                    onChange={handleAcceleration}
                    className={radioStyling}
                  />
                  <label htmlFor="high">High: 10 G (98 m/s^2)</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-[#a0986a] text-2xl text-center sm:text-left font-bold mb-2">
            Maximum speed, % speed of light
          </h1>
          <div className="flex flex-col gap-5 items-center sm:flex-row sm:justify-between sm:gap-20 sm:items-end">
            <div>
              <div className="relative z-30 bg-[#383838] py-3 px-4 rounded w-[300px] flex flex-col">
                <datalist id="range_list2">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </datalist>
                <Slider
                  min="0"
                  max={MAX}
                  onChange={(e) => setMaxSpeed(e.target.value)}
                  style={getBackgroundSize()}
                  value={maxSpeed}
                />
                <datalist id="range_list">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </datalist>
              </div>
            </div>
            <input
              className="form-input striped focus:border-yellow-500 focus:ring-0 rounded-lg p-2 border-4 active:ring-0 border-black text-[#a59d6e] text-right text-3xl pr-5 font-bold h-[55px] w-[120px]"
              id="maxSpeed-input"
              type="number"
              min="0"
              max="300"
              maxLength={3}
              placeholder={maxSpeed}
              value={maxSpeed}
              onChange={handleMaxSpeed}
            />
          </div>
        </div>
        <div className="w-full flex flex-col justify-between text-center sm:text-left">
          <div className="hidden sm:flex justify-between items-center">
            <h1 className="text-[#a0986a] text-2xl font-bold mb-2">
              Time passed on Earth
            </h1>
            <div className="flex items-center justify-between gap-7">
              <h2 className="text-4xl font-bold text-yellow-500">
                {earthTime / 31556952 < 100
                  ? Math.round((earthTime / 31556952) * 10) / 10
                  : Math.round(earthTime / 31556952)}{" "}
                yrs
              </h2>
            </div>
          </div>
          <div className="hidden sm:flex justify-between items-center">
            <h1 className="text-[#a0986a] text-2xl font-bold mb-2">
              Time passed in spaceship
            </h1>
            <div className="flex items-center justify-between gap-7">
              <h2 className="text-4xl font-bold text-yellow-500">
                {spaceshipTime / 31556952 < 100
                  ? Math.round((spaceshipTime / 31556952) * 10) / 10
                  : Math.round(spaceshipTime / 31556952)}{" "}
                yrs
              </h2>
            </div>
          </div>
        </div>
        <div className="sm:hidden flex flex-col gap-2">
          <div>
            <h1 className="text-[#a0986a] text-2xl font-bold mb-2">
              Time passed on Earth
            </h1>
            <div className="flex items-center gap-7">
              <h2 className="text-4xl font-bold text-yellow-500">
                {earthTime / 31556952 < 100
                  ? Math.round((earthTime / 31556952) * 10) / 10
                  : Math.round(earthTime / 31556952)}{" "}
                yrs
              </h2>
            </div>
          </div>
          <h1 className="text-[#a0986a] text-2xl font-bold mb-2">
            Time passed in spaceship
          </h1>
          <div className="flex items-center gap-7">
            <h2 className="text-4xl font-bold text-yellow-500">
              {spaceshipTime / 31556952 < 100
                ? Math.round((spaceshipTime / 31556952) * 10) / 10
                : Math.round(spaceshipTime / 31556952)}{" "}
              yrs
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
