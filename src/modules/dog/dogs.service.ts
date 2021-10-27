import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateDogDto } from "../../DTO/create-dog.dto";
import { UpdateDogDto } from "../../DTO/update-dog.dto";
import { Repository } from "typeorm";
import { Dog } from "../../models/dog.entity";
import { DogNotFoundException } from "../../Exceptions/dog-not-foud.exception";

@Injectable()
export class DogsService {
    constructor(
        @InjectRepository(Dog)
        private dogsRepository: Repository<Dog>,
    ) { }


    findAll(): Promise<Dog[]> {
        return this.dogsRepository.find({
            select: ['id', 'raca', 'origem', 'pelagem', 'porte']
        })
    }

    async findOne(id: number): Promise<Dog> {

        const dog = await this.dogsRepository.findOne({
            where: {
                id: id
                //(id-table): (id-param)
            }
        });
        if (!dog) {
            throw new DogNotFoundException(id)
        } else {
            return dog
        }

    }

    async create(createDogDTO: CreateDogDto) {
        const dog = this.dogsRepository.create(createDogDTO);
        return this.dogsRepository.save(dog)
    }

    async update(id: number, updateDogDto: UpdateDogDto): Promise<Dog> {
        const dog = await this.dogsRepository.findOne({ id });
        if (!dog) {
            throw new DogNotFoundException(id)
        } else {
            this.dogsRepository.merge(dog, updateDogDto);
            return await this.dogsRepository.save(dog)
        }

    }

    async remove(id: number) {
        const dog = await this.dogsRepository.findOne({ id });
        if (!dog) {
            throw new DogNotFoundException(id)
        } else {
            this.dogsRepository.remove(dog);
            throw new HttpException(`Doguito com ID:${id} removido com sucesso`, HttpStatus.OK )
        }

    }
}