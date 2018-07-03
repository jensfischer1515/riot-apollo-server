const { ApolloServer } = require('apollo-server-lambda');
const RiotApi = require('./src/RiotApi');
const schema = require('./src/schema');

const { API_KEY } = process.env;

const server = new ApolloServer({
  schema,
  dataSources: () => ({ riotApi: new RiotApi() }),
  context: () => ({
    'X-Riot-Token': API_KEY
  })
});

exports.graphqlHandler = server.createHandler();
