import React, { ReactNode, useState } from "react";
import { Button } from "@material-ui/core";
import '../';


interface Celebrity {
  category: ReactNode;
  bio: ReactNode;
  profileImage: string | undefined;
  name: string;
  description: string;
  // Add other fields as necessary
}

interface ProfileProps {
  celebrity: Celebrity;
}

const Profile: React.FC<ProfileProps> = ({ celebrity }) => {
  const [points, setPoints] = useState(10);

  const handleAction = (type: string) => {
    const pointsCost = type === "message" ? 1 : type === "audio" ? 3 : 5;
    if (points >= pointsCost) {
      setPoints(points - pointsCost);
      // Implement the real-time communication logic here
    } else {
      alert("Not enough points");
    }
  };

  return (
    <div className="profile-container">
      <div>
        <h1>{celebrity.name}</h1>
        <p>{celebrity.category}</p>
        <p>{celebrity.bio}</p>
        <p>{celebrity.description}</p>
        <img src={celebrity.profileImage} alt={celebrity.name} />
      </div>
      <div className="actions">
        <Button onClick={() => handleAction("message")}>Message For 01</Button>
        <Button onClick={() => handleAction("audio")}>Audio Call For 03</Button>
        <Button onClick={() => handleAction("video")}>Video Call For 05</Button>
      </div>
    </div>
  );
};

export default Profile;