import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductoService {
  constructor(@InjectRepository(Producto) private productoRepository: Repository<Producto>) {}

  async create(createProductoDto: CreateProductoDto): Promise<Producto> {
    let producto = await this.productoRepository.findOneBy({
      nombre: createProductoDto.nombre?.trim(),
      marca: createProductoDto.marca?.trim(),
    });
    if (producto) throw new ConflictException('El producto ya existe');

    producto = new Producto();
    Object.assign(producto, createProductoDto);
    return this.productoRepository.save(producto);
  }

  async findAll(): Promise<Producto[]> {
    return this.productoRepository.find({ order: { nombre: 'ASC' } });
  }

  async findOne(id: string): Promise<Producto> {
    const producto = await this.productoRepository.findOneBy({ id });
    if (!producto) throw new NotFoundException('El producto no existe');
    return producto;
  }

  async update(id: string, updateProductoDto: UpdateProductoDto): Promise<Producto> {
    const producto = await this.findOne(id);
    Object.assign(producto, updateProductoDto);
    return this.productoRepository.save(producto);
  }

  async remove(id: string): Promise<Producto> {
    const producto = await this.findOne(id);
    return this.productoRepository.softRemove(producto);
  }
}
