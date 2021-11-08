import { PokemonTCG } from "pokemon-tcg-sdk-typescript";

export interface ReqGetSets {
  pageNum: number;
  orderBy?: string;
}

export interface ReqGetCardsInSet {
  id: string;
  pageNum: number;
  orderBy?: string;
}

export interface ReqType {
  pageNum: number;
  id?: string;
  orderBy?: string;
}

const getSets = ({
  pageNum,
  orderBy = "id",
}: ReqType): Promise<PokemonTCG.Set[]> => {
  const data: any = PokemonTCG.findSetsByQueries({
    orderBy,
    pageSize: 5,
    page: pageNum,
  })
    .then((sets) => sets)
    .catch((err) => console.log("Error: ", err.message));
  return data;
};

const getCardsInSet = ({
  id,
  pageNum,
  orderBy = "id",
}: ReqType): Promise<PokemonTCG.Card[]> => {
  const params: PokemonTCG.Parameter = {
    q: `set.id:${id}`,
    orderBy,
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
