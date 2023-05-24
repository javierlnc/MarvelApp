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
    padding-left: 10px;
`;
export const RightNavbar = styled.div`
    flex: 30%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 10px;
    
`;
export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 116px;
    display: flex;
    border-bottom: solid #3C3C41 1.5px;
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
export const Icon = styled.img`
    margin:30px;
    max-width: 16px;
    height: auto;
`;
export const NavbarExtendedContainer= styled.div``;
