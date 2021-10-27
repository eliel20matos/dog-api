import { HttpException, HttpStatus } from "@nestjs/common";

//Exception chamada quando um ID inexistente for passado por parametro
export class DogNotFoundException extends HttpException {
    constructor(id: number) {
        super(`Doguito de ID:${id} não foi encontrado`, HttpStatus.NOT_FOUND)
    }
}
