// 1)
// Contiene archivos con configuraciones del entorno, como variables de entorno, configuración de la base de datos, puertos, claves de API, etc.

import mongoose from 'mongoose';
import { connect_data } from './connect_data.mjs';

const connect = connect_data

export const connectDB = async() => {
    try {
        await mongoose.connect(connect);

        console.log('Conexión exitosa a MongoDB');
    } catch ( error ) {
        console.error( 'Error al conectar a MongoDB: ', error);
        process.exit(1); // uncaught exception, and it was not handled by a domain or an uncaughtException event handler
    }
}