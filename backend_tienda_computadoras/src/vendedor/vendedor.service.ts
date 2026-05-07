import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateVendedorDto } from './dto/create-vendedor.dto';
import { UpdateVendedorDto } from './dto/update-vendedor.dto'; 
import { Vendedor } from './entities/vendedor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
                                   
@Injectable()                              
export class VendedorService {      
  constructor(@InjectRepository(Vendedor) private vendedorRepository: Repository<Vendedor>) {}

  async create(createVendedorDto: CreateVendedorDto): Promise<Vendedor> {
    let vendedor = await this.vendedorRepository.findOneBy({
      usuario_id: createVendedorDto.usuario_id,   
      nombre_completo: createVendedorDto.nombre_completo?.trim(), 
      telefono: createVendedorDto.telefono.trim(),
      salario: createVendedorDto.salario, 
      fecha_contratacion: createVendedorDto.fecha_contratacion
    });      
    if (vendedor) throw new ConflictException('El vendedor ya existe');
                   
    vendedor = new Vendedor();    
    Object.assign(vendedor, createVendedorDto);
    return this.vendedorRepository.save(vendedor);
  } 
                
  async findAll(): Promise<Vendedor[]> {
    return this.vendedorRepository.find({ order: { nombre_completo: 'ASC' } });
  }            
                                
  async findOne(id: number): Promise<Vendedor> {
    const vendedor = await this.vendedorRepository.findOneBy({ id });
    if (!vendedor) throw new NotFoundException('El vendedor no existe'); 
    return vendedor;      
  }                              
                                   
  async update(id: number, updateVendedorDto: UpdateVendedorDto): Promise<Vendedor> {
    const vendedor = await this.findOne(id);
    Object.assign(vendedor, updateVendedorDto);
    return this.vendedorRepository.save(vendedor);
  }        
   
  async remove(id: number): Promise<Vendedor> {
    const vendedor = await this.findOne(id);
    return this.vendedorRepository.softRemove(vendedor);
  }
}                        