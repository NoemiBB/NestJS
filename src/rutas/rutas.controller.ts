import { Controller, Post, Get } from '@nestjs/common';

@Controller('rutas')
export class RutasController {
//     @Get()
//     findAll(@Param() params) {
//         return 'post /rutas/:id' + params.id;
//     }
// }

  // @Post()
  // postSimple(): string {
  //   return 'post /rutas';
  // }

  @Get()
    getSimple(): string {
      return 'get /rutas'; //+ params.id;
  }

  @Post()
    postSimple(): string {
    return 'post /rutas';
  }
}
