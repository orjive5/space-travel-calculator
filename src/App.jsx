import React from 'react';
import Destination from './components/Destination';
import ProximaCentauriB from './assets/destinations/proxima_centauri_b.png';
import Trappist1d from './assets/destinations/TRAPPIST-1d.png';
import Ross128b from './assets/destinations/ross_128_b.png';
import Kepler442b from './assets/destinations/kepler_442b.png';
import MilkyWay from './assets/destinations/milky_way.png';
import AndromedaGalaxy from './assets/destinations/andromeda_galaxy.png';

function App() {
  return (
    <div className="min-h-screen p-10 w-full text-white sm:bg-hero bg-no-repeat bg-top bg-[#1c1c1e] flex justify-center overflow-hidden">
      <div className="w-[1000px] flex flex-col justify-center gap-10">
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold mb-5 sm:mb-10">Space Travel Calculator</h1>
          <p>
            Humans have been captivated by the prospect of space travel ever since the birth of
            civilisation! Haven't we all gazed up at the night sky and dreamed about space? While
            deep space flight remains something out of science fiction movies like Star Trek and
            Star Wars, the significant progress achieved by commercial space enterprises thus far
            appears very promising. Someday, space travel (or even interstellar travel) might be
            accessible to everyone!
          </p>
          <p>
            Below you can find the relativistic space travel calculations for various destinations.
          </p>
        </div>
        <div className="grid mb-[1000px] sm:mb-[500px] sm:grid-cols-2 lg:grid-cols-3 lg:m-10 justify-evenly justify-items-center content-evenly items-center lg:gap-10">
          <Destination
            arrow="up"
            pos="left"
            posMd="left"
            imageSrc={ProximaCentauriB}
            destinationTitle="Proxima Centauri B"
            destinationDesc="Proxima Centauri b is an exoplanet orbiting in the habitable zone of the red dwarf star Proxima Centauri, which is the closest star to the Sun and part of the triple star system Alpha Centauri. It is approximately 4.2 light years from Earth in the constellation Centaurus, making it the closest known exoplanets to the Solar System."
            destinationDistance="4.22"
            destinationDistanceKm={39924154000000n}
          />
          <Destination
            arrow="up"
            pos="center"
            posMd="right"
            imageSrc={Trappist1d}
            destinationTitle="
            TRAPPIST-1d"
            destinationDesc="TRAPPIST-1d is a small exoplanet (about 30% the mass of the Earth), which orbits on the inner edge of the habitable zone of the ultracool dwarf star TRAPPIST-1 approximately 40 light-years away from Earth. TRAPPIST-1d is the least massive planet of the system and is likely to have a compact hydrogen-poor atmosphere similar to Venus, Earth, or Mars."
            destinationDistance="40"
            destinationDistanceKm={378428000000000n}
          />
          <Destination
            arrow="up"
            pos="right"
            posMd="left"
            imageSrc={Ross128b}
            destinationTitle="Ross 128 b"
            destinationDesc="Ross 128 b is a confirmed Earth-sized exoplanet, likely rocky, orbiting within the inner habitable zone of the red dwarf Ross 128, at a distance of about 11 light-years from Earth. Ross 128 b is the nearest exoplanet around a quiet red dwarf, and is considered one of the best candidates for habitability."
            destinationDistance="11.03"
            destinationDistanceKm={104351521000000n}
          />
          <Destination
            arrow="down"
            pos="left"
            posMd="right"
            imageSrc={Kepler442b}
            destinationTitle="Kepler-442b"
            destinationDesc="Kepler-442b is a confirmed near-Earth-sized exoplanet, likely rocky, orbiting within the habitable zone of the star Kepler-442, about 1,206 light-years from Earth. It is one of the more promising candidates for potential habitability, as its parent star is at least 40% less massive than the Sun – thus, it can have a lifespan of about 30 billion years or so."
            destinationDistance="1291.6"
            destinationDistanceKm={12219440120000000n}
          />
          <Destination
            arrow="down"
            pos="center"
            posMd="left"
            imageSrc={MilkyWay}
            destinationTitle="Galactic Center of Milky Way"
            destinationDesc="The Galactic Center is the rotational center of the Milky Way galaxy. Its central massive object is a supermassive black hole of about 4 million solar masses, which is called Sagittarius A*. The Galactic Center is approximately 26,000 light-years away from Earth in the direction of the constellations Sagittarius, Ophiuchus, and Scorpius, where the Milky Way appears brightest."
            destinationDistance="27900"
            destinationDistanceKm={263953530000000000n}
          />
          <Destination
            arrow="down"
            pos="right"
            posMd="right"
            imageSrc={AndromedaGalaxy}
            destinationTitle="Andromeda Galaxy"
            destinationDesc="The Andromeda Galaxy is a barred spiral galaxy with diameter of about 152,000 light-years approximately 2.5 million light-years from Earth and the nearest large galaxy to the Milky Way. The galaxy's name stems from the area of Earth's sky in which it appears, the constellation of Andromeda, which itself is named after the princess who was the wife of Perseus in Greek mythology."
            destinationDistance="2520000"
            destinationDistanceKm={23840964000000000000n}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
