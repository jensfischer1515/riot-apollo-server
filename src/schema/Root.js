const rootType = `
  type Root {
    champions: [Champion!]!
    summoner(summonerName: String!): Summoner!
  }
`;

const rootResolver = {
  Root: {
    champions(root, args, context, info) {
      return context.dataSources.riotApi.getChampions();
    },
    summoner(root, args, context, info) {
      return context.dataSources.riotApi.getSummonerByName(args.summonerName);
    }
  }
};

module.exports = {
  type: rootType,
  resolver: rootResolver
};
