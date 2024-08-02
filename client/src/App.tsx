import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import AddCelebrity from "./components/AddCelebrity";
import CelebrityList from "./components/CelebrityList";
import { Home } from "@material-ui/icons";
export interface Celebrity {
  _id?: string;
  name: string;
  category: string;
  bio: string;
  description: string;
  profileImage: string;
  rating: number;
  reviews: any[];
}
const App: React.FC = () => {
  const sampleCelebrity: Celebrity = {
    name: "Alfie Oliver",
    category: "Makeup Artist",
    bio: "Lorem ipsum dolor sit amet...",
    description:
      "Alfie is a world-renowned makeup artist known for his exquisite work...",
    profileImage: "path/to/image.jpg",
    rating: 4.5,
    reviews: [],
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-celebrity" element={<AddCelebrity />} />
        <Route path="/celebrities" element={<CelebrityList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/profile"
          element={<Profile celebrity={sampleCelebrity} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
