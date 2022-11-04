import React from "react";
import Destination from "./components/Destination";
import ProximaCentauriB from "./assets/destinations/proxima_centauri_b.png";
import Trappist1d from "./assets/destinations/TRAPPIST-1d.png";
import Ross128b from "./assets/destinations/ross_128_b.png";
import Kepler442b from "./assets/destinations/kepler_442b.png";
import MilkyWay from "./assets/destinations/milky_way.png";
import AndromedaGalaxy from "./assets/destinations/andromeda_galaxy.png";

function App() {
  return (
    <div className="min-h-screen p-10 w-full text-white sm:bg-hero bg-no-repeat bg-top bg-[#1c1c1e] flex justify-center overflow-hidden">
      <div className="w-[1000px] flex flex-col justify-center gap-10">
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold mb-5 sm:mb-10">
            Space Travel Calculator
          </h1>
          <p>
            Ever since the dawn of civilization, the idea of space travel has
            fascinated humans! Haven't we all looked up into the night sky and
            dreamed about space? While traveling deep into space is still
            something out of science fiction movies like Star Trek and Star
            Wars, the tremendous progress made by private space companies so far
            seems very promising. Someday, space travel (or even interstellar
            travel) might be accessible to everyone!
          </p>
        </div>
        <div className="grid mb-[450px] sm:mb-60 sm:grid-cols-2 lg:grid-cols-3 lg:m-10 justify-evenly justify-items-center content-evenly items-center lg:gap-10">
          <Destination
            arrow="up"
            pos="left"
            posMd="left"
            imageSrc={ProximaCentauriB}
            destinationTitle="Proxima Centauri B"
          />
          <Destination
            arrow="up"
            pos="center"
            posMd="right"
            imageSrc={Trappist1d}
            destinationTitle="
            TRAPPIST-1d"
          />
          <Destination
            arrow="up"
            pos="right"
            posMd="left"
            imageSrc={Ross128b}
            destinationTitle="Ross 128 b"
          />
          <Destination
            arrow="down"
            pos="left"
            posMd="right"
            imageSrc={Kepler442b}
            destinationTitle="Kepler-442b"
          />
          <Destination
            arrow="down"
            pos="center"
            posMd="left"
            imageSrc={MilkyWay}
            destinationTitle="Galactic Center of Milky Way"
          />
          <Destination
            arrow="down"
            pos="right"
            posMd="right"
            imageSrc={AndromedaGalaxy}
            destinationTitle="Andromeda Galaxy"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
