import cors from 'cors';

export const corsOptions = (): cors.CorsOptions => {
  return {
    origin:
      process.env.NODE_ENV === 'development'
        ? process.env.SERVER_URL
        : process.env.CLIENT_URL,
  };
};
