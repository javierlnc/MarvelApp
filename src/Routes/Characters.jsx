import React from "react";
import { Main } from "../Styles/Home";
import {
  MainContainer,
  ProgressBar,
  SesionMarvel,
  ImagenContainer,
  VideoContainer,
  CharactersContainer,
} from "../Styles/Characters";
import video from "../assets/videoplay.mp4"

export default function Characters() {
  return (
    <Main>
      <MainContainer>
        <SesionMarvel>
          <ProgressBar>
            <h2>PROGRESO DE PELICULAS PRODUCIDAS</h2>
          </ProgressBar>
          <VideoContainer>
            <video src={video} autoPlay loop muted />
          </VideoContainer>
          <ImagenContainer>
          </ImagenContainer>
        </SesionMarvel>
        <CharactersContainer></CharactersContainer>
      </MainContainer>
    </Main>
  );
}
