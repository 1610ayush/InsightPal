import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    feedbackText: { type: String, required: true },
    sentiment: { type: String, required: true },
    keywords: { type: [String], required: true },
    summary: { type: String, required: true },
    explanation: { type: String, required: true },
    tags: { type: [String], required: true },
  });
  
export const FeedbackModel = mongoose.model('Feedback', feedbackSchema);
  
