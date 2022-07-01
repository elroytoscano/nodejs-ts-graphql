require('dotenv').config();
require('express-async-errors');
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import express from 'express';
import xssClean from 'xss-clean';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import { graphqlHTTP } from 'express-graphql';
import mongoSanitize from 'express-mongo-sanitize';

import { connectDB } from './db';
import schema from './graphql/schemasMap';
import {
  helmetConfig,
  corsOptions,
  errorHandler,
  sessionOptions,
} from './middlewares';

const app = express();

// #region middlewares

// #region security

app.use(cors(corsOptions()));
app.use(xssClean());
app.use(mongoSanitize());
app.use(helmet(helmetConfig()));

// #endregion

app.use(morgan('tiny'));
app.use(express.json());
app.use(cookieParser());
app.use(session(sessionOptions));

// #endregion

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.use(errorHandler);

const PORT = 5000;

const start = async (): Promise<void> => {
  try {
    await connectDB();
    app.listen(PORT, () =>
      console.log(`Server will be listening to PORT:${PORT}`)
    );
  } catch (error) {
    console.log('error:', error);
  }
};

start();
