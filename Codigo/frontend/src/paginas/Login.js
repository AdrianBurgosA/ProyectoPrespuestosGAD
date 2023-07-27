import React, { useState, useEffect } from "react";
import "../App.css";
import logo from "../img/logo.png";
import { checkLogin } from "../services/login";
import Cookies from "universal-cookie/es6";

const cookies = new Cookies();

const Login = () => {
  const [loginValues, setLoginValues] = useState({
    user: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginValues({ ...loginValues, [name]: value });
  };

  const startSession = (event) => {
    event.preventDefault();
    checkLogin(loginValues, setLoginValues);
  };

  useEffect(() => {
    if (typeof cookies.get("user") !== "undefined") {
      if (cookies.get("type") === "0") {
        window.location.href = "./homeScreenAdmin";
      } else if (cookies.get("type") === "2") {
        window.location.href = "./homeScreenProfessor";
      } else if (cookies.get("type") === "3") {
        window.location.href = "./homeScreenStudent";
      }
    }
  });

  return (
    <form onSubmit={startSession}>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h4 className="mb-0">Iniciar sesión</h4>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-center mb-3">
                  <img src={logo} alt="logo" className="logo" />
                </div>
                {/* USUARIO */}
                <div className="mb-3">
                  <label htmlFor="user" className="form-label">
                    Usuario
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="user"
                    name="user"
                    placeholder="Ingrese su Usuario"
                    value={loginValues.user}
                    onChange={handleChange}
                  />
                </div>

                {/* CONTRASEÑA */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Ingrese su Contraseña"
                    value={loginValues.password}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Ingresar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
