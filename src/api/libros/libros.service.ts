import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Libro } from '../libro';
import { LibroSinId } from '../libro/libro.sinid';

@Injectable()
export class LibrosService {
    libros: Libro[];

    constructor(@InjectModel('Libro') private readonly modelo: Model<Libro>){
        this.libros = [];
    }

    async findAll(): Promise<Libro[]> {
        const promesa = this.modelo.find().exec();
        return await promesa;
    }
    async create(librosinid: LibroSinId): Promise<Libro> {
        const createdLibro = new this.modelo(librosinid);
        return await createdLibro.save();
    }
    async findById(id: string): Promise<Libro> {
        return await this.modelo.findById(id);
    }
    async updateById(id: string, librosinid: LibroSinId): Promise<Libro> {
        const cambios = { titulo: librosinid.titulo , autor: librosinid.autor};
        await this.modelo.updateOne({ _id : id }, cambios);
        return await this.modelo.findById(id);
    }
    async patchById(id: string, librosinid: LibroSinId): Promise<Libro> {
        const libroGuardado = await this.modelo.findById(id);
        if(librosinid.titulo != null) {
            libroGuardado.titulo = librosinid.titulo;
        }
        if(librosinid.autor != null) {
            libroGuardado.autor = librosinid.autor;
        }
        if(librosinid.fecha != null) {
            libroGuardado.fecha = librosinid.fecha;
        }
        return await this.modelo.findById(id);
    }
    async delete(id: string): Promise<Libro> {
        const libroGuardado = await this.modelo.findById(id);
        await this.modelo.findOneAndRemove({ _id : id });
        return libroGuardado;
    }
}
