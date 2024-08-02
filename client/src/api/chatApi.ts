import axios from "axios";

const baseUrl = "http://localhost:3001/api/chat"; 

export const getMessages = async (chatId: any) => {
  const response = await axios.get(`${baseUrl}/${chatId}`);
  return response.data;
};

export const sendMessage = async (messageData: any) => {
  const response = await axios.post(`${baseUrl}`, messageData);
  return response.data;
};

// Other chat-related functions
