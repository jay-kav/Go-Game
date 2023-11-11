import React, { useState } from "react";
import axios from "axios";

function CoordinateSender() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/coordinates/",
        coordinates
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("There was an error sending the coordinates:", error);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={coordinates.x}
        onChange={(e) =>
          setCoordinates({
            ...coordinates,
            x: parseInt(e.target.value, 10) || 0,
          })
        }
        placeholder="X Coordinate"
      />
      <input
        type="number"
        value={coordinates.y}
        onChange={(e) =>
          setCoordinates({
            ...coordinates,
            y: parseInt(e.target.value, 10) || 0,
          })
        }
        placeholder="Y Coordinate"
      />
      <button onClick={handleSubmit}>Send Coordinates</button>
    </div>
  );
}

export default CoordinateSender;
