import React from 'react'
import { CardContainer,CardTitle } from '../Styles/Card';
import vector from "../assets/FormaCard.png";

export const Card=(props) => {
  return (
    <CardContainer>
      <CardTitle>
        <img src ={vector} alt="Forma Decorativa"/>
        <h2>NOMBRE PERSONAJE</h2>
        <img src = {vector} alt="Forma Decorativa"/>
      </CardTitle>

        
    </CardContainer>
  )
}
