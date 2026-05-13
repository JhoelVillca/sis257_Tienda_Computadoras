import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('producto')
export class Producto {
  @PrimaryGeneratedColumn('uuid')
  id: string | undefined;

  @Column('varchar', { length: 100 })
  nombre: string | undefined;

  @Column('varchar', { length: 50 })
  marca: string | undefined;

  @Column('varchar', { length: 50 })
  categoria: string | undefined;

  @Column('decimal', { precision: 10, scale: 2 })
  precio: number | undefined;

  @Column('int')
  stock: number | undefined;

  @Column('jsonb', { nullable: true })
  especificaciones: Record<string, any> | undefined;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date | undefined;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date | undefined;

  @DeleteDateColumn({ name: 'fecha_eliminacion' })
  fechaEliminacion: Date | undefined;
}
