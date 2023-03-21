import {Container} from "../../components/containers";
import { Footer } from "../../components/footer";
import { Button, ButtonOptions, ContainerButtons, ContainerConsultas, Header, HeaderDiv1, Main, LeftBar } from "./styles/styles";
import { Logo } from "../../components/Logo/logo1";
import { FiAlignJustify } from "react-icons/fi";
// import { render } from "@testing-library/react";
import { ConsultaBox } from "./component/consultaBox/consultaBox";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { NoConsulText } from "./component/NoConsult";
import { isAuth } from "./component/auth";

export const Home = _ => {
    const [componentList, setComponentList] = useState([]);
    const navigate = useNavigate()


    let cookie = {};
  
    document.cookie.split(';').forEach(function(el) {
        let [k,v] = el.split('=');
        cookie[k.trim()] = v;
    })

    
    useEffect( _ => {
        if(!isAuth()){
            navigate('/')
        }
        
    }, []);

    

    const url = 'http://srpinheiro.com:8080/consultas'

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);
                console.log('aaa');
                console.log(data);
                console.log('aaa');

                const newComponentList = data.map(_ => <ConsultaBox title={_.doctor} value={_.comentario} id={_.id}/>);
                setComponentList(newComponentList);
            } else {
                console.error('Erro na requisição');
            }
        }
    };
    xhr.open('GET', url);
    xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();



    //console.log(consultas[0])
    
    /*consultas.forEach(_ => {
        componentList.push(<ConsultaBox title={_.doctor} value={_.comentario}/>);   

    })*/
    


    


    const sideBarButtonAction = _ =>{
        const sidebar = document.getElementById('sidebar')
        sidebar.style.display = 'flex';
    }

    const marcarConsultaAction = _ =>{
        navigate("/appointment")
    }

    

    return(
        <Container>
            <Logo>Cintra</Logo>
            <LeftBar id='sidebar'> <p>ola mundo</p></LeftBar>
            <Header>
                <HeaderDiv1>
                    <ButtonOptions>
                        <FiAlignJustify size={50} onClick={sideBarButtonAction}/>

                    </ButtonOptions>
                </HeaderDiv1>
            </Header>

            <Main>
            <ContainerConsultas>
                {componentList.length === 0 ? <NoConsulText text="Nenhuma consulta Encontrada."/> : componentList}
            </ContainerConsultas>

                <ContainerButtons>
                    <Button onClick={marcarConsultaAction}>Marcar Consulta</Button>
                </ContainerButtons>

            </Main>

            <Footer>
                Desenvolvido por: Leonardo Pinheiro | IFNMG
            </Footer>
        </Container>
    );
}