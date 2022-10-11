import React, { useState, useEffect, useRef } from "react";
import Star from "../assets/star.png";
import Slider from "./Slider";

const TankExperience = ({ arrow, pos, posMd }) => {
  const [equipment, setEquipment] = useState("Элитная");
  const [battle, setBattle] = useState(150);
  const [experience, setExperience] = useState(330);

  //Slider
  const MAX = 300;
  const getBackgroundSize = () => {
    return {
      backgroundSize: `${(battle * 100) / MAX}% 100%`,
    };
  };

  const handleEquipment = (event) => setEquipment(event.target.value);
  const handleBattle = (event) => {
    event.target.value <= 300 &&
      event.target.value >= 0 &&
      setBattle(event.target.value);
    event.target.value === "" && setBattle(0);
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
    battle.length > 1 && battle[0] === "0" && setBattle(battle.slice(1));
  });

  const upArrowDiv = `absolute top-[270px] z-10 pt-10 ${
    pos === "left" && "lg:left-0"
  } ${pos === "right" && "lg:right-0"}`;
  const downArrowDiv = `absolute lg:top-[-250px] md:top-[270px] z-10 md:pt-10 lg:pt-0 ${
    pos === "left" && "lg:left-0"
  } ${pos === "right" && "lg:right-0"}`;

  const upArrow = `absolute w-[40px] top-5 h-[40px] ml-[-20px] rotate-45 z-20 bg-[rgba(28,28,30)] border-2 border-[#2d2d2d] ${
    pos === "left" && "lg:left-[150px]"
  } ${pos === "center" && "lg:left-1/2"} ${
    pos === "right" && "lg:right-[150px]"
  } border-b-0 border-r-0 md:right-1/2`;
  const downArrow = `absolute w-[40px] h-[40px] ml-[-20px] top-[206px] rotate-45 z-20 bg-[rgba(28,28,30)] border-2 border-[#2d2d2d] ${
    pos === "left" && "left-[150px]"
  } ${pos === "center" && "left-1/2"} ${
    pos === "right" && "right-[150px]"
  } border-t-0 border-l-0`;

  // Radio button styling
  const radioStyling =
    "form-radio h-2 w-2 checked:bg-[#636363] focus:ring-[#636363] focus:ring-2 text-[#636363] p-2 mr-2";
  return (
    <div className={arrow === "up" ? upArrowDiv : downArrowDiv}>
      <div className={arrow === "up" ? upArrow : downArrow}></div>
      <div
        className={`relative min-w-[500px] flex flex-col gap-10 ${
          posMd === "left" ? "md:left-20" : "md:right-20"
        } lg:left-0 lg:right-0 ${
          arrow === "down" && "bottom-14"
        } p-4 justify-between bg-[rgba(28,28,30,0.75)] border-2 border-[#2d2d2d]`}
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
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-[#a0986a] text-2xl font-bold mb-2">
              Опыт танка
            </h1>
            <div className="flex items-center justify-between gap-7">
              <img src={Star} alt="star" width="70px" />
              <h2 className="text-4xl font-bold text-yellow-500">
                {experience}
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-20 items-end">
          <div>
            <h1 className="text-[#a0986a] text-2xl font-bold mb-2">
              Количество боёв
            </h1>
            <div className="relative z-30 bg-[#383838] py-3 px-4 rounded w-[300px] flex flex-col">
              <datalist id="range_list2">
                <option>1</option>

                <option>2</option>

                <option>3</option>

                <option>4</option>

                <option>5</option>

                <option>6</option>

                <option>7</option>
              </datalist>
              <Slider
                min="0"
                max={MAX}
                onChange={(e) => setBattle(e.target.value)}
                style={getBackgroundSize()}
                value={battle}
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
          </div>
          <input
            className="form-input striped focus:border-yellow-500 focus:ring-0 rounded-lg p-2 border-4 focus:border-black active:ring-0 border-black text-[#a59d6e] text-right text-3xl pr-5 font-bold h-[55px] w-[120px]"
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
    </div>
  );
};

export default TankExperience;
