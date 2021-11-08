import { PokemonTCG } from "pokemon-tcg-sdk-typescript";

import { ReqType } from "../api/PokeTCGManager";

export const sendGetReq = async (
  params: ReqType,
  callback: Promise<PokemonTCG.Set[] | PokemonTCG.Card[]>,
  setState: any
) => {
  try {
    const res = await callback(params);

    //could transform data here

    setState(res);
    return { status: "ok" };
  } catch (err) {
    console.log("Error happend. ", err.message);
    return { status: "error", message: err.message };
  }
};
