import { Column, Entity } from 'typeorm';
import { Base } from './base.entity';
import { IsBoolean, IsEmail, IsMobilePhone, IsNotEmpty, IsOptional, IsString, Length, MaxLength } from 'class-validator';

@Entity()
export class User extends Base {
  @Column({
    nullable: false,
    unique: true
  })
  @IsNotEmpty()
  @IsString()
  @Length(3, 30)
  userName: string;

  @Column({
    nullable: false
  })
  @IsNotEmpty()
  @IsString()
  @Length(8, 80)
  passWord: string;

  @Column({
    nullable: true
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  firstName: string;

  @Column({
    nullable: true
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  lastName: string;

  @Column({
    nullable: false,
    unique: true
  })
  @IsNotEmpty()
  @IsMobilePhone('tr-TR')
  @Length(10, 30)
  phone: string;

  @Column({
    nullable: false,
    unique: true
  })
  @IsNotEmpty()
  @IsEmail()
  @Length(3, 300)
  email: string;
}
