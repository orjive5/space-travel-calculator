import React from "react";
import Tank from "./components/Tank";

function App() {
  return (
    <div className="min-h-screen p-10 w-full text-white sm:bg-hero bg-no-repeat bg-top bg-[#1c1c1e] flex justify-center overflow-hidden">
      <div className="sm:mt-[300px] w-[1000px] flex flex-col justify-center gap-10">
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold mb-5 sm:mb-10">
            Опыт танков
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            animi maxime in! Quaerat, dignissimos maxime. Necessitatibus
            cupiditate commodi laborum voluptatem, fuga, delectus cum odio,
            tempora facere soluta aspernatur atque nisi.
          </p>
        </div>
        <div className="grid mb-[450px] sm:mb-60 sm:grid-cols-2 lg:grid-cols-3 lg:m-10 justify-evenly justify-items-center content-evenly items-center lg:gap-10">
          <Tank arrow="up" pos="left" posMd="left" />
          <Tank arrow="up" pos="center" posMd="right" />
          <Tank arrow="up" pos="right" posMd="left" />
          <Tank arrow="down" pos="left" posMd="right" />
          <Tank arrow="down" pos="center" posMd="left" />
          <Tank arrow="down" pos="right" posMd="right" />
        </div>
      </div>
    </div>
  );
}

export default App;
