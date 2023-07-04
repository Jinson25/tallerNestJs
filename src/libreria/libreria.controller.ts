import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AuthorService } from './services';
import { CreateAuthorDto } from './dto/create-libreria.dto';


@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorService.create(createAuthorDto);
  }

  @Get()
  findAll() {
    return this.authorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAuthorDto: CreateAuthorDto) {
    return this.authorService.update(id, updateAuthorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorService.remove(id);
  }
}
