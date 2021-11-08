import React from "react";
import styled from "styled-components/native";

import Text from "./ui/Text";

const SetHeader = ({ img, name, amount, release }) => {
  return (
    <Container>
      <ImgBkg source={{ uri: img }} overlayColor="black" resizeMode="contain" />
      <TextContainer>
        <Text variant="big" typeColor="colorless">
          {name}
        </Text>
        <TextRow>
          <Text variant="header" typeColor="colorless">
            released {release}
          </Text>
          <Text variant="header" typeColor="colorless">
            {amount} cards
          </Text>
        </TextRow>
      </TextContainer>
    </Container>
  );
};

export default SetHeader;

const Container = styled.View`
  height: 160px;
  width: 100%;
  margin-bottom: 10px;
`;

const ImgBkg = styled.ImageBackground`
  height: 160px;
  width: 100%;
  opacity: 0.4;
  background-color: ${({ theme }) => theme.colors.bg.dark};
`;

const TextContainer = styled.View`
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  height: 160px;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 10px 10px;
`;

const TextRow = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
`;
