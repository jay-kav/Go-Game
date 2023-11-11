import React from "react";
import CoordinateSender from "./gameFunctions/CoordinateSender";
import Board from "./gameFunctions/Board";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Game</p>
      <Board />
      {/* <CoordinateSender /> */}
    </div>
  );
}

export default Home;
