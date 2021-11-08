import React, { useEffect, useState } from "react";
import { FlatList, ActivityIndicator } from "react-native";
import styled from "styled-components/native";

import { PokemonTCG } from "pokemon-tcg-sdk-typescript";

import SetCard from "../components/SetInfoCard";
import LoadingComponent from "../components/LoadingComponent";

import { theme } from "../theme";

import { PokeTCGManager } from "../api/PokeTCGManager";
import { sendGetReq } from "../service/pokeRequest";

const HomeScreen = () => {
  const [pokemonSets, setPokemonSets] = useState<PokemonTCG.Set[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [apiLoading, setApiLoading] = useState<boolean>(false);

  //alternative without sendGetReq
  // const getPokemonSets = async (pageNum) => {
  //   const sets: PokemonTCG.Set[] = await PokeTCGManager.getSets(pageNum);
  //   setPokemonSets([...pokemonSets, ...sets]);
  // };

  const getNextPage = async () => {
    setApiLoading(true);
    await sendGetReq(
      { pageNum: pageNumber + 1 },
      PokeTCGManager.getSets,
      (res) => {
        setPokemonSets([...pokemonSets, ...res]);
        setPageNumber(pageNumber + 1);
      }
    );
    setApiLoading(false);

    //alternative without sendGetReq
    // await getPokemonSets(pageNumber + 1);
    // setPageNumber(pageNumber + 1);
  };

  useEffect(() => {
    const firstGet = async () => await getNextPage();
    firstGet();
    setLoading(false);

    //alternative without sendGetReq
    // getPokemonSets(pageNumber);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <Container>
          <FlatList
            data={pokemonSets}
            keyExtractor={(item, index) => `pokemon-set-${index}`}
            renderItem={({ item }) => <SetCard cardSet={item} />}
            onEndReachedThreshold={0.1}
            onEndReached={getNextPage}
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
