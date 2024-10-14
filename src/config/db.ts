import mongoose, { Error } from "mongoose";

export const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI!);
    console.log(`MONGODB Connected ${conn.connection.host}`);
  } catch (error) {
    if( error instanceof Error) {
      console.error(`Error ${error.message}`);
    }else{
      console.error(`Error unkown ${String(error)}`)
    }
    process.exit(1);
  }
};
