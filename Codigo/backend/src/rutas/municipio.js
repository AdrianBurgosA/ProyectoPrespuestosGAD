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

// Ruta para obtener un curso por su ID
router.get("/municipios/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const municipio = await Municipio.findByPk(id);
    res.json(municipio);

  } catch (error) {
    console.error('Error al obtener el municipio:', error);
    res.status(500).json({ message: error.message });
  }
});

// Ruta para actualizar un curso
router.put("/municipios/:id", async (req, res) => {
  const { id } = req.params;
  const { idSchoolYear } = req.body;

  try {
    const Municipio = await Municipio.findByPk(id);
    if (!Municipio) {
      return res.status(404).json({ error: 'Curso no encontrado' });
    }

    Municipio.idSchoolYear = idSchoolYear;
    await Municipio.save();

    res.json(Municipio);
  } catch (error) {
    console.error('Error al actualizar el curso:', error);
    res.status(500).json({ message: error.message });
  }
});

// Ruta para eliminar un curso
router.delete("/Municipios/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const Municipio = await Municipio.findByPk(id);
    if (!Municipio) {
      return res.status(404).json({ error: 'Curso no encontrado' });
    }

    await Municipio.destroy();

    res.json({ message: 'Curso eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar el curso:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
