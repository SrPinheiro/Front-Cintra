import {Container} from "../../components/containers";
import {Footer} from "../../components/footer";
import {useNavigate} from "react-router-dom";
import {Box, Div1, Div2, GreenButton, Input, InputContainer, Main, SingUpText, Text, Title} from "./styles/styles";
import { useEffect, useState } from "react";
import { isAuth } from "../home/component/auth";

export const Login = _ =>{
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    const CadastrarButtonAction = _ =>{
        navigate('/SingUp')
    }
    const LoginButtonAction = _ => {
        const url = 'http://srpinheiro.com:8080/users'

        const data = {
            login: nome,
            password: senha
        }

        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            credentials: 'include',
            headers: {
            'Content-Type': 'application/json'
            }
        })
            .then(response => {
                console.log(response)
            })
            .then(data => {})
            .catch(error => error)
            .then(() => {window.location.href='/'});

    }

    
    

    return(
        <Container>
            <Main>
                <Box>
                    <Div1>
                        <Title>Login</Title>
                    </Div1>

                    <Div2>
                        <InputContainer>
                            <Text>Nome</Text>
                            <Input onChange={_ => setNome(_.target.value) } ></Input>
                        </InputContainer>

                        <InputContainer>
                            <Text>Senha</Text>
                            <Input type={'password'} onChange={_ => setSenha(_.target.value) }></Input>
                        </InputContainer>

                        <GreenButton onClick={LoginButtonAction}>Login</GreenButton>
                        <SingUpText onClick={CadastrarButtonAction}>Não Possui uma conta? Cadastrar.</SingUpText>
                    </Div2>
                </Box>
            </Main>


            <Footer>
                Desenvolvido por: Leonardo Pinheiro | IFNMG
            </Footer>
        </Container>
    )
}