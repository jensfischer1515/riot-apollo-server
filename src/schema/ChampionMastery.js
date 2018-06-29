const championMasteryType = `
  type ChampionMastery {
    chestGranted: Boolean!
    championLevel: Int!
    championPoints: Int!
    champion: Champion!
    summoner: Summoner!
    championPointsUntilNextLevel: Int!
    tokensEarned: Int!
    championPointsSinceLastLevel: Int!
    lastPlayTime: Int!
  }
`;

const championMasteryResolver = {
  ChampionMastery: {
    champion(championMastery, args, context, info) {
      return context.dataSources.riotApi.getChampion(
        championMastery.championId
      );
    },
    summoner(championMastery, args, context, info) {
      return context.dataSources.riotApi.getSummoner(championMastery.playerId);
    }
  }
};

module.exports = {
  type: championMasteryType,
  resolver: championMasteryResolver
};
