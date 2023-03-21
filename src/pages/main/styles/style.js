import styled from "styled-components";

export const Header = styled.header`
    height: 10%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: right;
    overflow: hidden;
    
    button{
        max-width: 150px;
        max-height: 50px;
        color: green;
        margin-right: 10px;
    }
`;

export const Main = styled.main`
    height: 87%;
    display:flex;
    flex-direction: row;
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        height: 100%;
    }

`;

export const LoginButton = styled.button`
    border: None;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    box-shadow: 0 0 10px 1px black;;
    border-radius: 30px;
    
    min-width: 100px;
    min-height: 40px;
    max-width: 150px;
    max-height: 50px;
    
    p{
    margin-right: 10%;
    };
    
    transition: transform 0.2s;
    &:hover{
    transform: scale(1.05);
    }
`;

export const Div1 = styled.div`
    // background-color:red;
`;

export const Div2 = styled.div`
    // background-color: red;
    
    flex-direction: column;
    p{
        text-align: start;
        width: 100%;
        font-family: cursive;
        font-size: clamp(17px, 2vw, 10px);
        
    };
    div{
        width: 100%;
        height: 50%
        max-height: 400px;
        overflow: auto;
        display: flex;
        ::-webkit-scrollbar {
            width: 8px;
            background-color: transparent;
          }
        flex-direction: column;
    }

`;

export const DoctorImage = styled.img`
    height: 70%;
    wifth: 70%;
`;

