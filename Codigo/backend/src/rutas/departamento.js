const express = require("express");
const router = express.Router();
const Departamento = require("../modelos/Departamento"); 

router.post("/departamento", async (req, res) => {
  const { codigoDepartamento, codigoMunicipio, nombre, descripcion, presupuestoTotal, gastos } = req.body;
  
  try {
    const departamento = await Departamento.create({
      dep_codigo: codigoDepartamento,
      mun_codigo: codigoMunicipio,
      dep_nombre: nombre,
      dep_descripcion: descripcion,
      dep_presupuesto_total: presupuestoTotal,
      dep_gastos: gastos
    });

    res.json({
      result: true,
      message: "Se creo el departamento correctamente.",
      requestDB: departamento
    });

  } catch (error) {
    console.error('Error al crear un departamento:', error);
    res.status(500).json({
      result: false,
      message: "No se pudieron registrar los datos del departamento.",
      error: error.message
    });
  }
});


router.get("/departamentos", async (req, res) => {
  try {
    const departamentos = await Departamento.findAll();
    res.json(departamentos);

  } catch (error) {
    console.error('Error al obtener los departamentos:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;