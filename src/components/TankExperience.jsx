import React, { useState, useEffect } from "react";
import Star from "../assets/star.png";

const TankExperience = ({ arrow }) => {
  const [equipment, setEquipment] = useState("Элитная");
  const [battle, setBattle] = useState(100);
  const [experience, setExperience] = useState(330);

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
  return (
    <div className="absolute top-[255px] flex justify-center">
      <div className="absolute w-[40px] h-[40px] ml-[-20px] rotate-45 z-20 bg-[rgba(28,28,30)] border-2 border-[#2d2d2d] left-1/2 border-b-0 border-r-0"></div>
      <div className="relative top-5 flex flex-col justify-between z-10 bg-[rgba(28,28,30,0.75)] p-4 border-2 border-[#2d2d2d]">
        <div className="flex justify-between">
          <div>
            <div>
              <h1 className="text-[#a0986a] text-xl">Комплектация</h1>
              <input
                type="radio"
                id="standard"
                name="equipment"
                value="Стандартная"
                checked={equipment === "Стандартная"}
                onChange={handleEquipment}
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
              />
              <label htmlFor="premium">Премиумная</label>
              <br />
            </div>
          </div>
          <div>
            <h1 className="text-[#a0986a] text-xl">Опыт танка</h1>
            <img src={Star} alt="star" width="100px" />
            <h2>{experience}</h2>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <h1 className="text-[#a0986a] text-xl">Количество боёв</h1>
            <input
              id="battle-slider"
              type="range"
              min={0}
              max={300}
              value={battle}
              onChange={handleBattle}
            />
          </div>
          <input
            className="text-black"
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
