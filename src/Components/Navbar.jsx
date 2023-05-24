import React from "react";
import {
  NavbarContainer,
  LeftNavbar,
  RightNavbar,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo
} from "../Styles/Navbar";
import LogoImg from "../assets/MarvelLogo.png"
export default function Navbar() {
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftNavbar>
          <NavbarLinkContainer>
          <Logo src={LogoImg}></Logo>
            <NavbarLink to="/">HOME</NavbarLink>
            <NavbarLink to="/characters">PERSONAJES</NavbarLink>
          </NavbarLinkContainer>
        </LeftNavbar>
        <RightNavbar></RightNavbar>
      </NavbarInnerContainer>
      <NavbarExtendedContainer></NavbarExtendedContainer>
    </NavbarContainer>
  );
}
