import mongoose from "mongoose";

const connectionUrl = 'mongodb://localhost:27017/slack-feedbacks';

async function connectToMongoDB() {
  try {
    await mongoose.connect(connectionUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

export default connectToMongoDB;