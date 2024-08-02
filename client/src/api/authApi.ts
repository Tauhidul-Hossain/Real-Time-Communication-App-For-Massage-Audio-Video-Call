import axios from "axios";

const baseUrl = "http://localhost:3001/api/auth";

export const login = async (credentials: any) => {
  const response = await axios.post(`${baseUrl}/login`, credentials);
  return response.data;
};

export const signup = async (userData: any) => {
  const response = await axios.post(`${baseUrl}/signup`, userData);
  return response.data;
};


