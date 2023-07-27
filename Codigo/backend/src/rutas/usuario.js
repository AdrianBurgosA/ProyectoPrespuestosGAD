const express = require("express");
const router = express.Router();
const Usuario = require("../modelos/usuario"); 

router.post("/usuario", async (req, res) => {
  const { codigoUsuario, codigoCargo, codigoDepartamento, nombre, apellido, cedula, telefono } = req.body;
  
  try {
    const usuario = await Usuario.create({
      usu_codigo: codigoUsuario,
      car_codigo: codigoCargo,
      dep_codigo: codigoDepartamento,
      usu_nombre: nombre,
      usu_apellido: apellido,
      usu_cedula: cedula,
      usu_telefono: telefono
    });

    res.json({
      result: true,
      message: "Usuario creado correctamente.",
      requestDB: usuario
    });

  } catch (error) {
    console.error('Error al crear el usuario:', error);
    res.status(500).json({
      result: false,
      message: "No se pudieron registrar los datos del usuario.",
      error: error.message
    });
  }
});


router.get("/usuarios", async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);

  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/usuarios/:nombreUsuario", (req, res) => {
    const { nombreUsuario } = req.params;

    Usuario.findOne({ usu_nombre: nombreUsuario })
    .then((data) => {
        if (data) {
            res.json(data);
        } else {
            res.status(404).json({ message: "Usuario no encontrado" });
        }
    })
    .catch((error) => res.json({ message: error }));
});

module.exports = router;