import React from "react";
import Tank from "./components/Tank";

function App() {
  return (
    <div className="min-h-screen w-full text-white bg-hero bg-no-repeat bg-top bg-[#1c1c1e] flex justify-center items-center">
      <div className="mt-64 w-2/3">
        <div className="">
          <h1 className="text-3xl font-bold mb-5">Опыт танков</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            animi maxime in! Quaerat, dignissimos maxime. Necessitatibus
            cupiditate commodi laborum voluptatem, fuga, delectus cum odio,
            tempora facere soluta aspernatur atque nisi.
          </p>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 mb-20">
          <Tank />
          <Tank />
          <Tank />
          <Tank />
          <Tank />
          <Tank />
        </div>
      </div>
    </div>
  );
}

export default App;
