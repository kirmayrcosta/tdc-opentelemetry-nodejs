require('dotenv').config()
require('./tracer')
const meter = require('./metric')();

const { ApolloServer }  = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const axios = require('axios')

const typeDefs = `#graphql
  type Trail {
    talk: String
    speaker: String
  }

  type Query {
    trail: [Trail]
  }
`;


const mapper = (speakers, talks)=>{

    return speakers.map((speaker)=> {
        const talk = talks.find(talk=> talk.idSpeaker = speaker.idSpeaker)

        return {
            speaker: speaker.name,
            talk: talk.name
        }
    })
}

function responseTime(min, max) {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    )
}

const resolvers = {
    Query: {
        trail: async () => {
            const speakers = await axios.get('http://localhost:3002/v1/speakers');
            const talks = await axios.get('http://localhost:3001/v1/talks');


            const field = 'trail'
            const duration = responseTime(500, 20000);
            const statusCode = duration % 2 === 0 ? 200: 500;

            meter.histogram.record(duration, {
                statusCode,
                field
            })
           return mapper(speakers.data, talks.data)
        },
    },
};


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