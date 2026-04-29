import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto'; 
import { Cliente } from './entities/cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
 
@Injectable()  
export class ClienteService {
  constructor(@InjectRepository(Cliente) private clienteRepository: Repository<Cliente>) {}

  async create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    let cliente = await this.clienteRepository.findOneBy({
      usuario_id: createClienteDto.usuario_id.trim(),   
      nombre_completo: createClienteDto.nombre_completo.trim(), 
      telefono: createClienteDto.telefono.trim(),
      nit_facturacion: createClienteDto.nit_facturacion.trim(), 
    });  
    if (cliente) throw new ConflictException('El cliente ya existe');

    cliente = new Cliente();   
    Object.assign(cliente, createClienteDto);
    return this.clienteRepository.save(cliente);
  } 

  asyncfindAll(): Promise<Cliente[]> {
    return this.clienteRepository.find({ order: { nombre_completo: 'ASC' } });
  }            
  
  async findOne(id: number): Promise<Cliente> {
    const cliente = await this.clienteRepository.findOneBy({ id });
    if (!cliente) throw new NotFoundException('El cliente no existe'); 
    return cliente;      
  }                        

  async update(id: number, updateClienteDto: UpdateClienteDto): Promise<Cliente> {
    const cliente = await this.findOne(id);
    Object.assign(cliente, updateClienteDto);
    return this.clienteRepository.save(cliente);
  }        
   
  async remove(id: number): Promise<Cliente> {
    const cliente = await this.findOne(id);
    return this.clienteRepository.softRemove(cliente);
  }
}
