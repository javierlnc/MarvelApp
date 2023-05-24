import styled from "styled-components";
import imagen from "../assets/img1.jpeg";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const SesionMarvel = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap:20px;
    height: 30%;
    width: 100%;
`;
export const ProgressBar = styled.div`
    width: 510px;
    height: 192px;
    background-color: #111111;
    border: 0.75px solid #42331A;
    display: flex;
    justify-content: center;
    h2{
        color: #F0E6D2;
        font-size: 20px;
        font-family: 'Playfair Display', serif;
        margin: 23px;
    }
`;
export const ImagenContainer = styled.div`
    width: 382px;
    height: 192px;
    background: no-repeat center url(${imagen}) ;
    background-size: cover;
    background-position: bottom;
    border: 0.75px solid #42331A;
    
`;
export const VideoContainer = styled.div`
    width: 382px;
    height: 192px;
    border: 0.75px solid #42331A;
    background-color: #111111;
    video{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
export const CharactersContainer = styled.div`
    width: 100%;
    height: 500px;
    margin:22px;
`;
