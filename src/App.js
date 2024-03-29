import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Init from "./pages/main";
import {Login} from "./pages/login"
import {SingUp} from "./pages/register"
import { Home } from './pages/home';
import { MarcarConsulta } from './pages/appointment/home';
import {AppointmentByIndex} from './pages/appointment/byIndex'
import {Farmacia} from './pages/farmacia'
import { Doctor } from './pages/doctor';



function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={""} element={<Init/>} />
              <Route path={"/SingIn"} element={<Login/>} />
              <Route path={"/SingUp"} element={<SingUp/>} />
              <Route path={"/home"} element={<Home/>} />
              <Route path={"/appointment"} element={<MarcarConsulta/>} />
              <Route path={"/appointment/:id"} element={<AppointmentByIndex/>} />
              <Route path={"/shop"} element={<Farmacia/>} />
              <Route path={"/doctor"} element={<Doctor/>} />
              
          </Routes>
      </BrowserRouter>
  );
}

export default App;
