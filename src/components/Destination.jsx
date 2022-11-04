import React, { useState } from "react";
import TankExperience from "./TankExperience";

const Destination = ({ arrow, pos, posMd, imageSrc, destinationTitle }) => {
  const [details, setDetails] = useState(false);

  return (
    <div
      className="flex flex-col items-center relative max-w-[300px] mb-20 lg:mb-20"
      onMouseEnter={() => setDetails(true)}
      onMouseLeave={() => setDetails(false)}
    >
      <img src={imageSrc} alt="" className="p-5" />
      <h1 className="text-[#bbbbbd] text-xl">{destinationTitle}</h1>
      {details && <TankExperience arrow={arrow} pos={pos} posMd={posMd} />}
    </div>
  );
};

export default Destination;
