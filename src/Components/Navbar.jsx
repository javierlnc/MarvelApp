import React from "react";
import {
  NavbarContainer,
  LeftNavbar,
  RightNavbar,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  Icon
} from "../Styles/Navbar";
import LogoImg from "../assets/MarvelLogo.png";
import Notification from "../assets/Notificacion.png";
import Configuration from "../assets/configuration.png";
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
        <RightNavbar>
            <Icon src={Notification}></Icon>
            <Icon src={Configuration}></Icon>
        </RightNavbar>
      </NavbarInnerContainer>
      <NavbarExtendedContainer></NavbarExtendedContainer>
    </NavbarContainer>
  );
}
