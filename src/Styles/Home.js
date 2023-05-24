import styled from "styled-components";
import fondo from "../assets/Fondo.png"

export const Main = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image:url(${fondo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-position-y: 110%;
`;
export const HeroSection = styled.div`
    width: 80%;
    height: 80%;
    background-color: #020918;
`;