//relacion con autores
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { AuthorEntity } from './autor.entity';

@Entity('libros', { schema: 'ventas' })
export class LibroEntity {
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
        name: 'title',
        nullable: false,
        comment: 'nombre del libro',
    })
    title: string;

    @Column('number', {
        name: 'price',
        nullable: false,
        comment: 'precio del libro',
    })
    price: number;

    @Column('varchar', {
        name: 'description',
        nullable: false,
        comment: 'descripción del libro',
    })
    description: string;

    @Column('varchar', {
        name: 'image',
        nullable: false,
        comment: 'imagen del libro',
    })
    image: string;

    @Column('number', {
        name: 'autor',
        nullable: false,
        comment: 'Author del libro',
      })
      autor: AuthorEntity;
    //relacion
    @ManyToOne(() => AuthorEntity, author => author.libros)
    author: AuthorEntity;
}
