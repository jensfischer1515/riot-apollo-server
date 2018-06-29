const { ApolloServer } = require('apollo-server');
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

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
