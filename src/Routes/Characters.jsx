import React, {useEffect, useState} from "react";
import { Main } from "../Styles/Home";
import {
  MainContainer,
  ProgressBarContainer,
  ProgressBar,
  SesionMarvel,
  ImagenContainer,
  VideoContainer,
} from "../Styles/Characters";
import video from "../assets/videoplay.mp4";
import SliderCard from "../Components/SliderCard";
export default function Characters() {
  const [characters, setcharacters] = useState([])
  const API = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=6c8f083d369a7664a55b4407a644ee0c&hash=17f8ea5633e145636fa8299222617300';
  const fetchCharacters = (API)=>{
    fetch(API)
    .then(response => response.json())
    .then(data => setcharacters(data.data.results))
    .catch(error => console.log(error));
  };
  useEffect(()=>{
    fetchCharacters(API);
  } )
  return (
    <Main>
      <MainContainer>
        <SesionMarvel>
          <ProgressBarContainer> 
            <h2>PROGRESO DE PELICULAS PRODUCIDAS</h2>
            <ProgressBar></ProgressBar>
          </ProgressBarContainer>
          <VideoContainer>
            <video src={video} autoPlay loop muted />
          </VideoContainer>
          <ImagenContainer>
          </ImagenContainer>
        </SesionMarvel>
        <SliderCard characters={characters}>
        
        </SliderCard>
      </MainContainer>
    </Main>
  );
}
