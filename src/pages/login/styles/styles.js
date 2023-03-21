import styled from "styled-components";

export const Box = styled.div`
    // background-color: rgba(106, 168, 238, 0.1);
    filter: blur();
    border-radius: 5%;
    height: 80%;
    width: 40%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 20px 0 gray;
    align-items: center;
    justify-content: center;
    
    *{
    margin-top 5px;
    };
    
    div{
        border-radius: 5%;
        
    }

    @media (max-width: 400px) {
        width: 90%;
      }
`;

export const Main = styled.div`
    // background-color: green;
    height: 97%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Div2 = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;

`;
export const Div1 = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Title = styled.h1`
    // color:red;
`;


export const InputContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 30%;
    // background-color: red;


`;

export const Text = styled.h3`
    width: 100%;
    text-align: center;
`;
export const Input = styled.input`
    border: None;
    outline: None;
    background-color: transparent;
    border-bottom: 1px solid black;
    width: 100%;
    text-align: center;
`;

export const InputSecret = styled.input`
    border: None;
    outline: None;
    background-color: transparent;
    border-bottom: 1px solid black;
    width: 100%;
`;

export const GreenButton = styled.button`
    background-color: lime;
    border: None;
    width: 50%;
    height: 10%;
    border-radius: 30px;
    margin-top: 30px;
`;

export const SingUpText = styled.a`
    margin-top: 10px;
    color: gray;
    cursor: pointer;
    
`;
