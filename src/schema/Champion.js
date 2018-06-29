const championType = `
  type Champion {
    rankedPlayEnabled: Boolean!
    botEnabled: Boolean!
    botMmEnabled: Boolean!
    active: Boolean!
    freeToPlay: Boolean!
    id: ID!
  }
`;

module.exports = {
  type: championType
};
