//relacion con roles
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { RoleEntity } from "./roles.model";

@Entity('usuarios', { schema: 'libros' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
  })
  deletedAt: Date;

  @Column('varchar', {
    name: 'username',
    nullable: false,
    unique: true,
    comment: 'Nombre del usuario',
  })
  username: string;

  @Column('varchar', {
    name: 'password',
    nullable: false,
    comment: 'contraseña del usuaro',
  })
  password: string;

  @Column('varchar', {
    name: 'email',
    nullable: false,
    comment: 'Correo electronico del usuaro',
  })
  email: string;

  @ManyToMany(() => RoleEntity, role => role.users)
  roles: RoleEntity[];
}