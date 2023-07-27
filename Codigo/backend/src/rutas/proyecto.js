const express = require("express");
const router = express.Router();
const Proyecto = require("../modelos/proyecto"); 

router.post("/proyecto", async (req, res) => {
  const { codigoProyecto, codigoDepartamento, nombre, descripcion, fechaInicio, fechaFin, presupuesto, riesgos, recursos } = req.body;
  
  try {
    const proyecto = await Proyecto.create({
      proy_codigo: codigoProyecto,
      dep_codigo: codigoDepartamento,
      proy_nombre: nombre,
      proy_descripcion: descripcion,
      pro_fechaInicio: fechaInicio,
      proy_fechaFin: fechaFin,
      proy_prespuesto: presupuesto,
      proy_riesgos: riesgos,
      proy_recursos: recursos
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