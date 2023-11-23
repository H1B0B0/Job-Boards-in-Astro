// user.controller.ts
import { Controller, Get, Param, Post, Body, Put, Delete} from '@nestjs/common';
import { userService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class userController {
constructor(private readonly userservice: userService) {}

    @Get('/:id')
    finduser(@Param('id') id: number) {
        const all = this.userservice.finduser(id);
        return all;
    }

    @Get('/login/:username') // Utilisez le même nom de paramètre que dans la route
    findUserByUsername(@Param('username') username: string) {
        const user = this.userservice.findUserByUsername(username);
        return user;
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userservice.createUser(createUserDto);
    }

    @Get()
    async findAllUsers() {
        const users = await this.userservice.finduserall();
        return users;
    }

    @Delete('/:id')
    async deleteUser(@Param('id') id: number) {
    const deletedUser = await this.userservice.deleteUser(id);
    return deletedUser;
    }

    @Put('/:id')
    async updateUser(@Param('id') id: number, @Body() update_UserDto: UpdateUserDto) {
    const updatedUser = await this.userservice.updateUser(id, update_UserDto);
    return updatedUser;
    }
}
