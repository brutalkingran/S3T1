import express from 'express';
import { connectDB } from './config/dbConfig.mjs';
import superheroeRoutes from './routes/superheroesRoutes.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear json
app.use(express.json());

// conexión a mongoDB
connectDB();

// Configuración de rutas
app.use('/api', superheroeRoutes);

// manejo de errores para rutas no encontradas
app.use( (req, res) => {
    res.status(404).send({ mensaje: "Ruta no encontrada" });
});

// Iniciar sv
app.listen( PORT, () => {
    console.log( `Servidor escuchando en el puerto ${PORT}` );
});
