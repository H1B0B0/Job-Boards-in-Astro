// utilisateur.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany,JoinColumn } from 'typeorm';
import { Company } from '../Company/company.entity';

@Entity()
export class Advertissement {
@PrimaryGeneratedColumn()
id: number;

@Column({name: "title"})
title: string;

@Column({name: "description"})
description: string;

@Column({name: "num"})
num: string;

@Column({name: "location"})
localisation: string;

@Column({name: "poste"})
poste: string;

@Column({name: "type"})
typeContrat: string;

@Column({name: "horraires"})
horraires: string;

@Column({name: "pay"})
pay: string;

@Column('text', {name: "IdList", array: true, nullable: true })
IdList: Number[];

@ManyToOne(() => Company, company => company.advertissements)
@JoinColumn({ name: 'Id_company' })
company: Company;

}
