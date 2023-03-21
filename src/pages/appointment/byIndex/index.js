import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Container } from "../../../components/containers";
import { Footer } from "../../../components/footer";
import { Header, Main, LeftContainer, Box, PersonDiv, ButtonContainer, NormalButton, BadButton, TextArea, ContainerComentario } from "./styles/styles";
import { Logo } from "../../../components/Logo/logo1";
import { isAuth } from "../../home/component/auth";


export const AppointmentByIndex = _ =>{
    const {id} = useParams();
    const navigate = useNavigate();

    const [cliente, setCliente] = useState("");
    const [medico, setMedico] = useState("");
    const [data, setData] = useState("");
    const [valor, setValor] = useState("");
    const [comentario, setComentario] = useState("");

    useEffect( _ => {
        if(!isAuth()){
            navigate('/')
        }
        
    }, []);

    const url = `http://srpinheiro.com:8080/consultas/${id}`;


    fetch(url, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
        })
            .then(response => response.json())
            .then(data => {
                setCliente(data['client']['name'])
                setMedico(data['doctor'])
                setData(data['data_da_consulta'])
                setValor(data['preco'])
                setComentario(data['comentario'])
            })

    const modificarConsultaAction = _ => {
        fetch(url, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
            }).then(_ => {navigate('/home')})


    }
    const voltarAction = _ => {
        navigate('/home')
    }
    
    return(
            <Container>
                <Header>
                    <Logo>Cintra</Logo>
                </Header>
                <Main>
                    <LeftContainer id='leftcontainer'>
                        <Box>
                            <h2>Consulta</h2>
                            <PersonDiv>
                                <h4>Cliente:&nbsp;</h4>
                                <p>{cliente}</p>
                            </PersonDiv>

                            <PersonDiv>
                                <h4>Medico:&nbsp;</h4>
                                <p>{medico}</p>
                            </PersonDiv>

                            <PersonDiv>
                                <h4>Data:&nbsp;</h4>
                                <p>{data}</p>
                            </PersonDiv>

                            <PersonDiv>
                                <h4>Valor:&nbsp;</h4>
                                <p>R${valor}</p>
                            </PersonDiv>

                            <ContainerComentario>
                                <h4>Comentario:&nbsp;</h4>
                                <textarea value={comentario} readOnly></textarea>
                            </ContainerComentario>

                            <ButtonContainer>
                                <NormalButton onClick={voltarAction}>Voltar</NormalButton>
                                <BadButton onClick={modificarConsultaAction}>Cancelar Consulta</BadButton>
                            </ButtonContainer>
                            
                        </Box>

                    </LeftContainer>

                </Main>
                <Footer>
                Desenvolvido por: Leonardo Pinheiro | IFNMG
                </Footer>
            </Container>
    );

}