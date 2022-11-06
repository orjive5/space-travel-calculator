import React, { useState } from "react";
import Calculator from "./Calculator";

const Destination = ({
  arrow,
  pos,
  posMd,
  imageSrc,
  destinationTitle,
  destinationDesc,
  destinationDistance,
  destinationDistanceKm,
}) => {
  const [details, setDetails] = useState(false);

  return (
    <div
      className="flex flex-col items-center relative max-w-[300px] mb-20 lg:mb-20"
      onMouseEnter={() => setDetails(true)}
      onMouseLeave={() => setDetails(false)}
    >
      <img src={imageSrc} alt="" className="p-5" />
      <h1 className="text-[#bbbbbd] text-xl">{destinationTitle}</h1>
      {details && (
        <Calculator
          arrow={arrow}
          pos={pos}
          posMd={posMd}
          destinationDesc={destinationDesc}
          destinationDistance={destinationDistance}
          destinationDistanceKm={destinationDistanceKm}
        />
      )}
    </div>
  );
};

export default Destination;
