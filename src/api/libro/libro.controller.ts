import { Controller, Get, Post, Put, Delete, Param, Body} from '@nestjs/common';
import { Libro } from '../../libro';
import { identity } from 'rxjs';

@Controller('libro')
export class LibroController {
    // (1) Get: listado de libros, devuelve un array de libro
    @Get()
    findAll() {
        const libro = new Libro();
        libro.id = 1;
        libro.titulo = 'Libro 1';
        libro.autor = 'Autor 1';
        libro.fecha = new Date(); 

        return libro;
    }

    // (2) Post: añadir un libro devuelve un libro
    @Post()
    addOne(@Body() libro: Libro): Libro {
        const nuevo = new Libro();
        nuevo.id = libro.id;
        nuevo.titulo = libro.titulo;
        nuevo.autor = libro.autor;
        nuevo.fecha = libro.fecha;
        
        return nuevo;
    }
 
    // (3) /:id get obtener un libro devuelve un libro
    @Get('/:id')
    getById(@Param() params): Libro {
        const libro = new Libro();
        libro.id = params.id;
        libro.titulo = "Libro 3";
        libro.autor = "Autor 3";
        libro.fecha = new Date(); 

        return libro;
    }

    // (4) /:id put modificar un libro devuelve un libro
    @Put('/:id')
    modifyById(@Param() params, @Body() libro: Libro): Libro {
        const nuevo = new Libro();
        nuevo.id = params.id;
        nuevo.titulo = libro.titulo;
        nuevo.autor = libro.autor;
        nuevo.fecha = libro.fecha;

        return nuevo;
    }
    // (5) /:id delete borrar un libro devuelve un libro
    @Delete('/:id')
    deleteById(@Param() params): Libro {
        const libro = new Libro();
        libro.id = params.id;
        libro.titulo = "Libro 5";
        libro.autor = "Autor 5";
        libro.fecha = new Date();   

        return libro;
    }
}
