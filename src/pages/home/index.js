import {Container} from "../../components/containers";
import { Footer } from "../../components/footer";
import { Button, ButtonOptions, ContainerButtons, ContainerConsultas, Header, HeaderDiv1, Main, LeftBar } from "./styles/styles";
import { Logo } from "../../components/Logo/logo1";
import { FiAlignJustify } from "react-icons/fi";
import { ConsultaBox } from "./component/consultaBox/consultaBox";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { NoConsulText } from "./component/NoConsult";
import { isAuth } from "./component/auth";

export const Home = _ => {
    const [componentList, setComponentList] = useState([]);
    const [sideBar, setSideBar] = useState([]);
    const [currentUser, setCurrentUser] = useState();
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

        let url = 'http://srpinheiro.com:8080/consultas'

        fetch(url, {
            method: 'GET',
            credentials: 'include',
            headers: {
            'Content-Type': 'application/json'
            }
        }).then(response => response.json()
        ).then(data =>{
            const newComponentList = data.map(_ => <ConsultaBox title={_.doctor} value={_.comentario} id={_.id}/>);
            setComponentList(newComponentList);
        })

        url = 'http://srpinheiro.com:8080/users/me'

        fetch(url, {
            method: "GET",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            const newComponentList = []

            if (data['role']['name'] === 'admin'){
                newComponentList.push(<button onClick={_ => navigate('/doctor')}>Cadastrar Medico</button>)
            }

            newComponentList.push(<button onClick={_ => {navigate('/shop')}}>Farmacia</button>)
            newComponentList.push(<button onClick={logOutButtonAction}>Deslogar</button>)
            

            setSideBar(newComponentList)

        })
            
    }, []);

    
    


    const sideBarButtonAction = _ =>{
        const sidebar = document.getElementById('sidebar')
        sidebar.style.display = 'flex';
    }

    const marcarConsultaAction = _ =>{
        navigate("/appointment")
    }
    const logOutButtonAction = _ => {
        document.cookie = `userToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        window.location.href='/'
    }
    

    return(
        <Container>
            <Logo>Cintra</Logo>
            <LeftBar id='sidebar'>
                {sideBar}
            </LeftBar>
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