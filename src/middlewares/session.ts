import { SessionOptions } from 'express-session';
import { connectSession } from '../db';

export const sessionOptions: SessionOptions = {
  name: process.env.SESSION_COOKIE_NAME || 'name',
  secret: process.env.SESSION_COOKIE_SECRET || 'secret',
  saveUninitialized: false,
  rolling: false,
  resave: false,
  store: connectSession,
  cookie: {
    maxAge: 1000 * 60 * 60,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  },
};
