// https://swapi.dev

export default class SwapiService {

    _apiBase = 'https://swapi.dev/api'
  
    async getResource(url) {
      const res = await fetch(`${this._apiBase}${url}`);
      if(!res.ok) {
        throw new Error(`Could not fecth ${url}` + `, received ${res.status}`)
      }
      return await res.json();  
    }
  
    async getAllPeople() {
      const res = await this.getResource(`/people/`);
      return res.results;
    }
  
    async getPerson(id) {
      return this.getResource(`/people/${id}`)
    }
  
    async getAllPlanet() {
      const res = await this.getResource(`/planets/`);
      return res.results;
    }
  
    async getPlanet(id) {
      return this.getResource(`/planets/${id}`)
    }
  
    async getAllStarships() {
      const res = await this.getResource(`/starships/`);
      return res.results;
    }
  
    async getStarship(id) {
      return this.getResource(`/starships/${id}`)
    }
  }
  
 