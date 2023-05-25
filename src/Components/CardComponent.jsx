import React from 'react'
import { CardContainer,CardTitle,ImgCard, InfoCard } from '../Styles/Card';
import vector from "../assets/FormaCard.png";

export const Card=(props) => {
  return (
    <CardContainer>
      <CardTitle>
        <img src ={vector} alt="Forma Decorativa"/>
        <h2>NOMBRE PERSONAJE</h2>
        <img src = {vector} alt="Forma Decorativa"/>
      </CardTitle>
      <ImgCard>
        <img src={props.image} alt="imagen del personaje"/>
      </ImgCard>
      <InfoCard>
        <p>Comics:</p>
        <p>12</p>
      </InfoCard> 
      <InfoCard>
        <p>Peliculas:</p>
        <p>12</p>
      </InfoCard>         
    </CardContainer>
  )
}
