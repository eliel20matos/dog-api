import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateDogDto } from "../../DTO/create-dog.dto";
import { UpdateDogDto } from "../../DTO/update-dog.dto";
import { Dog } from '../../models/dog.entity'
import { DogsService } from "./dogs.service";

@Controller('dogs')
export class DogsController {
    //Injeção de dependencias
    constructor(private dogsService: DogsService) { }

    @Get()
    findAll(): Promise<Dog[]> {
        return this.dogsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Dog> {
        return this.dogsService.findOne(id);

    }

    @Post()
    async create(@Body() body: CreateDogDto): Promise<Dog> {
        return this.dogsService.create(body)
    }

    @Patch(':id')
    async update(@Param('id') id, @Body() updateDogDto: UpdateDogDto): Promise<Dog> {
        return this.dogsService.update(id, updateDogDto)
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<void> {
        return this.dogsService.remove(id)
    }
}