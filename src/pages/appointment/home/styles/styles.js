import styled from "styled-components";


export const Header = styled.header`
    width: 100%;
    height: 10%;
    // background-color: red;
`;

export const Main = styled.header`
    width: 100%;
    height: 87%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // background-color: green;
`;

export const Box = styled.div`
    width: 45%;
    height: 90%;
    border-radius: 30px;
    box-shadow: 0 0 10px 1px gray;
    background-color: rgba(174, 214, 242, 0.29);

    *{
        width: 100%;
    }
`;

export const ContainerTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 20%;
    border-radius: 30px 30px 0 0;

`;

export const ContainerValues = styled.div`
// background-color: blue;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    height: 80%;
    border-radius: 0 0 30px 30px;

    value{
        padding-top: 30px;
        text-align: center;
    }

`;

export const Input = styled.input`
    margin-left: 40px;
    border: None;
    outline: None;
    background-color: transparent;
    border-bottom: 1px solid black;
    width: 80%;
    text-align: center;
`;

export const Select = styled.select`
    outline: None;
    border: None;
    border-bottom: 1px solid black;
    background-color: transparent;
    text-align: center;
    width: 50%;

    option{
        background-color: rgba(174, 214, 242, 0.3);
        color: black;
        Border: None;
        border-radius: 10px;

        &:checked{
            background-color: rgba(174, 214, 242, 1);

        }
        
        &:hover{
            background-color: #f8f8f8;

        }
    };

`;

export const TextArea = styled.textarea`
    padding-top: 20px;
    text-align: center;
    margin-top: 50px;
    border: None;
    border-radius: 30px;
    background-color: transparent;
    box-shadow: 0 0 10px 0 gray;
    outline: none;
    resize: none;
    width: 80%;
    height: 30%;

`;

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    height: 10%;

    button{
        height: 100%;
        margin-top: 80px;
        border-radius: 10px;
        border: none;
        height: 100%;
        width: 40%;
        box-shadow: 0 0 10px 1px gray;
        
    }
`;
export const Title = styled.h3`
    width: 100%;
    text-align: center;

`;
export const GreenButton = styled.button`
    background-color: lime;

`;
export const RedButton = styled.button`
    background-color: red;
`;

export const ContainerDate = styled.div`
    width: 100%;
    // background-color:red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;

    p{
        margin-top: 20px;
        text-align: center;
    }

    input{
        border: None;
        outline: None;
        background-color: transparent;
        border-bottom: 1px solid black;
        width: 40%;
        text-align: center;
    }

`;
