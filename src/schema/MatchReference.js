const matchReferenceType = `
  type MatchReference {
    lane: String!
    gameId: Int!
    champion: Champion!
    platformId: String!
    timestamp: Int!
    queue: Int!
    role: String!
    season: Int
  }
`;

const matchReferenceResolver = {
  MatchReference: {
    champion(matchReference, args, context, info) {
      return context.dataSources.riotApi.getChampion(matchReference.champion);
    }
  }
};

module.exports = {
  type: matchReferenceType,
  resolver: matchReferenceResolver
};
