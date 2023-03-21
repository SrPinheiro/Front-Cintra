// import {Title, Input} from "./styles/DefaultInput";
import React from "react";

export const DefaultInput = props => {

    const style = {
        display: 'flex',
        alignItems: 'right'
    };
    return(
        <React.StrictMode>
            <Title style={"display: flex; align-text: right;"}>{props.text}</Title>
            <Input/>
        </React.StrictMode>
    );
}