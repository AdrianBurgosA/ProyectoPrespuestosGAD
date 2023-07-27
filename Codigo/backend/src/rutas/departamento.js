const express = require("express");
const router = express.Router();
const Course = require("../models/Course"); // Ajusta la ruta al modelo "Course" de Sequelize

// Ruta para crear un nuevo curso
router.post("/departamento", async (req, res) => {
  const { codigoDepartamento, codigoMunicipio, nombre, descripcion, presupuestoTotal, gastos } = req.body;
  
  try {
    const departamento = await Course.create({
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
  
// Ruta para obtener todos los cursos
router.get("/courses", async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.json(courses);
  } catch (error) {
    console.error('Error al obtener los cursos:', error);
    res.status(500).json({ message: error.message });
  }
});

// Ruta para obtener un curso por su ID
router.get("/courses/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const course = await Course.findByPk(id);
    res.json(course);
  } catch (error) {
    console.error('Error al obtener el curso:', error);
    res.status(500).json({ message: error.message });
  }
});

// Ruta para obtener cursos por nivel
router.get("/coursesByLevel/:level", async (req, res) => {
  const { level } = req.params;

  try {
    const courses = await Course.findAll({ where: { level: level } });
    res.json(courses);
  } catch (error) {
    console.error('Error al obtener los cursos por nivel:', error);
    res.status(500).json({ message: error.message });
  }
});

// Ruta para obtener cursos sin año escolar
router.get("/coursesWithoutSchoolYear", async (req, res) => {
  try {
    const courses = await Course.findAll({ where: { idSchoolYear: null } });
    res.json(courses);
  } catch (error) {
    console.error('Error al obtener los cursos sin año escolar:', error);
    res.status(500).json({ message: error.message });
  }
});

// Ruta para actualizar un curso
router.put("/courses/:id", async (req, res) => {
  const { id } = req.params;
  const { idSchoolYear } = req.body;

  try {
    const course = await Course.findByPk(id);
    if (!course) {
      return res.status(404).json({ error: 'Curso no encontrado' });
    }

    course.idSchoolYear = idSchoolYear;
    await course.save();

    res.json(course);
  } catch (error) {
    console.error('Error al actualizar el curso:', error);
    res.status(500).json({ message: error.message });
  }
});

// Ruta para eliminar un curso
router.delete("/courses/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const course = await Course.findByPk(id);
    if (!course) {
      return res.status(404).json({ error: 'Curso no encontrado' });
    }

    await course.destroy();

    res.json({ message: 'Curso eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar el curso:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
