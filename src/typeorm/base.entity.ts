import { IsDate, IsNumber, IsOptional } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export abstract class Base {
    @PrimaryGeneratedColumn({
        type: 'bigint'
    })
    id: number;

    @Column({
        type: 'int',
        nullable: false,
        default: 1
    })
    @IsOptional()
    @IsNumber()
    versionNo: number;

    @Column({
        type: 'bigint',
        nullable: false,
        default: 1
    })
    @IsOptional()
    @IsNumber()
    insertUserId: number;

    @Column({
        type: 'timestamp',
        default: () => 'now()',
        nullable: false
    })
    @IsOptional()
    @IsDate()
    insertDttm: Date;

    @Column({
        type: 'bigint',
        nullable: false,
        default: 1
    })
    @IsOptional()
    @IsNumber()
    versionUserId: number;

    @Column({
        type: 'timestamp',
        default: () => 'now()',
        nullable: false
    })
    @IsOptional()
    @IsDate()
    versionDttm: Date;
}

