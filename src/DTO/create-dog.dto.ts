import { IsNotEmpty, IsString } from "class-validator";

export class CreateDogDto {
    @IsString()
    @IsNotEmpty()
    readonly raca: string;

    @IsString()
    @IsNotEmpty()
    readonly origem: string;

    @IsString()
    @IsNotEmpty()
    readonly pelagem: string;
    
    @IsString()
    @IsNotEmpty()
    readonly porte: string;
}