import React, { useEffect, useState } from "react";
import { FlatList, ActivityIndicator } from "react-native";
import styled from "styled-components/native";

import { PokemonTCG } from "pokemon-tcg-sdk-typescript";

import SetCard from "../components/SetInfoCard";
import LoadingComponent from "../components/LoadingComponent";
import OrderByComponent from "../components/OrderByComponent";

import { theme } from "../theme";

import { PokeTCGManager } from "../api/PokeTCGManager";
import { sendGetReq } from "../service/pokeRequest";

const HomeScreen = () => {
  const [pokemonSets, setPokemonSets] = useState<PokemonTCG.Set[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [apiLoading, setApiLoading] = useState<boolean>(false);
  const [orderBy, setOrderBy] = useState<string>("id");

  //buttons for sorting and their api strings
  const buttons = ["Name", "Release Date", "Series", "default"];
  const params = ["name", "releaseDate", "series", "id"];

  useEffect(() => {
    const firstGet = async () => await getNextPage(1);
    firstGet();
    setLoading(false);
  }, []);

  //if second parameter - true - merge current state.
  const getNextPage = async (
    pNum?: number,
    state?: boolean,
    sortBy?: string
  ) => {
    setApiLoading(true);
    await sendGetReq(
      { pageNum: pNum || pageNumber + 1, orderBy: sortBy || orderBy },
      PokeTCGManager.getSets,
      (res) => {
        setPokemonSets(state ? [...pokemonSets, ...res] : res);
        setPageNumber(pNum + 1);
      }
    );
    setApiLoading(false);
  };

  const sortingHandler = async (param) => {
    setPokemonSets([]);
    setOrderBy(param);
    await getNextPage(1, false, param);
  };

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <Container>
          <OrderByComponent
            setSortParam={sortingHandler}
            buttons={buttons}
            params={params}
          />
          <FlatList
            data={pokemonSets}
            keyExtractor={(item, index) => `pokemon-set-${index}`}
            renderItem={({ item }) => <SetCard cardSet={item} />}
            onEndReachedThreshold={0.1}
            onEndReached={() => getNextPage(pageNumber, true)}
            ListFooterComponent={() =>
              apiLoading && (
                <ActivityIndicator
                  size="large"
                  color={theme.colors.bg.loading}
                />
              )
            }
            ListFooterComponentStyle={{
              width: "100%",
              height: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </Container>
      )}
    </>
  );
};

export default HomeScreen;

const Container = styled.SafeAreaView`
  flex: 1;
`;
