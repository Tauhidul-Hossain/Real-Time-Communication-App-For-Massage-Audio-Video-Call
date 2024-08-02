// src/components/AddCelebrity.tsx
import React, { useState } from "react";
import axios from "axios";

const AddCelebrity: React.FC = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [bio, setBio] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newCelebrity = { name, category, bio, profileImage };
    try {
      const response = await axios.post("/api/celebrities/add", newCelebrity);
      console.log("Celebrity added:", response.data);
    } catch (error) {
      console.error("Error adding celebrity:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Celebrity</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <textarea
        placeholder="Biography"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <input
        type="text"
        placeholder="Profile Image URL"
        value={profileImage}
        onChange={(e) => setProfileImage(e.target.value)}
      />
      <button type="submit">Add Celebrity</button>
    </form>
  );
};

export default AddCelebrity;
