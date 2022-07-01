import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
  process.env.MONGO_URL && (await mongoose.connect(process.env.MONGO_URL));
};
