import { Injectable, Logger } from '@nestjs/common';
import { Libro } from '../libro';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class RestService {
    private libros: Libro[];
    private readonly logger = new Logger(RestService.name);

    constructor(@InjectModel('Libro') private readonly modelo: Model<Libro>) {
        this.libros = [];
    }

    // async findAll(): Promise<Libro[]> {
    //     const promesa = this.modelo.find().exec();
    //     // this.logger.log('findAll' + promesa)
    //     return await promesa;
    // }
    getLibros(): Libro[] {
        return this.libros;
    }

    addLibro(libro: Libro) {
        this.libros.push(libro);
    }

    getLibroById(id: number): Libro {
        let libro: Libro;
        libro = this.libros.find(value => value.id == id);
        this.logger.log(libro);

        if (libro === undefined){
            return new Libro();
        }
        return libro;
    }

    
}
