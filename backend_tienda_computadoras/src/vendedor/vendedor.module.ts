import { Module } from '@nestjs/common';
import { VendedorService } from './vendedor.service';
import { VendedorController } from './vendedor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vendedor } from './entities/vendedor.entity';
 
@Module({
  imports: [TypeOrmModule.forFeature([Vendedor])],
  controllers: [VendedorController],
  providers: [VendedorService],
})
export class VendedorModule {}   