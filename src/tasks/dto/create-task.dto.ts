import {IsBoolean,IsString,MinLength,IsNumber,IsEmail } from 'class-validator';

export class CreateTaskDto {
    @IsString()
    @MinLength(1)
    title: string;

    @IsString()
    @MinLength(1)
    description: string;

    @IsNumber()
    priority: number;

    @IsEmail()
    email: string;

    @IsBoolean()
    estatus: boolean;
}