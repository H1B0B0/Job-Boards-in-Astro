// User.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'lastname' })
  lastname: string;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'description', nullable: true}) // Ajoutez "nullable: false" pour la contrainte "non null"
  description: string;

  @Column({ name: 'Email' })
  email: string;

  @Column({ name: 'Login' })
  login: string;

  @Column({ name: 'Password' })
  password: string;

  @Column({ name: 'Role' , nullable: true})
  role: string;
}
