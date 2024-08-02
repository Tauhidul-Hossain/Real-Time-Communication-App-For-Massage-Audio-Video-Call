// src/context/SocketContext.tsx
import React, { createContext, useContext } from "react";
import { io, Socket } from "socket.io-client";

const socket = io("http://localhost:4000");
const SocketContext = createContext<Socket | undefined>(undefined);

export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
);

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context)
    throw new Error("useSocket must be used within a SocketProvider");
  return context;
};
