// src/components/PointsManager.tsx
import React from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
const PointsManager: React.FC = () => {
  const { token } = useAuth();
  const [points, setPoints] = React.useState<number>(10);

  const addPoints = async () => {
    const response = await axios.post(
      "/api/points/add",
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setPoints(response.data.points);
  };

  return (
    <div>
      <h1>Points: {points}</h1>
      <button onClick={addPoints}>Add Points</button>
    </div>
  );
};

export default PointsManager;
