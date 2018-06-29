const matchListType = `
  type MatchList {
    matches: [MatchReference!]
    totalGames: Int!
    startIndex: Int!
    endIndex: Int!
  }
`;

module.exports = {
  type: matchListType
};
