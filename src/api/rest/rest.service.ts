import { Injectable, Logger } from '@nestjs/common';
import { Libro } from '../libro';

@Injectable()
export class RestService {
    libros: Libro[];
    private readonly logger = new Logger(RestService.name);

    constructor() {
        this.libros = [];
    }

    getLibros(): Libro[] {
        return this.libros;
    }

    addLibro(libro: Libro) {
        this.libros.push(libro);
    }

    getLibroById(id: number): Libro {
        let libro: Libro;
        libro = this.libros.find(value => value.id == id);

        return libro;
    }

    
}
