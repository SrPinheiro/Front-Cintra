
import React, { useState } from 'react';
import { Container } from "../../../components/containers";
import { Footer } from "../../../components/footer";
import { Logo } from "../../../components/Logo/logo1";
import {useNavigate} from "react-router-dom";

import { Box, ContainerButtons, ContainerDate, ContainerTitle, ContainerValues, GreenButton, Header, Input, InputDateTime, Main, Option, RedButton, Select, TextArea, Title } from "./styles/styles";
export const MarcarConsulta = _ => {
    const navigate = useNavigate()

    const [profissional, setProfissional] = useState('');
    const [dataHoraConsulta, setDataHoraConsulta] = useState('');
    const [comentarioc, setComentario] = useState('');

    const buttonConfirmarAction = _ =>{
        const url = 'http://srpinheiro.com:8080/consultas'

        const data = {
            doctor: profissional,
            data_da_consulta: dataHoraConsulta.replace('T', ' '),
            comentario: comentarioc,
            preco: document.getElementById('preco').value
        }
        
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(response => {})
            .then(data => {console.log(data)})
            .catch(error => error)
            .then(() => {
                navigate("/home")       
            })
    }
    const buttonCancelarAction = _ =>{navigate("/home")}

    


    const changeSelectValue = _ => {
        let valor;
        switch(_.target.value){
            case "Medico Geral":
                valor = 150.00;
                break;
            case "Pediatra":
                valor = 200.00;
                break;
            case "Cardiologista":
                valor = 350.00;
                break;
            case "Dermatologista":
                valor = 250.00;
                break;
            case "Ginecologista":
                valor = 300.00;
                break;
            case "Neurologista":
                valor = 400.00;
                break;
            case "Oftalmologista":
                valor = 200.00;
                break;
            case "Psiquiatra":
                valor = 350.00;
                break;
            case "Radiologista":
                valor = 300.00;
                break;
            case "Cirurgiao":
                valor = 500.00;
                break;
            default:
                valor = 0;
                break;
        }
        setProfissional(_.target.value)
        document.getElementById('preco').textContent="Preço R$" + valor;
        document.getElementById('preco').value = valor;
        
    }

    return (
        <React.StrictMode>
            <Container>
                <Header>
                    <Logo>Cintra</Logo>
                </Header> 
                <Main>
                    <Box>
                        <ContainerTitle>
                            <Title>Profissinal:</Title>
                            <Select onChange={changeSelectValue}>
                                <option value="Medico Geral">Medico Geral</option>
                                <option value="Pediatra">Pediatra</option>
                                <option value="Cardiologista">Cardiologista</option>
                                <option value="Dermatologista">Dermatologista</option>
                                <option value="Ginecologista">Ginecologista</option>
                                <option value="Neurologista">Neurologista</option>
                                <option value="Oftalmologista">Oftalmologista</option>
                                <option value="Psiquiatra">Psiquiatra</option>
                                <option value="Radiologista">Radiologista</option>
                                <option value="Cirurgiao">Cirurgião plástico</option>
                            </Select>

                        </ContainerTitle>
                            
                        <ContainerValues>
                            <ContainerDate>
                                <p>Informe a data e hora da consulta</p>
                                <input type='datetime-local' onChange={_ => {setDataHoraConsulta(_.target.value)}}></input>
                            </ContainerDate>

                            <TextArea placeholder='Comente sobre seu problema.' onChange={_ => setComentario(_.target.value)}></TextArea>

                            <value id='preco' value={150}>Preço R$150.00</value>

                            <ContainerButtons>
                                <RedButton onClick={buttonCancelarAction} >Cancelar</RedButton> 
                                <GreenButton onClick={buttonConfirmarAction}>Confirmar</GreenButton>
                            </ContainerButtons>
                            
                        </ContainerValues>
                    </Box>

                </Main>
                
                <Footer>
                Desenvolvido por: Leonardo Pinheiro | IFNMG
                </Footer>
            </Container>
        </React.StrictMode>

    );
}