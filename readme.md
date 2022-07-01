# How to use this project sample

1. Provide necessary detail in [schema folder](./src/graphql/schemas/)
2. import the .graphql file in the [schemasMap.ts](./src/graphql/schemasMap.ts) like the following:<br/>
   `import * as testTypeDefs from './schemas/test.graphql';`
3. Add the new import to the **end** of the _typeDefs_ array
4. Run the following command:<br/>
   `yarn graphql-codegen init`
5. Follow instructions as per this [file](/how-to-generate-typed-resolvers.md)

## Adding TS support for packages that are purely js packages:

1. Add a _name.d.ts_ file in the [@types](./%40types/) folder
2. _name_ must be the name of the package to be imported
