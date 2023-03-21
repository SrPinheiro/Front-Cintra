import styled from "styled-components";


export const Header = styled.div`
    width:100%;
    height: 10%;
    // background-color: red;
`;

export const Main = styled.div`
    width: 100%;
    height: 87%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    
`;

export const LeftContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 90%;
    // background-color: green;
`;

export const Box = styled.div`
    position: relative;
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: safe center;
    height: 80%;
    border-radius: 30px;
    box-shadow: 0 0 10px 1px gray;
    background-color: rgba(174, 214, 242, 0.29);
    h2{
        position: absolute;
        top: 0;
        margin-top: 7%;
        text-align: center;
    };

    *{
        width: 100%;
    };
`;

export const ButtonContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 20%;
    bottom: 0;

    // background-color: blue;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    button{
        border: none;
        width: 30%;
        height: 50%;
        border-radius: 10px;
    }

`;

export const PersonDiv = styled.div`
// background-color: red;
    // border-radius: 30px 30px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 10%;

    h4{
        text-align: right;/
        background-color: green;
    }


`;;

export const NormalButton = styled.button`
    background-color: lightblue;
    
`;

export const BadButton = styled.button`
    background-color: rgba(232, 103, 103, 0.626);
`;


export const ContainerComentario = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;

    textarea{
        background-color: transparent;
        border: none;
        outline: none;
        overflow-y: auto;
        resize: none;
        height: 50%;
        padding: 20px;
        text-align: center;
    }

    *{
        width: 70%;
    }
`;