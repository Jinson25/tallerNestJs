import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from '../entities/usuarios.entity';
import { CreateUsuariosDto } from '../dto/create-usuarios.dto';
import { UpdateUsuariosDto } from '../dto/update-usuarios.dto';


@Injectable()
export class UserService {
  remove(id: string) {
      throw new Error('Method not implemented.');
  }
  update(id: string, updateUserDto: UpdateUsuariosDto) {
      throw new Error('Method not implemented.');
  }
  findOne(id: string) {
      throw new Error('Method not implemented.');
  }
  findAll() {
      throw new Error('Method not implemented.');
  }
  create(createUserDto: CreateUsuariosDto) {
      throw new Error('Method not implemented.');
  }
  private users: UserEntity[] = [];

  async createUser({ createUserDto }: { createUserDto: CreateUserDto; }): Promise<UserEntity> {
    const newUser: UserEntity = {
      id: Date.now().toString(),
      ...createUserDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.users.push(newUser);
    return newUser;
  }

  findAllUsers(): UserEntity[] {
    return this.users;
  }

  findUserById(id: string): UserEntity {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw new NotFoundException(`Usuario ${id} no encontrado`);
    }
    return user;
  }

  updateUser({ id, updateUserDto }: { id: string; updateUserDto: UpdateUserDto; }): UserEntity {
    const user = this.findUserById(id);
    const updatedUser = { ...user, ...updateUserDto, updatedAt: new Date() };
    this.users = this.users.map((u) => (u.id === id ? updatedUser : u));
    return updatedUser;
  }

  removeUser(id: string): void {
    const userIndex = this.users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
      throw new NotFoundException(`Usuario ${id} no encontrado`);
    }
    this.users.splice(userIndex, 1);
  }
}
