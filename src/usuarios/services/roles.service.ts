import { Injectable, NotFoundException } from '@nestjs/common';
import { RoleEntity } from '../entities/roles.entity';


@Injectable()
export class RoleService {
  private roles: RoleEntity[] = [];

  async createRole(createRoleDto: CreateRoleDto): Promise<RoleEntity> {
    const newRole: RoleEntity = {
      id: Date.now().toString(),
      ...createRoleDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.roles.push(newRole);
    return newRole;
  }

  findAllRoles(): RoleEntity[] {
    return this.roles;
  }

  findRoleById(id: string): RoleEntity {
    const role = this.roles.find((r) => r.id === id);
    if (!role) {
      throw new NotFoundException(`No encontrado`);
    }
    return role;
  }

  updateRole(id: string, updateRoleDto: UpdateRoleDto): RoleEntity {
    const role = this.findRoleById(id);
    const updatedRole = { ...role, ...updateRoleDto, updatedAt: new Date() };
    this.roles = this.roles.map((r) => (r.id === id ? updatedRole : r));
    return updatedRole;
  }

  removeRole(id: string): void {
    const roleIndex = this.roles.findIndex((r) => r.id === id);
    if (roleIndex === -1) {
      throw new NotFoundException(`${id}No ecnontrado`);
    }
    this.roles.splice(roleIndex, 1);
  }
}
