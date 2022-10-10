import React, { useState } from "react";
import TankImg from "../assets/tank.png";
import TankExperience from "./TankExperience";

const Tank = ({ arrow, pos }) => {
  const [details, setDetails] = useState(false);

  return (
    <div
      className="flex flex-col items-center relative w-[300px] mb-20"
      onMouseEnter={() => setDetails(true)}
      onMouseLeave={() => setDetails(false)}
    >
      <img src={TankImg} alt="Tank" />
      <h1 className="text-[#bbbbbd] text-xl">T-34</h1>
      {details && <TankExperience arrow={arrow} pos={pos} />}
    </div>
  );
};

export default Tank;
