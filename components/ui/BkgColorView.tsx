import styled from "styled-components/native";

const BkgColorView = styled.View`
  ${({ bgColor, theme }) =>
    bgColor ? `background-color: ${theme.colors.types[bgColor]}` : null}
`;

export default BkgColorView;

BkgColorView.defaultProps = {
  bgColor: "default",
};
