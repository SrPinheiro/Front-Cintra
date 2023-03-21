import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, ContainerTitulo, ContainerValue, Title, Value } from "./style";

export const ConsultaBox = _ =>{
    const navigation = useNavigate()
    var id = _.id

    const consultaAction = () => {
        navigation(`/appointment/${id}`)
    }

    return(
        <Box onClick={consultaAction}>
            <ContainerTitulo>
                <Title>{_.title}</Title>
            </ContainerTitulo>
            <ContainerValue>
                <Value>
                    {_.value}
                </Value>
            </ContainerValue>
        </Box>
    );
}