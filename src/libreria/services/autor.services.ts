import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAuthorDto } from '../dto/create-libreria.dto';
import { AuthorEntity } from '../entities/autor.entity';


@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(AuthorRepository)
    private readonly authorRepository: AuthorRepository,
  ) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<AuthorEntity> {
    const author = this.authorRepository.create(createAuthorDto);
    return this.authorRepository.save(author);
  }

  async findAll(): Promise<AuthorEntity[]> {
    return this.authorRepository.find();
  }

  async findOne(id: string): Promise<AuthorEntity> {
    return this.authorRepository.findOne(id);
  }

  async update(
    id: string,
    updateAuthorDto: CreateAuthorDto,
  ): Promise<AuthorEntity> {
    const author = await this.findOne(id);
    if (!author) {
      // Handle error, author not found
    }

    Object.assign(author, updateAuthorDto);
    return this.authorRepository.save(author);
  }

  async remove(id: string): Promise<void> {
    await this.authorRepository.delete(id);
  }
}
