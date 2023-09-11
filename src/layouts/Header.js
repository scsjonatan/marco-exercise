import React from "react";
import styled from "styled-components";
import MarcoLogo from "../assets/images/marco_logo.png";
import MenuIcon from "@mui/icons-material/Menu";

const HeaderContainer = styled.header`
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
`;

const Headerlogo = styled.img`
  width: 89px;
`;
const Header = () => {
  return (
    <HeaderContainer>
      <Headerlogo src={MarcoLogo} alt="Marco Experiences" />
      <MenuIcon style={{ color: "#fff" }} />
    </HeaderContainer>
  );
};

export default Header;
