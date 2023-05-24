import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavbarContainer = styled.nav`
    width:100%;
    height:116px;
    background-color: black;
    display: flex;
    flex-direction: column;
`;
export const LeftNavbar = styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
`;
export const RightNavbar = styled.div`
    flex: 30%;
    display: flex;
    justify-content: flex-end;
`;
export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 116px;
    display: flex;
`;
export const NavbarLinkContainer = styled.div`
    display: flex;
    align-items: center;
`;
export const NavbarLink = styled(Link)`
    color: white;
    font-size: 14px;
    text-decoration: none;
    margin:20px;
    font-family: 'Playfair Display', serif;
`;
export const Logo = styled.img`
    margin:20px;
    max-width: 120px;
    height: auto;
`;
export const NavbarExtendedContainer= styled.div``;
