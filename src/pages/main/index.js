import {Header, Main, LoginButton, Div1, Div2, DoctorImage} from "./styles/style";
import { Logo } from "../../components/Logo/logo1";
import {Container} from "../../components/containers";
import {Footer} from "../../components/footer";
import doctor_girl from './images/doctor_girl.png'
import { useNavigate } from "react-router-dom";
import {FiUser} from "react-icons/fi";
import { useEffect } from "react";
import { isAuth } from "../home/component/auth";


function Init() {
    const navigate = useNavigate();

    const LoginButtonAction = _ =>{
        navigate("/singIn")
    }

    useEffect( _ => {
        if(isAuth()){
            navigate('/home')    
        }
    }, []); 
    
    return(
        <Container>
            <Logo>Cintra</Logo>
            <Header>
                <LoginButton onClick={LoginButtonAction}>
                    <p>Login</p>
                    <FiUser></FiUser>
                </LoginButton>
            </Header>

            <Main>
                <Div1>
                    <DoctorImage src={doctor_girl}></DoctorImage>


                </Div1>
                <Div2>
                    <div>
                        <p>Procurando por um atendimento médico de qualidade e confiança? Então você precisa </p>
                        <p>conhecer o Cintra, um site de saúde hospitalar que oferece serviços de excelência para </p>
                        <p>seus pacientes.</p>
                        <p>&nbsp;</p>
                        <p>Com mais de 20 anos de experiência no mercado, o Cintra conta com uma equipe </p>
                        <p>multidisciplinar de profissionais altamente capacitados e comprometidos com a saúde e o </p>
                        <p>bem-estar de seus pacientes</p>
                        <p>&nbsp;</p>
                        <p>Aqui, você encontra uma ampla variedade de especialidades médicas, como cardiologia,</p>
                        <p>neurologia, ortopedia, oncologia, entre outras, além de serviços de diagnóstico e </p>
                        <p>tratamento de última geração.</p>
                        <p>&nbsp;</p>
                        <p>Com uma estrutura moderna e equipamentos de alta tecnologia, o Cintra oferece um</p>
                        <p>atendimento personalizado e humanizado, focado em garantir a satisfação e o conforto </p>
                        <p>de seus pacientes.</p>
                        <p>&nbsp;</p>
                        <p>Não deixe sua saúde em segundo plano. Venha para o Cintra e descubra o melhor em </p>
                        <p>atendimento médico hospitalar. Agende agora mesmo sua consulta!</p>
                        <p></p>
                    </div>
                </Div2>
            </Main>

            <Footer>
                Desenvolvido por: Leonardo Pinheiro | IFNMG
            </Footer>
        </Container>
    )
}

export default Init;