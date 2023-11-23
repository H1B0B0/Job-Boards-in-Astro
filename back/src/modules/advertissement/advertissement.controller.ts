// annonce.controller.ts
import { Controller, Get, Param, Post, Put, Body, Delete } from '@nestjs/common';
import { AdvertissementService } from './advertissement.service';
import { AdvertissementDto } from './dto/advertissement.dto';
import { UpdateAdvertissementDto } from './dto/update-advertissement.dto';

@Controller('advertissements')
export class AdvertissementController {
constructor(private readonly advertissementService: AdvertissementService) {}

  @Get('/:id')
  findAdvertissement(@Param('id') id: number) {
      return this.advertissementService.findAdvertissement(id);
  }

  @Get()
  findAdvertissementLocalisation() {
      return this.advertissementService.findAllAdvertissement();
  }
  @Put(":id")
  PutAdvertissement(@Param('id') id: number, @Body() updateAdvertissementDto : UpdateAdvertissementDto) {
    return this.advertissementService.putAdvertissement(id, updateAdvertissementDto);
  }
  
  @Delete("/:id")
  deleteAdvertissement(@Param('id') id:number){
    return this.advertissementService.deleteAdvertissement(id);
  }

  @Post()
  addNewAdvertissement(@Body() advertissementdto : AdvertissementDto){
    return this.advertissementService.addNewAdvertissement(advertissementdto);
  }

}
