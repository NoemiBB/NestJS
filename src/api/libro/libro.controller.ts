import { Controller, Get, Post, Put, Delete, Param, Body, Query, Patch} from '@nestjs/common';
import { Libro } from '../libro';
// import { RestService } from '../rest/rest.service';
import { ListAllEntities } from '../rest/list-all-entities';
import { ListResponse } from '../rest/list-response';
import { ObjectResponse } from '../rest/object-response';
import { LibrosService } from '../libros/libros.service';
import { LibroSinId } from './libro.sinid';

@Controller('libro')
export class LibroController {
    private idActual: number = 0;

    constructor(private libroService: LibrosService){}

    // (1) Get: listado de libros, devuelve un array de libro
    @Get()
    // findAll(@Query() query: ListAllEntities): ListResponse {
    async findAll(): Promise<Libro[]> {
        return this.libroService.findAll();
        // const response = new ListResponse();
        // response.data = this.restService.getLibros();
        // response.data = this.restService.findAll();
        // response.pagination = query;
        // response.pagination.numElements = response.data.length;
        // response.status = 'OK';
        // response.message = '¡Query correcto!';
        // return response;

        
        // const libro = new Libro();
        // let libros = [];

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
        // libros = this.restService.getLibros();        
        
        // return libros;
    }

    // (2) Post: añadir un libro devuelve un libro
    @Post()
    async create(@Body() librosinid: LibroSinId): Promise<Libro> {
        let nuevo: Libro;
        nuevo = await this.libroService.create(librosinid);
        return nuevo;
    }

    @Get(':id')
        findOne(@Param('id') id: string): Promise<Libro> {
        return this.libroService.findById(id);
    }

    @Put(':id')
        async update(@Param('id') id: string, @Body() librosinid: LibroSinId): Promise<Libro> {
        return this.libroService.updateById(id, librosinid);
    }

    @Patch(':id')
        async patch(@Param('id') id: string, @Body() librosinid: LibroSinId): Promise<Libro> {
        return this.libroService.patchById(id, librosinid);
    }

    @Delete(':id')
        remove(@Param('id') id: string): Promise<Libro> {
        return this.libroService.delete(id);
    }
    // addOne(@Body() libro: Libro) {        
        // const nuevo = new Libro();
        // nuevo.id = libro.id;
        // nuevo.titulo = libro.titulo;
        // nuevo.autor = libro.autor;
        // nuevo.fecha = libro.fecha;
        // return libros;

        // Usando el servicio
        // const nuevo = new Libro();
        // nuevo.id = this.idActual;
        // nuevo.titulo = libro.titulo;
        // nuevo.autor = libro.autor;
        // nuevo.fecha = libro.fecha;
        // this.restService.addLibro(libro);
        // this.idActual++;
        // // return nuevo;

        // const res = new ObjectResponse;
        // res.data = libro;
        // res.status = 'OK';
        // res.message = 'Objeto salvado';
        // return res;

        

        // Mostrar el libro        
        // let libros: Libro[];
//        libros = this.findAll();

        // return libros;        
    //}
 
    // (3) /:id get obtener un libro devuelve un libro
    // @Get('/:id')
    // getById(@Param("id") id: number): ObjectResponse {
    
    //     // Usando el servicio
    //     let libro = new Libro();
    //     libro = this.restService.getLibroById(id);

    //     // libro.id = params.id;
    //     // libro.titulo = "Libro 3";
    //     // libro.autor = "Autor 3";
    //     // libro.fecha = new Date(); 

    //     // return libro;

    //     const res = new ObjectResponse;
    //     res.data = libro;
    //     res.status = 'OK';
    //     res.message = 'Correcto id';
    //     return res;
    // }

    // // (4) /:id put modificar un libro devuelve un libro
    // @Put('/:id')
    // modifyById(@Param() params, @Body() libro: Libro): ObjectResponse {
    //     // Usando el servicio
    //     let nuevo = new Libro();    
    //     nuevo = this.restService.getLibroById(params.id);
    //     nuevo.titulo = libro.titulo;
    //     nuevo.autor = libro.autor;
    //     nuevo.fecha = libro.fecha;

    //     this.restService.addLibro(nuevo);

    //     const res = new ObjectResponse;
    //     res.data = libro;
    //     res.status = 'OK';
    //     res.message = 'Correcto id';
    //     return res;

    //     // const nuevo = new Libro();
    //     // nuevo.id = params.id;
    //     // nuevo.titulo = libro.titulo;
    //     // nuevo.autor = libro.autor;
    //     // nuevo.fecha = libro.fecha;

    //     // return nuevo;
    // }
    // // (5) /:id delete borrar un libro devuelve un libro
    // @Delete('/:id')
    // deleteById(@Param() params): Libro {
    //     // Usando el servicio
    //     let nuevo = new Libro();    
    //     nuevo = this.restService.getLibroById(params.id);
    //     nuevo.id = params.id;
    //     nuevo.titulo = "Libro 5";
    //     nuevo.autor = "Autor 5";
    //     nuevo.fecha = new Date();
        
    //     // const libro = new Libro();
    //     // libro.id = params.id;
    //     // libro.titulo = "Libro 5";
    //     // libro.autor = "Autor 5";
    //     // libro.fecha = new Date();   

    //     return nuevo;
    // }
}
