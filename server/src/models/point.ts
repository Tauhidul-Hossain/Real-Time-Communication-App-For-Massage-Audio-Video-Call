import mongoose, { Schema, Document } from "mongoose";

export interface IPoint extends Document {
  userId: string;
  points: number;
  createdAt: Date;
  updatedAt: Date;
}

const pointSchema: Schema<IPoint> = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<IPoint>("Point", pointSchema);
