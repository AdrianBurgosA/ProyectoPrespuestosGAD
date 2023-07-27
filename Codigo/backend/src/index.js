const express = require('express');
const app = express();
const municipio = require('./rutas/municipio');
const departamento = require('./rutas/departamento');
const proyecto = require('./rutas/proyecto');

const PORT = 3001;
var cors = require('cors');
app.use(cors());

// Ruta de bienvenida
app.get('/', (req, res) => {
  res.send('¡Bienvenido al backend de presupuesto del GAD!');
});

// Utiliza las rutas de cursos
app.use(express.json());
app.use(municipio);
app.use(departamento);
app.use(proyecto);

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});