import axios from "axios";
//"https://pokeapi.co/api/v2/",

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({ baseURL: baseUrl });
  }
  async getAllPokemons() {
    return this.api.get(`pokemon?limit=898`); ////898
  }
  async getOnePokemons(name) {
    return this.api.get(`pokemon/${name}`);
  }
  async getComplexDetails(name) {
    return this.api.get(`pokemon-species/${name}/`);
  }
  async getEvolutionChain(inicialPokemonId) {
    return this.api.get(`evolution-chain/${inicialPokemonId}`);
  }
  async getRegion(regionID) {
    return this.api.get(`generation/${regionID}`);
  }
}

export default APIHandler 
