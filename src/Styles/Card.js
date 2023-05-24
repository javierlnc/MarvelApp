import styled from "styled-components";
import bg from "../assets/FondoCard.png"
export const CardContainer = styled.div`
    width: 250px;
    height: 450px;
    background: url(${bg});
    display: flex;
    align-items: center;
`;
export const CardTitle = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    h2{
        font-size: 14px;
        color: white;
        text-align: center; 
    }
    img{
        width: 30px;
        height: auto;
        margin: 10px;
    }
    img:nth-child(3){
        transform: scaleX(-1);
    }
`;