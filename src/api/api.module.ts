import { Module } from '@nestjs/common';
import { LibroController } from './libro/libro.controller';
import { RestService } from './rest/rest.service';
import { AdminModule } from './admin/admin.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LibroSchema } from './libro/libro.schema';
import { LibrosService } from './libros/libros.service';

@Module({
  controllers: [LibroController],
  providers: [RestService, LibrosService],
  imports: [AdminModule,
            MongooseModule.forFeature([{ 
              name: 'Libro', 
              schema: LibroSchema,
              collection: 'libro'}]),
  ]
})
export class ApiModule {}
