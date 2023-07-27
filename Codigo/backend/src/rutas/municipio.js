const express = require("express");
const router = express.Router();
const Municipio = require("../modelos/municipio"); 

router.post("/municipio", async (req, res) => {
  const { codigoMunicipio, nombre, descripcion, ubicacion, presupuesto } = req.body;
  
  try {
    const municipio = await Municipio.create({
      mun_codigo: codigoMunicipio,
      mun_nombre: nombre,
      mun_descripcion: descripcion,
      mun_ubicacion: ubicacion,
      mun_presupuesto: presupuesto
    });

    res.json({
      result: true,
      message: "Se realizó el ingreso del municipio con exito.",
      requestDB: municipio
    });

  } catch (error) {
    console.error('Error al crear un Municipio:', error);
    res.status(500).json({
      result: false,
      message: "No se pudieron registrar los datos del municipio.",
      error: error.message
    });
  }
});


router.get("/municipios", async (req, res) => {
  try {
    const municipios = await Municipio.findAll();
    res.json(municipios);

  } catch (error) {
    console.error('Error al obtener los municipios:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;