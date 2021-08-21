import APIHandler from "../APIHandler";

const getEvolutionChain = async (name) => {
  const API = new APIHandler("https://pokeapi.co/api/v2/");

  const evoChain = [];
  const pokemonSpecies = await API.getComplexDetails(`${name}`);
  const evolutionChainId = pokemonSpecies.data.evolution_chain.url
    .slice(-5)
    .replace(/([^\d])+/gim, "");
  const evolutionChain = await API.getEvolutionChain(`${evolutionChainId}/`);
  let stage1,
    stage2,
    stage3 = null;
  try {
    stage1 = evolutionChain.data.chain.species.name;
  } catch (e) {
    stage1 = null;
  }
  try {
    stage2 = evolutionChain.data.chain.evolves_to[0].species.name;
  } catch (error) {
    stage2 = null;
  }
  try {
    stage3 = evolutionChain.data.chain.evolves_to[0].evolves_to[0].species.name;
  } catch (e) {
    stage3 = null;
  }
  evoChain.push(stage1, stage2, stage3);
  const filteredEvoChain = evoChain.filter((pokemon) => pokemon !== null);
  return filteredEvoChain;
};

export default getEvolutionChain;
