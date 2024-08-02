// config/index.ts
import dotenv from "dotenv";
dotenv.config();

export default {
  dbUri: process.env.MONGO_URI,
  // other configurations
};
// export default {
//   dbUri: process.env.MONGO_URI || "mongodb://localhost:27017/convove",
// };