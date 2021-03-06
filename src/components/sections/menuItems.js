import React from "react";
import styled from "styled-components";
import { theme } from "../../styles";

const { colors, fontSizes } = theme;

const StyledContainer = styled.li`
  padding-top: 0.61em;
  padding-bottom: 0.61em;
`;

const StyledItem = styled.a`
  color: ${colors.lightGrayishBlue};
  font-size: ${fontSizes.sm};
  font-weight: 300;
`;

const MenuItems = ({ item }) => {
  return (
    <StyledContainer>
      <StyledItem>{item.name}</StyledItem>
    </StyledContainer>
  );
};

export default MenuItems;
