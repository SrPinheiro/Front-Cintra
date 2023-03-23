
import React, { useEffect, useState } from 'react';
import { Container } from "../../../components/containers";
import { Footer } from "../../../components/footer";
import { Logo } from "../../../components/Logo/logo1";
import {useNavigate} from "react-router-dom";

import { Box, ContainerButtons, ContainerDate, ContainerTitle, ContainerValues, GreenButton, Header, Input, InputDateTime, Main, Option, RedButton, Select, TextArea, Title } from "./styles/styles";
import { isAuth } from '../../home/component/auth';
export const MarcarConsulta = _ => {
    const navigate = useNavigate()

    const [profissional, setProfissional] = useState('');
    const [dataHoraConsulta, setDataHoraConsulta] = useState('');
    const [comentarioc, setComentario] = useState('');
    const [componentList, setComponentList] = useState([])

    useEffect( _ => {
        if(!isAuth()){
            navigate('/')
        }
        let url = 'http://srpinheiro.com:8080/doctors/especialidades'

        fetch(url, {
            method: 'GET',
            credentials: 'include',
            headers: {
            'Content-Type': 'application/json'
            }
        }).then(response => response.json()
        ).then(data =>{
            const newComponentList = data.map(_ => <option value={_.name}>{_.name}</option>);
            setComponentList(newComponentList);
            setProfissional(data[0]['name'])
        })
        
    }, []);
    
    const buttonConfirmarAction = _ => {
        const url = 'http://srpinheiro.com:8080/consultas'

        const data = {
            doctor: profissional,
            data_da_consulta: dataHoraConsulta.replace('T', ' '),
            comentario: comentarioc,
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
    const buttonCancelarAction = _ =>{navigate('/')}

    


    const changeSelectValue = _ => {
        setProfissional(_.target.value)
        
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
                                {componentList}
                            </Select>

                        </ContainerTitle>
                            
                        <ContainerValues>
                            <ContainerDate>
                                <p>Informe a data e hora da consulta</p>
                                <input type='datetime-local' onChange={_ => {setDataHoraConsulta(_.target.value)}}></input>
                            </ContainerDate>

                            <TextArea placeholder='Comente sobre seu problema.' onChange={_ => setComentario(_.target.value)}></TextArea>

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