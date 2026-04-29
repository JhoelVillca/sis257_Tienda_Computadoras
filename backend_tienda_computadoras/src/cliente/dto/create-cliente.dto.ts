import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateClienteDto {
  @ApiProperty()   
  @IsNotEmpty({ message: 'El usuario_id es obligatorio' })
  @IsString({ message: 'El usuario_id debe ser una cadena de texto' })
  @MaxLength(50, { message: 'El usuario_id no puede tener mas de 50 caracteres' })
  @Transform(({ value }): string | undefined => (typeof value === 'string' ? value.trim() : value))
  readonly usuario_id: string | undefined ;
                     
  @ApiProperty()
  @IsNotEmpty({ message: 'El nombre_completo es obligatorio' })
  @IsString({ message: 'El nombre_completo debe ser una cadena de texto' })
  @MaxLength(30, { message: 'El nombre_completo no puede tener mas de 30 caracteres' })
  @Transform(({ value }): string | undefined => (typeof value === 'string' ? value.trim() : value))
  readonly nombre_completo: string | undefined;
                 
  @ApiProperty()   
  @IsNotEmpty({ message: 'El telefono es obligatorio' })
  @IsString({ message: 'El telefono debe ser una cadena de texto' })
  @MaxLength(100, { message: 'El telefono no puede tener mas de 100 caracteres' })
  @Transform(({ value }): string | undefined => (typeof value === 'string' ? value.trim() : value))
  readonly telefono: string | undefined;  
                  
  @ApiProperty()
  @IsNotEmpty({ message: 'El nit_facturacion es obligatorio' })
  @IsString({ message: 'El nit_facturacion debe ser una cadena de texto' })
  @MaxLength(30, { message: 'El nit_facturacion no puede tener mas de 30 caracteres' })
  @Transform(({ value }): string | undefined => (typeof value === 'string' ? value.trim() : value))
  readonly nit_facturacion  : string | undefined;

}