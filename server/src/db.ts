import mongoose from "mongoose";
import config from "../config";

const connectDB = async () => {
  try {
    if (!config.dbUri) {
      throw new Error("Missing database URI in config");
    }
    const conn = await mongoose.connect(config.dbUri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${(error as Error).message}`);
    process.exit(1);
  }
};

export default connectDB;
