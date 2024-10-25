import mongoose from "mongoose";

export const connectToDB = async () => {
  const connection = {};
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(
      "mongodb+srv://huugoo8080: dpsDashboard@cluster0.hhm7p.mongodb.net/dpsDB?retryWrites=true&w=majority&appName=Cluster0"
    );
    connection.isConnected = db.connection[0].readyState;
  } catch (error) {
    throw new Error(error);
  }
};
