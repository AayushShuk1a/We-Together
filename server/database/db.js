import mongoose from "mongoose";


const URL="mongodb+srv://aayushshuk1a:iamaayush@cluster0.f0aapxb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connection = async () => {
  try {
    await mongoose.connect(URL, {
    });
    console.log("Connected To MongoDb");
  } catch (error) {
    console.log(error);
  }
};

export default connection;