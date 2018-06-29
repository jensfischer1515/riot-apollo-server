const { RESTDataSource } = require('apollo-datasource-rest');

module.exports = class RiotApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://tr1.api.riotgames.com';
  }

  willSendRequest(request) {
    request.headers.set('X-Riot-Token', this.context['X-Riot-Token']);
  }

  async getChampions() {
    const { champions } = await this.get(`/lol/platform/v3/champions`);
    return champions;
  }

  getChampion(id) {
    return this.get(`/lol/platform/v3/champions/${id}`);
  }

  getChampionMasteriesBySummoner(summonerId) {
    return this.get(
      `/lol/champion-mastery/v3/champion-masteries/by-summoner/${summonerId}`
    );
  }

  getMatchListByAccount(accountId) {
    return this.get(`/lol/match/v3/matchlists/by-account/${accountId}`);
  }

  getSummonerByAccount(accountId) {
    return this.get(`/lol/summoner/v3/summoners/by-account/${accountId}`);
  }

  getSummonerByName(summonerName) {
    return this.get(`/lol/summoner/v3/summoners/by-name/${summonerName}`);
  }

  getSummoner(summonerId) {
    return this.get(`/lol/summoner/v3/summoners/${summonerId}`);
  }
};
