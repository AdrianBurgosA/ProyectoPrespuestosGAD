import axios from 'axios'
import Cookies from 'universal-cookie/es6'

const cookies = new Cookies()
const baseUrl = "localhost:3001";

export function checkLogin(loginValues, setLoginValues) {

    const response =  axios.get(`${baseUrl}/usuarios/${loginValues.usuario}`)
    .then(response => {
        const data = response.data;
        var dataLogin = null;
        
        if (data.usu_clave === loginValues.clave) {
            dataLogin = data;
        }
        
        if (dataLogin !== null) {
            cookies.set('id', dataLogin.usu_codigo, {path: "/"});
            cookies.set('nombreUsuario', dataLogin.usu_nombre_usuario, {path: "/"});
            cookies.set('tipo', dataLogin.usu_tipo, {path: "/"});
            window.alert('Bienvenido');

            switch (dataLogin.usu_tipo) {
                case 1:
                    window.location.href = "./admin";
                    break;

                case 2:
                    window.location.href = "./lider";
                    break;

                case 3:
                    window.location.href = "./empleado";
                    break;
            }
        }else {
            setLoginValues({
                usuario: '',
                clave: ''
            });
            
            window.alert('Usuario o contraseña incorrectos');
        }

    }).catch(error => {
        console.log(error);
    })
    
}

