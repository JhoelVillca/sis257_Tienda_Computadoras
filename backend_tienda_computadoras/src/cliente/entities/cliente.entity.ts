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

@Entity('cliente')
export class Cliente {
  @PrimaryGeneratedColumn('uuid')
  id: string | undefined;

  @Column('uuid')
  usuario_id: string | undefined;

  @Column('varchar', { length: 30 })
  nombre_completo: string | undefined;

  @Column('varchar', { length: 20 })
  telefono: string | undefined;

  @Column('varchar', { length: 50 })
  nit_facturacion: string | undefined;

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