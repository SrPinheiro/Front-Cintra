import {Container} from "../../components/containers";
import {Footer} from "../../components/footer";
import {useNavigate} from "react-router-dom";
import { useState } from 'react';
import {Box, BoxDiv, Div1, Div2, DownDiv, GreenButton, Input, InputContainer, Main, SingUpText, Text, Title, UpperDiv} from "./styles/styles";

export const Doctor = _ =>{
    const [nomeInput, setNomeInput] = useState('');
    const [EmailInput, setEmailInput] = useState('');
    const [CPFInput, setCPFInput] = useState('');
    const [SenhaInput, setSenhaInput] = useState('');
    const [especializacaoInput, setEspecializacao] = useState('');

    function handleChange(event) {

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
            case 'inputEspecializacao':
                setEspecializacao(event.target.value)
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
        const url = 'http://srpinheiro.com:8080/doctors'

        const data = {
            name: nomeInput,
            email: EmailInput,
            cpf: CPFInput,
            password: SenhaInput,
            especialidade: {
                name: especializacaoInput
            }
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
                    <UpperDiv>
                        <Div1 id='teste' className="teste">
                            <Title>Cadastrar Medico</Title>
                        </Div1>

                        <Div2>
                            <BoxDiv>
                                <InputContainer>
                                    <Text>Nome</Text>
                                    <Input id="inputNome" onChange={handleChange}></Input>
                                </InputContainer>

                                <InputContainer>
                                    <Text>Email</Text>
                                    <Input id='inputEmail' onChange={handleChange}></Input>
                                </InputContainer>

                                <InputContainer>
                                    <Text>Senha</Text>
                                    <Input id='inputSenha' type={'password'} onChange={handleChange} ></Input>
                                </InputContainer>

                            </BoxDiv>
                            <BoxDiv>
                                <InputContainer>
                                    <Text>CRM</Text>
                                    <Input id='inputSenha' type={'password'} onChange={handleChange} ></Input>
                                </InputContainer>

                                <InputContainer>
                                    <Text>Instituição</Text>
                                    <Input id='inputSenha' type={'password'} onChange={handleChange} ></Input>
                                </InputContainer>

                                <InputContainer>
                                    <Text>Especialidade</Text>
                                    <Input id='inputEspecializacao' type={'password'} onChange={handleChange} ></Input>
                                </InputContainer>
                            </BoxDiv>
                        </Div2>
                    </UpperDiv>
                    <DownDiv>
                        <GreenButton onClick={SingUpButtonAction}>Cadastrar</GreenButton>
                        <SingUpText onClick={backButtonAction}>Pagina Inicial.</SingUpText>
                </DownDiv>
                </Box>
            </Main>


            <Footer>
                Desenvolvido por: Leonardo Pinheiro | IFNMG
            </Footer>
        </Container>
    )
}