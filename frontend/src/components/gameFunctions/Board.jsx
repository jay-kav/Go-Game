import React from "react";

const BOARD_SIZE = 19; // Standard Go board size

// Cell component
const Cell = ({ onClick }) => {
  return (
    <div
      className="flex-1 border border-black h-full"
      onClick={onClick}
      style={{ minWidth: "2rem" }} // Ensuring cell is square
    >
      {/* Here we can add a stone or keep it empty based on the game state */}
    </div>
  );
};

// Row component
const Row = ({ rowNum, handleCellClick }) => {
  const cells = [];
  for (let i = 0; i < BOARD_SIZE; i++) {
    cells.push(<Cell key={i} onClick={() => handleCellClick(rowNum, i)} />);
  }
  return <div className="flex flex-1">{cells}</div>;
};

// Board component
const Board = () => {
  const handleCellClick = (row, col) => {
    console.log(`Cell clicked: Row ${row}, Col ${col}`);
    // Implement logic to place a stone or handle the click event
  };

  const rows = [];
  for (let i = 0; i < BOARD_SIZE; i++) {
    rows.push(<Row key={i} rowNum={i} handleCellClick={handleCellClick} />);
  }

  return (
    <div className="flex flex-col border border-black w-96 h-96">{rows}</div>
  );
};

export default Board;
