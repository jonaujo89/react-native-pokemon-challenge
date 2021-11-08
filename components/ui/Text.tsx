import styled from "styled-components/native";

//manage all text styles in one file

const big = (theme) => `
  font-size: ${theme.fontSizes.big};
  font-family: ${theme.fonts.bodyBold};
`;

const header = (theme) => `
  font-size: ${theme.fontSizes.header};
  font-family: ${theme.fonts.headerBold};
`;

const title = (theme) => `
  font-size: ${theme.fontSizes.title};
  font-family: ${theme.fonts.bodyBold};
`;

const regular = (theme) => `
  font-size: ${theme.fontSizes.regular};
`;

const small = (theme) => `
  font-size: ${theme.fontSizes.text};
`;

const body = (theme) => `
  font-size: ${theme.fontSizes.body};
`;

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.header};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const variants = {
  header,
  regular,
  small,
  body,
  title,
  big,
};

const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
  ${({ fontSize }) => (fontSize ? `font-size: ${fontSize}` : null)}
  ${({ typeColor, theme }) =>
    typeColor ? `color: ${theme.colors.text[typeColor.toLowerCase()]}` : null}
    ${({ borderColor, theme }) =>
    borderColor
      ? `border-color: ${theme.colors.text[borderColor.toLowerCase()]}`
      : null}
`;

export default Text;

Text.defaultProps = {
  variant: "body",
};
