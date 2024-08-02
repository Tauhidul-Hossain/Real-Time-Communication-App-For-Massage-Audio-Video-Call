import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
// import "./styles.css";


interface Celebrity {
  id: number;
  name: string;
  category: string;
  // Add other fields as necessary
}

const Dashboard: React.FC = () => {
  const [points, setPoints] = useState<number>(10);
  const [celebrities, setCelebrities] = useState<Celebrity[]>([]);

  useEffect(() => {
    const fetchCelebrities = async () => {
      try {
        const response = await axios.get("/api/celebrities");
        setCelebrities(response.data);
      } catch (error) {
        console.error("Failed to fetch celebrities", error);
      }
    };
    fetchCelebrities();
  }, []);

  const handleAddPoints = async () => {
    try {
      const response = await axios.post("/api/points/add");
      setPoints(response.data.points);
    } catch (error) {
      console.error("Failed to add points", error);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="points-info">
        <span>Total Points: {points}</span>
        <Button onClick={handleAddPoints}>Add Points</Button>
      </div>
      <div className="celebrities-list">
        {celebrities.map((celebrity) => (
          <div key={celebrity.id} className="celebrity-card">
            <h3>{celebrity.name}</h3>
            <p>{celebrity.category}</p>
            {/* Implement buttons for messages, audio, and video calls */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
