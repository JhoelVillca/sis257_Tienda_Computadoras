import { Usuario } from 'src/usuario/entities/usuario.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Decimal128 } from 'typeorm/browser';

@Entity('vendedor')
export class Vendedor {
  @PrimaryGeneratedColumn('uuid')
  id: number | undefined;

  @Column('uuid')
  usuario_id: number | undefined;

  @Column('varchar', { length: 30 })
  nombre_completo: string | undefined;

  @Column('varchar', { length: 20 })
  telefono: string | undefined;

  @Column('decimal', { precision: 10, scale: 2 })
  salario: number | undefined;

   @Column('date')
   fecha_contratacion: Date | undefined;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date | undefined;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date | undefined;

  @DeleteDateColumn({ name: 'fecha_eliminacion' })
  fechaEliminacion: Date | undefined;

  @OneToOne(() => Usuario)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario | undefined;
}