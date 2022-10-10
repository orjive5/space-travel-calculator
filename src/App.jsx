import React, { useState } from "react";
import Tank from "./components/Tank";
import Slider from "./components/Slider";
import Slider2 from "./components/Slider2";

function App() {
  // const [value, setValue] = useState(50);
  return (
    <div className="min-h-screen w-full text-white bg-hero bg-no-repeat bg-top bg-[#1c1c1e] flex justify-center">
      <div className="mt-[325px] w-[1000px] flex flex-col justify-center">
        <div>
          <h1 className="text-4xl font-bold mb-10">Опыт танков</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            animi maxime in! Quaerat, dignissimos maxime. Necessitatibus
            cupiditate commodi laborum voluptatem, fuga, delectus cum odio,
            tempora facere soluta aspernatur atque nisi.
          </p>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 m-10 justify-evenly justify-items-center content-evenly items-center gap-10">
          <Tank arrow="up" pos="left" />
          <Tank arrow="up" pos="center" />
          <Tank arrow="up" pos="right" />
          <Tank arrow="down" pos="left" />
          <Tank arrow="down" pos="center" />
          <Tank arrow="down" pos="right" />
        </div>
        <Slider />
        <Slider2 />
        {/* <Slider2 value={value} onChange={(e) => setValue(e.target.value)} /> */}
      </div>
    </div>
  );
}

export default App;
