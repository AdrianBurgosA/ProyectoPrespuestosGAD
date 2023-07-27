const express = require("express");
const router = express.Router();
const Proyecto = require("../modelos/proyecto"); 

router.post("/proyecto", async (req, res) => {
  const { codigoDepartamento, codigoMunicipio, nombre, descripcion, presupuestoTotal, gastos } = req.body;
  
  try {
    const proyecto = await Proyecto.create({
      dep_codigo: codigoDepartamento,
      mun_codigo: codigoMunicipio,
      dep_nombre: nombre,
      dep_descripcion: descripcion,
      dep_presupuesto_total: presupuestoTotal,
      dep_gastos: gastos
    });

    res.json({
      result: true,
      message: "Se creo el proyecto correctamente.",
      requestDB: proyecto
    });

  } catch (error) {
    console.error('Error al crear el proyecto:', error);
    res.status(500).json({
      result: false,
      message: "No se pudieron registrar los datos del proyecto.",
      error: error.message
    });
  }
});


router.get("/proyectos", async (req, res) => {
  try {
    const proyectos = await Proyecto.findAll();
    res.json(proyectos);

  } catch (error) {
    console.error('Error al obtener los proyectos:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;