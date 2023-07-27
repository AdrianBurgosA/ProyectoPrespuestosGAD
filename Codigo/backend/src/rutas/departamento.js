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
      message: "Se realizó el ingreso de los cursos con éxito.",
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
    res.json(Departamentos);

  } catch (error) {
    console.error('Error al obtener los departamentos:', error);
    res.status(500).json({ message: error.message });
  }
});

// Ruta para obtener un curso por su ID
router.get("/Departamentos/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const Departamento = await Departamento.findByPk(id);
    res.json(Departamento);
  } catch (error) {
    console.error('Error al obtener el curso:', error);
    res.status(500).json({ message: error.message });
  }
});

// Ruta para obtener cursos por nivel
router.get("/DepartamentosByLevel/:level", async (req, res) => {
  const { level } = req.params;

  try {
    const Departamentos = await Departamento.findAll({ where: { level: level } });
    res.json(Departamentos);
  } catch (error) {
    console.error('Error al obtener los cursos por nivel:', error);
    res.status(500).json({ message: error.message });
  }
});

// Ruta para obtener cursos sin año escolar
router.get("/DepartamentosWithoutSchoolYear", async (req, res) => {
  try {
    const Departamentos = await Departamento.findAll({ where: { idSchoolYear: null } });
    res.json(Departamentos);
  } catch (error) {
    console.error('Error al obtener los cursos sin año escolar:', error);
    res.status(500).json({ message: error.message });
  }
});

// Ruta para actualizar un curso
router.put("/Departamentos/:id", async (req, res) => {
  const { id } = req.params;
  const { idSchoolYear } = req.body;

  try {
    const Departamento = await Departamento.findByPk(id);
    if (!Departamento) {
      return res.status(404).json({ error: 'Curso no encontrado' });
    }

    Departamento.idSchoolYear = idSchoolYear;
    await Departamento.save();

    res.json(Departamento);
  } catch (error) {
    console.error('Error al actualizar el curso:', error);
    res.status(500).json({ message: error.message });
  }
});

// Ruta para eliminar un curso
router.delete("/Departamentos/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const Departamento = await Departamento.findByPk(id);
    if (!Departamento) {
      return res.status(404).json({ error: 'Curso no encontrado' });
    }

    await Departamento.destroy();

    res.json({ message: 'Curso eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar el curso:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
