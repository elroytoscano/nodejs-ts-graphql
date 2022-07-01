import MongoStore from 'connect-mongo';

export const connectSession: MongoStore = MongoStore.create({
  mongoUrl: process.env.MONGODB_URL,
});
