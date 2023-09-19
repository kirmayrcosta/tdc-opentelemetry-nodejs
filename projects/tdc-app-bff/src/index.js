require('dotenv').config()
console.log(process.env)
require('./tracer.js')

const { ApolloServer }  = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');



// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Trail {
    id: ID
    title: String
    speaker: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    trail: [Trail]
  }
`;

const trail = [
    {
        id: 1,
        title: 'Criando npm scripts cross plataforma',
        speaker: 'William Grasel',
    },
    {
        id: 2,
        title: 'Utilizando OpenTelemetry para aumentar o nível de observabilidade das suas aplicações em Nodejs.',
        speaker: 'Kirmayr Costa',
    },
    {
        id: 3,
        title: 'Estratégias para Escalabilidade Horizontal com Node.js',
        speaker: 'Jessica Felix',
    },
    {
        id: 4,
        title: 'Apify e Crawlee - transformando nodejs na melhor ferramenta de scraping',
        speaker: 'Manuel Antunes',
    },
    {
        id: 5,
        title: 'Feitiçaria ou tecnologia: Websockets com Node.js mas sem servidores?',
        speaker: 'Agnaldo Costa De almeida',
    },
    {
        id: 6,
        title: 'Utilizando arquitetura hexagonal para uma abordagem evolucionária em aplicações Node.js',
        speaker: 'Eduardo Rodrigues',
    },
    {
        id: 7,
        title: 'Node.js e K6: uma combinação poderosa para teste de performance',
        speaker: 'Cláudio Filipe Lima Rapôso',
    },
];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        trail: async () => {

           return trail
        },
    },
};


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.


// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

(async function (){

    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });

    console.log(`🚀  Server ready at: ${url}`);
})()