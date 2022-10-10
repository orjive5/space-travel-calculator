import React, { useState, useEffect, useRef } from "react";
import Star from "../assets/star.png";
import Slider from "./Slider";

const TankExperience = ({ arrow, pos }) => {
  const [equipment, setEquipment] = useState("Элитная");
  const [battle, setBattle] = useState(150);
  const [experience, setExperience] = useState(330);
  const [selectorPercent, setSelectorPercent] = useState(50);
  const [progressBarWidth, setProgressBarWidth] = useState(50);

  const handleEquipment = (event) => setEquipment(event.target.value);
  const handleBattle = (event) => {
    event.target.value <= 300 &&
      event.target.value >= 0 &&
      setBattle(event.target.value);
  };
  const handleExperience = () => {
    switch (equipment) {
      case "Стандартная":
        setExperience(() => Math.round(battle * 3));
        break;
      case "Элитная":
        setExperience(() => Math.round(battle * 3 + battle * 3 * 0.1));
        break;
      case "Премиумная":
        setExperience(() => Math.round(battle * 3 + battle * 3 * 0.2));
        break;
    }
  };

  useEffect(() => {
    handleExperience();
  });

  // // Get div's coordinates, width and height
  // const inputRef = useRef();
  // const [experienceDiv, setExperienceDiv] = useState({});
  // useEffect(() => {
  //   setExperienceDiv(inputRef.current.getBoundingClientRect());
  // }, []);
  // console.log(experienceDiv);

  const upArrowDiv = `absolute top-[270px] z-10 pt-10 ${
    pos === "left" && "left-0"
  } ${pos === "right" && "right-0"}`;
  const downArrowDiv = `absolute top-[-250px] z-10 ${
    pos === "left" && "left-0"
  } ${pos === "right" && "right-0"}`;

  const upArrow = `absolute w-[40px] top-5 h-[40px] ml-[-20px] rotate-45 z-20 bg-[rgba(28,28,30)] border-2 border-[#2d2d2d] ${
    pos === "left" && "left-[150px]"
  } ${pos === "center" && "left-1/2"} ${
    pos === "right" && "right-[150px]"
  } border-b-0 border-r-0`;
  const downArrow = `absolute w-[40px] h-[40px] ml-[-20px] top-[207px] rotate-45 z-20 bg-[rgba(28,28,30)] border-2 border-[#2d2d2d] ${
    pos === "left" && "left-[150px]"
  } ${pos === "center" && "left-1/2"} ${
    pos === "right" && "right-[150px]"
  } border-t-0 border-l-0`;

  // Radio button styling
  const radioStyling =
    "form-radio h-2 w-2 checked:bg-gray-500 focus:ring-gray-500 focus:ring-2 text-gray-400 p-2 mr-2";
  const radioLabelStyling = "cursor-pointer";
  return (
    <div className={arrow === "up" ? upArrowDiv : downArrowDiv}>
      <div className={arrow === "up" ? upArrow : downArrow}></div>
      <div
        className={`relative min-w-[500px] flex flex-col gap-10 ${
          arrow === "down" && "bottom-6"
        } p-4 justify-between z-10 bg-[rgba(28,28,30,0.75)] border-2 border-[#2d2d2d]`}
      >
        <div className="flex justify-between gap-10">
          <div>
            <div>
              <h1 className="text-[#a0986a] text-2xl font-bold mb-2">
                Комплектация
              </h1>
              <input
                type="radio"
                id="standard"
                name="equipment"
                value="Стандартная"
                checked={equipment === "Стандартная"}
                onChange={handleEquipment}
                className={radioStyling}
              />
              <label htmlFor="standard">Стандартная</label>
              <br />
              <input
                type="radio"
                id="elite"
                name="equipment"
                value="Элитная"
                checked={equipment === "Элитная"}
                onChange={handleEquipment}
                className={radioStyling}
              />
              <label htmlFor="elite">Элитная</label>
              <br />
              <input
                type="radio"
                id="premium"
                name="equipment"
                value="Премиумная"
                checked={equipment === "Премиумная"}
                onChange={handleEquipment}
                className={radioStyling}
              />
              <label htmlFor="premium">Премиумная</label>
              <br />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[#a0986a] text-2xl font-bold mb-2">
              Опыт танка
            </h1>
            <div className="flex items-center justify-between">
              <img src={Star} alt="star" width="70px" />
              <h2 className="text-4xl font-bold text-yellow-500">
                {experience}
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <h1 className="text-[#a0986a] text-2xl font-bold mb-2">
              Количество боёв
            </h1>
            {/* <div>
              <input
                id="battle-slider"
                type="range"
                min={0}
                max={300}
                value={battle}
                onChange={handleBattle}
                className="slider"
              />
              <div className="selector">
                <div className="select-btn"></div>
              </div>
              <div className="progress-bar"></div>
            </div> */}
          </div>
          <input
            className="form-input rounded-lg p-2 border-4 focus:border-black active:ring-0 border-black text-black"
            id="battle-input"
            type="number"
            min="0"
            max="300"
            maxLength={3}
            placeholder={battle}
            value={battle}
            onChange={handleBattle}
          />
        </div>
      </div>
      {/* <div>
        <input
          id="battle-slider"
          type="range"
          min={0}
          max={300}
          value={battle}
          onChange={handleBattle}
          className="slider"
          onInput={() => {
            setProgressBarWidth(battle / 3);
            setSelectorPercent(battle / 3);
          }}
          // slider.oninput = function () {
          //   // SelectValue.innerHTML = this.value;
          //   selector.style.left = this.value + "%";
          //   ProgressBar.style.width = this.value + "%";
          // };
        />
        <div className={`selector left-[${selectorPercent}%]`}>
          <div className="select-btn">{selectorPercent}</div>
        </div>
        <div className={`progress-bar width-[80%]`}></div>
      </div> */}
    </div>
  );
};

export default TankExperience;
