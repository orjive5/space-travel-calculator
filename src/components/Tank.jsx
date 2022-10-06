import React, { useEffect, useState } from "react";
import TankImg from "../assets/tank.png";
import Star from "../assets/star.png";

const Tank = () => {
  const [details, setDetails] = useState(false);
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
    <div
      className="flex flex-col items-center relative"
      onMouseEnter={() => setDetails(true)}
      onMouseLeave={() => setDetails(false)}
    >
      <img src={TankImg} alt="Tank" />
      <h1>T-34</h1>
      {details && (
        <div className="absolute left-0 top-[300px] w-[600px] h-[350px] flex flex-col justify-between z-10 bg-[rgba(28,28,30,0.75)] p-4 border-2 border-[#2d2d2d]">
          <div className="flex justify-between">
            <div>
              <div>
                <h1 className="text-orange-400">Комплектация</h1>
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
              <h1 className="text-orange-400">Опыт танка</h1>
              <img src={Star} alt="star" width="100px" />
              <h2>{experience}</h2>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-orange-400">Количество боёв</h1>
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
      )}
    </div>
  );
};

export default Tank;
