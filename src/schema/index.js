const { makeExecutableSchema } = require('graphql-tools');

const champion = require('./Champion');
const championMastery = require('./ChampionMastery');
const matchReference = require('./MatchReference');
const matchList = require('./MatchList');
const summoner = require('./Summoner');
const root = require('./Root');

const schema = `
  schema {
    query: Root
  }
`;

module.exports = makeExecutableSchema({
  typeDefs: [
    schema,
    champion.type,
    championMastery.type,
    matchReference.type,
    matchList.type,
    summoner.type,
    root.type
  ],
  resolvers: [
    championMastery.resolver,
    matchReference.resolver,
    summoner.resolver,
    root.resolver
  ]
});
