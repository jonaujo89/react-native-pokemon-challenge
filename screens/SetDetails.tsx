import React, { useEffect, useState } from "react";
import { Modal, FlatList, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";

import { useRoute } from "@react-navigation/core";
import { RouteProps } from ".";

import CardInfo from "../components/CardInfo";
import SetHeader from "../components/SetHeader";
import LoadingComponent from "../components/LoadingComponent";
import OrderByComponent from "../components/OrderByComponent";

import { AntDesign } from "@expo/vector-icons";
import { theme } from "../theme";

import { PokeTCGManager } from "../api/PokeTCGManager";
import { sendGetReq } from "../service/pokeRequest";

type SetDetailsRouteProps = RouteProps<"SetDetails">;

const Details = () => {
  const route = useRoute<SetDetailsRouteProps>();
  const { setID, cardSet } = route.params ?? {};

  const [cards, setCards] = useState<PokemonTCG.Card[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [apiLoading, setApiLoading] = useState<boolean>(false);
  const [orderBy, setOrderBy] = useState<string>("id");

  //buttons for sorting and their api strings
  const buttons = ["Name", "Supertype", "default"];
  const params = ["name", "supertype", "id"];

  useEffect(() => {
    const firstGet = async () => await getNextPage(1);
    firstGet();
    setLoading(false);
  }, []);

  const getNextPage = async (
    pNum?: number,
    state?: boolean,
    sortBy?: string
  ) => {
    setApiLoading(true);
    await sendGetReq(
      {
        pageNum: pNum || pageNumber + 1,
        id: setID,
        orderBy: sortBy || orderBy,
      },
      PokeTCGManager.getCardsInSet,
      (res) => {
        setCards(state ? [...cards, ...res] : res);
        setPageNumber(pNum + 1);
      }
    );
    setApiLoading(false);
  };

  const sortingHandler = async (param) => {
    setCards([]);
    setOrderBy(param);
    await getNextPage(1, false, param);
  };

  const openModalHandler = (imgSrc) => {
    setImageSrc(imgSrc);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <Container>
      <OrderByComponent
        setSortParam={sortingHandler}
        buttons={buttons}
        params={params}
      />
      <SetHeader
        img={cardSet.images.logo}
        name={cardSet.name}
        amount={cardSet.total}
        release={cardSet.releaseDate}
      />
      {loading ? (
        <LoadingComponent />
      ) : (
        <FlatList
          data={cards}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          renderItem={({ item }) => (
            <CardInfo info={item} onPress={openModalHandler} />
          )}
          onEndReachedThreshold={0.2}
          onEndReached={() => getNextPage(pageNumber, true)}
          ListFooterComponent={() =>
            apiLoading && (
              <ActivityIndicator size="large" color={theme.colors.bg.loading} />
            )
          }
          ListFooterComponentStyle={{
            width: "100%",
            height: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      )}
      <Modal visible={openModal} animationType="slide">
        <Container>
          <TouchOp onPress={closeModal}>
            <AntDesign name="close" size={45} color="black" />
          </TouchOp>
          <Img source={{ uri: imageSrc }} resizeMode="contain" />
        </Container>
      </Modal>
    </Container>
  );
};

export default Details;

const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Img = styled.Image`
  width: 94%;
  height: 80%;
`;

const TouchOp = styled.TouchableOpacity`
  align-self: center;
  right: 46%;
  top: 90%;
  position: absolute;
  width: 45px;
  height: 45px;
`;
