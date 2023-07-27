import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import Login from './paginas/Login'
import Admin from './paginas/Admin';
import Lider from './paginas/Lider';
import Empleado from './paginas/Empleado';
=======
import Login from './paginas/Login';
>>>>>>> 6c08b4da93f4ed9253dbdd2e5b2bee08bbbeb66f
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
<<<<<<< HEAD
        <Route path="/admin" element={<Admin/>} />
        <Route path="/lider" element={<Lider/>} />
        <Route path="/empleado" element={<Empleado/>} />
=======
        {/* <Route path="/home" element={<Home/>} /> */}
>>>>>>> 6c08b4da93f4ed9253dbdd2e5b2bee08bbbeb66f
      </Routes>
    </BrowserRouter>
  )
}

export default App;
