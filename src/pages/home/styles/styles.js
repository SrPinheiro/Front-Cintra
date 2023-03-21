import styled from "styled-components";

export const Header = styled.header`
    // background-color: red;
    height: 10%;
    width: 100%;
`;

export const HeaderDiv1 = styled.div`
    display: flex;
    align-items: left;
    width: 100%;
    height: 100%;
    // background-color: red;
`;

export const Main = styled.main`
    // background-color: green;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 87%;
    width: 100%;

`;

export const ContainerConsultas = styled.div`
    // background-color: red;
    overflow-x: scroll;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 70%;

    ::-webkit-scrollbar {
        width: 10px;
        background-color: transparent;
      }
      
      ::-webkit-scrollbar-thumb {
        background-color: lightblue;
        border-radius: 10px;
      }
      
`;

export const ContainerButtons = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.button`
      height: 50%;
      border: None;
      width: 17%;
      border-radius: 30px;
      background-color: lightgreen;
`;

export const ButtonOptions = styled.button`
    background-color: transparent;
    border: None;
    width: 5%;
`;

export const spaceDic = styled.div`
    width: 500px;
    height: 100%;
`;

export const LeftBar = styled.div`
      position: absolute;
      left: 0;
      width: 5%;
      height: 10%;
      background-color: transparent;
      transition: width 0.5s;
      

      *{
        opacity: 0;
        
      };


      &:hover{
        width: 35%;
        background-color: white;
        height: 100%;

        *{
          opacity: 1;

        };
      };
`;