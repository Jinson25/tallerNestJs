import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from '../entities/usuarios.entity';


@Injectable()
export class UserService {
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
