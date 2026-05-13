import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsNumber,
  IsInt,
  Min,
  IsOptional,
  IsObject,
} from 'class-validator';

export class CreateProductoDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @MaxLength(100, { message: 'El nombre no puede tener mas de 100 caracteres' })
  @Transform(({ value }): string | undefined =>
    typeof value === 'string' ? value.trim() : value,
  )
  readonly nombre: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'La marca es obligatoria' })
  @IsString({ message: 'La marca debe ser una cadena de texto' })
  @MaxLength(50, { message: 'La marca no puede tener mas de 50 caracteres' })
  @Transform(({ value }): string | undefined =>
    typeof value === 'string' ? value.trim() : value,
  )
  readonly marca: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'La categoria es obligatoria' })
  @IsString({ message: 'La categoria debe ser una cadena de texto' })
  @MaxLength(50, {
    message: 'La categoria no puede tener mas de 50 caracteres',
  })
  @Transform(({ value }): string | undefined =>
    typeof value === 'string' ? value.trim() : value,
  )
  readonly categoria: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El precio es obligatorio' })
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'El precio debe ser un número con máximo 2 decimales' },
  )
  @Min(0, { message: 'El precio no puede ser negativo' })
  readonly precio: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El stock es obligatorio' })
  @IsInt({ message: 'El stock debe ser un número entero' })
  @Min(0, { message: 'El stock no puede ser negativo' })
  readonly stock: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject({ message: 'Las especificaciones deben ser un objeto JSON' })
  readonly especificaciones?: Record<string, any>;
}
