// utilisateur.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Advertissement } from '../advertissement/advertissement.entity';

@Entity()
export class Company {
@PrimaryGeneratedColumn()
id: number;

@Column({name :'name'})
name: string;

@Column({name :'Localisation'})
localisation: string;

@Column({name :'Email'})
email: string;

@Column({name :'Login'})
login: string;

@Column({name :'password'})
password: string;

@OneToMany(() => Advertissement, advertissement => advertissement.company)
advertissements: Advertissement[];
}
