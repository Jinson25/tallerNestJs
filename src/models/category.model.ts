import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('categories', {schema:'ventas'})

export class CategoryEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({
        name:'create_at',
        type:'timestamp',
        default:() => 'CURRENT_TIMESTAMP',
    })
    createAt: Date;
    @UpdateDateColumn({
        name: 'update_at',
        type: 'timestamp',
        default:() => 'CURRENT_TIMESTAMP',
    })
    updateAt: Date;
    @DeleteDateColumn({
        name: 'delete_at',
        type: 'timestamp',
        nullable: true,
    })
    delete: Date;

    @Column('varchar', {
        name: 'name',
        nullable: false,
        comment: 'nombre de la categoria',
    }
    )
    name: string;

    @Column('varchar', {
        name: 'description',
        nullable: true,
        comment: 'descripcion de la categoria',
    }
    )
    description: string;
}