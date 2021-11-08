import React, { memo } from "react";

import styled from "styled-components/native";

import BkgColorView from "./ui/BkgColorView";
import Text from "./ui/Text";

const CardInfo = ({ info, onPress }) => {
  const { images, name, hp, subtypes, supertype, flavorText, types, rules } =
    info;
  const typeColor = types ? types[0].toLowerCase() : "default";

  const onImgClickHandler = () => {
    onPress(images.large);
  };

  return (
    <CardContainer bgColor={typeColor}>
      <ContentContainer>
        <TouchOp onPress={onImgClickHandler}>
          <CardImage source={{ uri: images.small }} resizeMode="contain" />
        </TouchOp>
        <TextContainer>
          <TextRow>
            <Text variant="header" typeColor={typeColor}>
              {name}
            </Text>
            <Text variant="body" typeColor={typeColor}>
              {hp && `${hp} hp`}
            </Text>
          </TextRow>
          <Text variant="title" typeColor={typeColor}>
            {supertype}
          </Text>
          {subtypes &&
            subtypes.map((item, index) => (
              <Chip
                key={`subtypes-${index}`}
                variant="regular"
                typeColor={typeColor}
                borderColor={typeColor}
              >
                {item}
              </Chip>
            ))}
        </TextContainer>
      </ContentContainer>
      <Text variant="body" typeColor={typeColor}>
        {flavorText && flavorText}
        {rules && rules[0]}
      </Text>
    </CardContainer>
  );
};

export default memo(
  CardInfo,
  (prevProps, nextProps): any => prevProps.show === nextProps.show
);

const CardContainer = styled(BkgColorView)`
  margin: 8px 3%;
  shadow-color: ${({ theme }) => theme.colors.bg.grey80};
  shadow-offset: 5px 5px;
  shadow-opacity: 0.3;
  elevation: 5;
  border-radius: 25px;
  overflow: hidden;
  padding: 2%;
`;

const ContentContainer = styled.View`
  flex-direction: row;
  padding: 1%;
  align-items: flex-start;
  justify-content: space-between;
`;

const TextContainer = styled.View`
  justify-content: center;
  align-items: flex-end;
  width: 60%;
`;

const TextRow = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  padding-left: 10px;
`;

const TouchOp = styled.TouchableOpacity`
  min-height: 200px;
  width: 40%;
`;

const CardImage = styled.Image`
  min-height: 200px;
  width: 100%;
`;

const Chip = styled(Text)`
  border-radius: 25px;
  border-width: 1px;
  margin: 5px;
  padding: 4px 6px 4px 8px;
`;
