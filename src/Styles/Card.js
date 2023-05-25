import styled from "styled-components";
import bg from "../assets/FondoCard.png"
import border from "../assets/border.png"
export const CardContainer = styled.div`
    width: 250px;
    height: 450px;
    background: url(${bg});
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const CardTitle = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 38px;
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
export const ImgCard = styled.div`
    width: 160px;
    height: 160px;
    margin: 20px 0;
    border:30px solid;
    border-radius: 50%;
    border-image-source: url(${border});
    border-image-slice:30;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        border-radius:50%;
        object-fit: cover;
        width: 122px;
        height: 122px;
    }
`;
export const InfoCard = styled.div`
    width: 180px;
    height: 50px;
    display:flex;
    flex-direction: row;
    align-items: center;
    place-content: center;
    border: 1px solid #5B5A56;
    background-color: #1E2328;
    color: white;
    margin: 20px 31px 10px 37px;
    p:first-child{
        font-family: 'Spinnaker', sans-serif;
        font-weight: 400;
        font-size: 16px;
    }
   

`;