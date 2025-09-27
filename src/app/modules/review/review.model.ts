import { Schema, model } from "mongoose";
import { IReview } from "./review.interface";

const reviewSchema = new Schema<IReview>(
   {
    id: { type: String, required: true },
    title: { type: String, required: true },
    studentName: { type: String },
    studentImg: { type: String },
    description: { type: String },
    date: { type: String },
    videoUrl: { type: String }, 
  },
);

export const Review = model<IReview>("Review", reviewSchema);
