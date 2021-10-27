import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Dog } from "../../models/dog.entity";
import { DogsController } from "./dogs.controller";
import { DogsService } from "./dogs.service";

@Module({
    imports: [TypeOrmModule.forFeature([Dog])],
    providers: [DogsService],
    controllers: [DogsController],
    exports: [DogsService]

})

export class DogsModule {}