import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDefined, IsInt, IsNotEmpty, IsString, MaxLength, Min } from 'class-validator';

export class CreateClienteDto {
  @ApiProperty()   
  @IsDefined({ message: 'El usuario_id es obligatorio' })
  @IsInt({ message: 'El usuario_id debe ser una cadena de texto' })
  @Min(1, { message: 'El usuario_id no puede tener mas de 1 caracteres' })
  readonly usuario_id: number;
                     
  @ApiProperty()
  @IsNotEmpty({ message: 'El nombre_completo es obligatorio' })
  @IsString({ message: 'El nombre_completo debe ser una cadena de texto' })
  @MaxLength(30, { message: 'El nombre_completo no puede tener mas de 30 caracteres' })
  @Transform(({ value }): string | undefined => (typeof value === 'string' ? value.trim() : value))
  readonly nombre_completo: string;
                 
  @ApiProperty()   
  @IsNotEmpty({ message: 'El telefono es obligatorio' })
  @IsString({ message: 'El telefono debe ser una cadena de texto' })
  @MaxLength(100, { message: 'El telefono no puede tener mas de 100 caracteres' })
  @Transform(({ value }): string | undefined => (typeof value === 'string' ? value.trim() : value))
  readonly telefono: string ;  
                  
  @ApiProperty()
  @IsDefined({ message: 'El nit_facturacion es obligatorio' })
  @IsInt({ message: 'El nit_facturacion debe ser un número entero' })
  @Min(1, { message: 'El nit_facturacion debe tener mas de 1 caracter' })
  readonly nit_facturacion  : number;

}