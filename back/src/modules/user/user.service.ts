// user.service.ts
import { Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class userService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async finduserall(): Promise<User[]> {
        const users = await this.userRepository.find();
      
        if (!users || users.length === 0) {
          throw new NotFoundException("Il n'y a pas d'utilisateur");
        }
        
        return users;
    }

    async findUserByUsername(username: string): Promise<User>{
      const user = await this.userRepository.findOne({ where: { login: String(username) } });
      if (!user) {
        throw new NotFoundException(`Le user avec comme login ${username} non trouvé(e)`);
      }
      return user;
    }

    async finduser(id: number): Promise<User> {
        const user = await this.userRepository.findOne({ where: { id: Number(id) } });
        
        if (!user) {
            throw new NotFoundException(`user avec l'ID ${id} non trouvé(e)`);
        }
        return user;
    } 

    async createUser(createUserDto: CreateUserDto): Promise<User> {
      const user: User = new User();
      user.lastname = createUserDto.lastname;
      user.name = createUserDto.name;
      user.email = createUserDto.email;
      user.description = createUserDto.description;
      user.login = createUserDto.login;
      user.role = createUserDto.role;
      // Hacher le mot de passe avec bcrypt
      const saltRounds = 10; // Le nombre de tours de hachage
      const hashedPassword = await bcrypt.hash(createUserDto.password, saltRounds);
      user.password = hashedPassword;
  
      return this.userRepository.save(user);
    }
    async deleteUser(id: number): Promise<User> {
        const deletedUser = await this.userRepository.findOne({ where: { id: Number(id) } });
        if (deletedUser) {
          await this.userRepository.remove(deletedUser);
          return deletedUser;
        } else {
          throw new NotFoundException(`L'utilisateur avec l'ID ${id} n'a pas été trouvé.`);
        }
    }

    async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
      const user = await this.userRepository.findOne({ where: { id: Number(id) } });
  
      if (!user) {
          throw new NotFoundException(`L'utilisateur avec l'ID ${id} n'a pas été trouvé.`);
      }
  
      // Utilisation de la déconstruction d'objet pour mettre à jour les propriétés de l'utilisateur
      const { lastname, name, email, description, login, mdp, role } = updateUserDto;
  
      user.lastname = lastname;
      user.name = name;
      user.email = email;
      user.description = description;
      user.login = login;
  
      if (mdp) {
          // Hacher le nouveau mot de passe avec bcrypt
          const saltRounds = 10; // Le nombre de tours de hachage
          const hashedPassword = await bcrypt.hash(mdp, saltRounds);
          user.password = hashedPassword;
      }
  
      user.role = role;
  
      return this.userRepository.save(user);
    }
}

