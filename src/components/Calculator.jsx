import React, { useState, useEffect } from "react";
import Slider from "./Slider";

const Calculator = ({
  arrow,
  pos,
  posMd,
  destinationDesc,
  destinationDistance,
}) => {
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
                    id="standard"
                    name="equipment"
                    value="Стандартная"
                    checked={equipment === "Стандартная"}
                    onChange={handleEquipment}
                    className={radioStyling}
                  />
                  <label htmlFor="standard">Low: 1G (9,81 m/s^2)</label>
                </div>
                <div className="flex flex-col items-center sm:block">
                  <input
                    type="radio"
                    id="elite"
                    name="equipment"
                    value="Элитная"
                    checked={equipment === "Элитная"}
                    onChange={handleEquipment}
                    className={radioStyling}
                  />
                  <label htmlFor="elite">Standard: 10 G (98 m/s^2)</label>
                </div>
                <div className="flex flex-col items-center sm:block">
                  <input
                    type="radio"
                    id="premium"
                    name="equipment"
                    value="Премиумная"
                    checked={equipment === "Премиумная"}
                    onChange={handleEquipment}
                    className={radioStyling}
                  />
                  <label htmlFor="premium">High: 400 G (3922.66 m/s^2)</label>
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
                </datalist>
              </div>
            </div>
            <input
              className="form-input striped focus:border-yellow-500 focus:ring-0 rounded-lg p-2 border-4 active:ring-0 border-black text-[#a59d6e] text-right text-3xl pr-5 font-bold h-[55px] w-[120px]"
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
        <div className="w-full flex flex-col justify-between text-center sm:text-left">
          <div className="hidden sm:flex justify-between items-center">
            <h1 className="text-[#a0986a] text-2xl font-bold mb-2">
              Time passed in spaceship
            </h1>
            <div className="flex items-center justify-between gap-7">
              <h2 className="text-4xl font-bold text-yellow-500">
                {experience} yrs
              </h2>
            </div>
          </div>
          <div className="hidden sm:flex justify-between items-center">
            <h1 className="text-[#a0986a] text-2xl font-bold mb-2">
              Time passed on Earth
            </h1>
            <div className="flex items-center justify-between gap-7">
              <h2 className="text-4xl font-bold text-yellow-500">
                {experience} yrs
              </h2>
            </div>
          </div>
        </div>
        <div className="sm:hidden flex flex-col gap-2">
          <h1 className="text-[#a0986a] text-2xl font-bold mb-2">Опыт танка</h1>
          <div className="flex items-center gap-7">
            <h2 className="text-4xl font-bold text-yellow-500">{experience}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
