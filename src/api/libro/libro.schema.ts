import * as mongoose from 'mongoose';
export const LibroSchema = new mongoose.Schema({    
    //id: Number,
    titulo: String,
    autor: String,
    fecha: Date,
});