const summonerType = `
  type Summoner {
    profileIconId: Int!
    name: String!
    summonerLevel: Int!
    revisionDate: Int!
    id: ID!
    accountId: ID!
    matchList: MatchList
    championMasteries: [ChampionMastery!]
  }
`;

const summonerResolver = {
  Summoner: {
    matchList(summoner, args, context, info) {
      return context.dataSources.riotApi.getMatchListByAccount(
        summoner.accountId
      );
    },
    championMasteries(summoner, args, context, info) {
      return context.dataSources.riotApi.getChampionMasteriesBySummoner(
        summoner.id
      );
    }
  }
};

module.exports = {
  type: summonerType,
  resolver: summonerResolver
};
