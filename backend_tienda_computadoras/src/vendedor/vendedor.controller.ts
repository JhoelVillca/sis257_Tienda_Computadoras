import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { VendedorService } from './vendedor.service';
import { CreateVendedorDto } from './dto/create-vendedor.dto';
import { UpdateVendedorDto } from './dto/update-vendedor.dto';

@Controller('vendedor')
export class VendedorController {
  constructor(private readonly vendedorService: VendedorService) {}

  @Post()
  create(@Body() createVendedorDto: CreateVendedorDto) {
    return this.vendedorService.create(createVendedorDto);
  }

  @Get()
  findAll() {
    return this.vendedorService.findAll();
  }

  @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: number) {
      return this.vendedorService.findOne(id);
    }
  

  @Patch(':id')
    update(@Param('id', ParseUUIDPipe) id: number, @Body() updateVendedorDto: UpdateVendedorDto) {
      return this.vendedorService.update(id, updateVendedorDto);   
    }

  @Delete(':id')
    remove(@Param('id', ParseUUIDPipe) id: number) {
      return this.vendedorService.remove(id);
    }
}
