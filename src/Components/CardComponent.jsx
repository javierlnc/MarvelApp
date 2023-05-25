import React from 'react'
import { CardContainer,CardTitle,ImgCard, InfoCard } from '../Styles/Card';
import vector from "../assets/FormaCard.png";

export const Card=({characters}) => {
  return (
    <CardContainer>
      <CardTitle>
        <img src ={vector} alt="Forma Decorativa"/>
        <h2>{characters.name}</h2>
        <img src = {vector} alt="Forma Decorativa"/>
      </CardTitle>
      <ImgCard>
        <img src={`${characters.thumbnail.path}.${characters.thumbnail.extension}`} alt="imagen del personaje"/>
      </ImgCard>
      <InfoCard>
        <p>Comics:</p>
        <p>{characters.comics.available}</p>
      </InfoCard> 
      <InfoCard>
        <p>Peliculas:</p>
        <p>12</p>
      </InfoCard>         
    </CardContainer>
  )
}
