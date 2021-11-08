import { PokemonTCG } from "pokemon-tcg-sdk-typescript";

//TODO: create types/interfaces for params

const getSets = ({ pageNum }): Promise<PokemonTCG.Set[]> => {
  const data: any = PokemonTCG.findSetsByQueries({
    orderBy: "id",
    pageSize: 5,
    page: pageNum,
  })
    .then((sets) => sets)
    .catch((err) => console.log("Error: ", err.message));
  return data;
};

const getCardsInSet = ({ id, pageNum }): Promise<PokemonTCG.Card[]> => {
  const params: PokemonTCG.Parameter = {
    q: `set.id:${id}`,
    orderBy: "id",
    pageSize: 5,
    page: pageNum,
  };

  const data: Promise<PokemonTCG.Card[]> = PokemonTCG.findCardsByQueries(params)
    .then((cards: PokemonTCG.Card[]) => cards)
    .catch((err) => console.log("Error: ", err.message));
  return data;
};

const getSingleSet = (id: string): Promise<PokemonTCG.Set> => {
  const data: Promise<PokemonTCG.Set> = PokemonTCG.findSetByID(id).then(
    (set: PokemonTCG.Set) => set
  );
  return data;
};

const getSingleCard = () => {};

export const PokeTCGManager = {
  getSets,
  getCardsInSet,
  getSingleSet,
  getSingleCard,
};
