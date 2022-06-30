import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './graphql/schemasMap';

const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server will be listening to PORT:${PORT}`));
