import { Controller, Get, Post, Put, Delete, Param, Body} from '@nestjs/common';
import { Libro } from '../libro';
import { identity } from 'rxjs';
import { RestService } from '../rest/rest.service';
import { get } from 'http';

@Controller('libro')
export class LibroController {
    constructor( private restService: RestService){

    }

    // (1) Get: listado de libros, devuelve un array de libro
    @Get()
    findAll() {
         const libro = new Libro();
         let libros = [];
        // Creamos varios libros
        // libro.id = 1;
        // libro.titulo = 'Libro 1';
        // libro.autor = 'Autor 1';
        // libro.fecha = new Date(); 
        // libros.push(libro);

        // libro.id = 11;
        // libro.titulo = 'Libro 11';
        // libro.autor = 'Autor 11';
        // libro.fecha = new Date(); 
        // libros.push(libro);

        // libro.id = 12;
        // libro.titulo = 'Libro 12';
        // libro.autor = 'Autor 12';
        // libro.fecha = new Date(); 
        // libros.push(libro);

        // Usando el servicio
        libros = this.restService.getLibros();
        
        return libros;
    }

    // (2) Post: añadir un libro devuelve un libro
    @Post()
    addOne(@Body() libro: Libro) {
        // const nuevo = new Libro();
        // nuevo.id = libro.id;
        // nuevo.titulo = libro.titulo;
        // nuevo.autor = libro.autor;
        // nuevo.fecha = libro.fecha;
        // return libros;

        // Usando el servicio
        this.restService.addLibro(libro);
        
        // Mostrar el libro        
        let libros: Libro[];
        libros = this.findAll();

        return libros;        
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
