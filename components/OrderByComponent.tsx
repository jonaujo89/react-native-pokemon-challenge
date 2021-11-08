import React, { useState } from "react";
import { ButtonGroup } from "react-native-elements";
import styled from "styled-components/native";

import Text from "./ui/Text";

import { FontAwesome } from "@expo/vector-icons";

import { theme } from "../theme";

const OrderByComponent = ({ setSortParam, buttons, params }) => {
  const [index, setIndex] = useState<number>(buttons.length - 1);
  const [sort, setSort] = useState<boolean>(true);

  const onChangeButton = (ind: number) => {
    setIndex(ind);
    setSortParam(!sort ? "-" + params[ind] : params[ind]);
    return params[ind];
  };

  const onSortChangeHandler = () => {
    setSortParam(sort ? "-" + params[index] : params[index]);
    setSort(!sort);
  };

  return (
    <Container>
      <TextContainer>
        <Text variant="regular">Order By</Text>
      </TextContainer>
      <RowContainer>
        <ButtonGroup
          onPress={onChangeButton}
          selectedIndex={index}
          buttons={buttons}
          containerStyle={{ height: 40, borderRadius: 25, width: "85%" }}
          textStyle={{ fontSize: 14 }}
          selectedButtonStyle={{
            backgroundColor: `${theme.colors.bg.loading}`,
          }}
        />
        <TouchOp onPress={onSortChangeHandler}>
          <FontAwesome
            name={sort ? "sort-amount-asc" : "sort-amount-desc"}
            size={28}
            color={theme.colors.text.default}
          />
        </TouchOp>
      </RowContainer>
    </Container>
  );
};

export default OrderByComponent;

const Container = styled.View`
  height: 80px;
  width: 100%;
  justify-content: center;
`;

const TextContainer = styled.View`
  margin-left: 3%;
`;

const RowContainer = styled.View`
  flex-direction: row;
  width: 100%;
`;

const TouchOp = styled.TouchableOpacity`
  width: 36px;
  height: 40px;
  justify-content: flex-end;
`;
