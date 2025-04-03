import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    const db = mongoose.connect(
      "mongodb://127.0.0.1:27017/ecommerce" || process.env.MONGODB_URI
    );
    if (db) {
      console.log("Database is connected");
    }
  } catch (error) {
    console.log("Error in database connection: ", error);
  }
};

export default connectToDb;