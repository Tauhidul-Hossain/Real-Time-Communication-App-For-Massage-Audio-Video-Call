import axios from "axios";

const baseUrl = "http://localhost:3001/api/video";

export const initiateCall = async (recipientId: any) => {
  const response = await axios.post(`${baseUrl}/initiate`, { recipientId });
  return response.data;
};

export const joinCall = async (callId: any) => {
  const response = await axios.post(`${baseUrl}/join`, { callId });
  return response.data;
};
