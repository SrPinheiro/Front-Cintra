import {Container} from "../../components/containers";
import {Footer} from "../../components/footer";
import {useNavigate} from "react-router-dom";
import { useState } from 'react';
import {Box, Div1, Div2, GreenButton, Input, InputContainer, Main, SingUpText, Text, Title} from "./styles/styles";

export const SingUp = _ =>{
    const [nomeInput, setNomeInput] = useState('');
    const [EmailInput, setEmailInput] = useState('');
    const [CPFInput, setCPFInput] = useState('');
    const [SenhaInput, setSenhaInput] = useState('');

    function handleChange(event) {
        console.log(event.target.id)

        switch(event.target.id){
            case 'inputNome':
                setNomeInput(event.target.value)
                break;
            case 'inputEmail':
                setEmailInput(event.target.value)
                break;

            case 'inputCPF':
                setCPFInput(event.target.value)
                break;

            case 'inputSenha':
                setSenhaInput(event.target.value)
                break;
            default:
                console.log("outra opção!")
        }
    }

    const navigation = useNavigate();
    const backButtonAction = _ =>{
        navigation('/')
    }
    const SingUpButtonAction = _ => {
        const url = 'http://srpinheiro.com:8080/users'

        const data = {
            name: nomeInput,
            email: EmailInput,
            cpf: CPFInput,
            password: SenhaInput
        }

        fetch(url, {
            method: 'POST',
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
                        <Title>Cadastrar</Title>
                    </Div1>

                    <Div2>
                        <InputContainer>
                            <Text>Nome</Text>
                            <Input id="inputNome" onChange={handleChange}></Input>
                        </InputContainer>

                        <InputContainer>
                            <Text>Email</Text>
                            <Input id='inputEmail' onChange={handleChange}></Input>
                        </InputContainer>

                        <InputContainer>
                            <Text>CPF</Text>
                            <Input id='inputCPF' onChange={handleChange}></Input>
                        </InputContainer>

                        <InputContainer>
                            <Text>Senha</Text>
                            <Input id='inputSenha' type={'password'} onChange={handleChange} ></Input>
                        </InputContainer>

                        <GreenButton onClick={SingUpButtonAction}>Cadastrar</GreenButton>
                        <SingUpText onClick={backButtonAction}>Pagina Inicial.</SingUpText>
                    </Div2>
                </Box>
            </Main>


            <Footer>
                Desenvolvido por: Leonardo Pinheiro | IFNMG
            </Footer>
        </Container>
    )
}