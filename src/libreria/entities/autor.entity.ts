//relacion con libros
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { LibroEntity } from "./libro.entity";

@Entity('autores', { schema: 'libros' })
export class AuthorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'create_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;

  @UpdateDateColumn({
    name: 'update_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;

  @DeleteDateColumn({
    name: 'delete_at',
    type: 'timestamp',
    nullable: true,
  })
  delete: Date;

  @Column('varchar', {
    name: 'nombre',
    nullable: false,
    comment: 'nombre del autor',
  })
  nombre: string;

  @Column('varchar', {
    name: 'apellido',
    nullable: false,
    comment: 'apellido del autor',
  })
  apellido: string;

  @Column('string', {
    name: 'ci',
    nullable: false,
    comment: 'cedula del autor',
  })
  ci: number;

  @Column('date', {
    name: 'nacimiento',
    nullable: false,
    comment: 'fecha de nacimiento',
  })
  nacimiento: Date;

  //relacion de uno a muchos
  @OneToMany(() => LibroEntity, book => book.author)
  libros: LibroEntity[];
}
