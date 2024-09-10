// src/db.ts
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ritesh:rz2iMglPjqqDGOkb@cluster0.h2tca.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); // Exit the process if the connection fails
  }
};

export default connectDB;
