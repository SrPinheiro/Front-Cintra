import styled from "styled-components";

export const Box = styled.div`
    margin-left: 10px;
    margin-right: 10px;
    min-width: 250px;
    height: 60%;
    width: 20%;
    border-radius: 30px;
    box-shadow: 0 0 5px 1px rgba(193, 193, 193, 0.7);
    cursor: pointer;

`;

export const ContainerTitulo = styled.div`
    height: 30%;
    display: flex;
    align-items: center;
    width: 100%;
    overflow-y: auto;
    border-radius: 30px 30px 0 0;
    // background-color: rgb(171, 212, 254);
    background-color: rgba(0, 0, 0, 0.8);
    ::-webkit-scrollbar {
        width: 10px;
        background-color: transparent;
    }

`;

export const ContainerValue = styled.div`
    height: 70%;
    overflow-y: auto;
    width: 100%;
    border-radius: 0 0 30px 30px;
    // background-color: rgba(173, 177, 189, 0.3);
    background-color: aliceblue;
    word-wrap: break-word;

    ::-webkit-scrollbar {
        width: 10px;
        background-color: transparent;
    }

`;

export const Title = styled.h2`
    margin-left: 20px;
    color: aliceblue;
    
`;

export const Value = styled.p`
    padding-top: 15px;
    margin-left: 20px;
    height: 100%;
`;