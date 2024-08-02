// src/components/CelebrityList.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
interface Celebrity {
  _id?: string; // Optional if not needed here
  name: string;
  category: string;
  bio: string;
  description: string;
  profileImage: string;
  rating: number;
  reviews: any[];
}
const CelebrityList: React.FC = () => {
    const [celebrities, setCelebrities] = useState<Celebrity[]>([]);

    useEffect(() => {
        const fetchCelebrities = async () => {
            try {
                const response = await axios.get<Celebrity[]>('/api/celebrities');
                setCelebrities(response.data);
            } catch (error) {
                console.error('Error fetching celebrities:', error);
            }
        };

        fetchCelebrities();
    }, []);

    return (
        <div>
            <h1>Celebrity Profiles</h1>
            <ul>
                {celebrities.map((celebrity) => (
                    <li key={celebrity._id}>
                        <h2>{celebrity.name}</h2>
                        <p>{celebrity.category}</p>
                        <p>{celebrity.bio}</p>
                        <img src={celebrity.profileImage} alt={celebrity.name} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CelebrityList;
