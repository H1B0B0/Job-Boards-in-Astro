// utilisateur.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { userController } from './user.controller';
import { userService } from './user.service';

@Module({
imports: [TypeOrmModule.forFeature([User])],
controllers: [userController],
providers: [userService],
})
export class UserModule {}
