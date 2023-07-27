import logo from './logo.svg';
import './App.css';
import Login from './paginas/Login'
import Admin from './paginas/Admin';
import Lider from './paginas/Lider';
import Empleado from './paginas/Empleado';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/lider" element={<Lider/>} />
        <Route path="/empleado" element={<Empleado/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
