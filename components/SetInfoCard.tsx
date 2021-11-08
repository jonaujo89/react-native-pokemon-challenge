import React, { useState, useEffect, memo } from "react";
import { useNavigation } from "@react-navigation/core";
import styled from "styled-components/native";

import { NavProps } from "../screens";

import Text from "./ui/Text";

type HomeNavProps = NavProps<"Home">;

const SetCard = ({ cardSet }) => {
  const navigation = useNavigation<HomeNavProps>();

  const [legalitiesChip, setLegalitiesChip] = useState<string[]>([]);

  const { legalities, images, name, id, series } = cardSet;

  useEffect(() => {
    setLegalitiesChip(Object.keys(legalities));
  }, []);

  const onPressHandler = () => {
    navigation.navigate("SetDetails", { setID: id, cardSet });
  };

  return (
    <CardContainer onPress={onPressHandler}>
      <Logo source={{ uri: images.logo }} resizeMode="contain" />
      <ContentContainer>
        <InfoContainer>
          <Text>
            name:
            <Text variant="header"> {name}</Text>
          </Text>
          <Text>
            series:
            <Text variant="title"> {series}</Text>
          </Text>
          <ListContainer>
            {legalitiesChip.map((item, index) => (
              <Chip key={`legalities-${id}-${index}`} variant="regular">
                {item}
              </Chip>
            ))}
          </ListContainer>
        </InfoContainer>
        <SymbolContainer>
          <Symbol source={{ uri: images.symbol }} resizeMode="center" />
        </SymbolContainer>
      </ContentContainer>
    </CardContainer>
  );
};

export default memo(
  SetCard,
  (prevProps, nextProps): any => prevProps.show === nextProps.show
);

const CardContainer = styled.TouchableOpacity`
  height: 310px;
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  margin: 8px 3%;
  shadow-color: ${({ theme }) => theme.colors.bg.grey80};
  shadow-offset: 5px 5px;
  shadow-opacity: 0.3;
  elevation: 5;
  border-radius: 25px;
  overflow: hidden;
  padding: 3px 6px 5px 6px;
`;

const Logo = styled.Image`
  height: 200px;
  width: auto;
`;

const Symbol = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

const ContentContainer = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 0 2%;
`;

const InfoContainer = styled.View`
  align-items: flex-start;
`;

const ListContainer = styled.View`
  flex-direction: row;
`;

const Chip = styled(Text)`
  border-radius: 25px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.bg.chipBorder};
  margin: 5px;
  padding: 4px 6px 4px 8px;
  align-self: center;
  background-color: ${({ theme }) => theme.colors.bg.chip};
`;

const SymbolContainer = styled.View`
  justify-content: flex-end;
`;
