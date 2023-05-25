import styled from "styled-components";
import imagen from "../assets/img1.jpeg";
export const MainContainer = styled.div` 
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 80%;
`;
export const SesionMarvel = styled.div`
    height: 30%;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: center;
`;
export const ProgressBarContainer = styled.div`
    width: 510px;
    height: 192px;
    background-color: #111111;
    border: 0.75px solid #42331A;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2{
        color: #F0E6D2;
        font-size: 20px;
        font-family: 'Playfair Display', serif;
        margin: 23px;
    }
`;
export const ProgressBar = styled.div`
    position: relative;
    margin:21px;
    width: 80%;
    height: 20px;
    background-color: #D9D9D9;
    border: 4px solid #1E2328;
    overflow: hidden;
    box-shadow: 0px 0px 4px #FFA942, 0px 0px 4px rgba(255, 169, 66, 0.25), 0px 0px 7px rgba(255, 169, 66, 0.25);
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
    max-width: 80%;
    height: 500px;
    margin:22px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap:20px;
    grid-auto-flow: column;
`;
