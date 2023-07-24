import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose";

const connectionUrl = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@slack-cluster.tjdy7ru.mongodb.net/?retryWrites=true&w=majority`;
console.log(connectionUrl)

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