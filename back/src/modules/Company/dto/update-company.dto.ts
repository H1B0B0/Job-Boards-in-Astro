import { IsOptional, IsString, IsEmail, MinLength } from 'class-validator';

export class UpdateCompanyDto {
  @IsOptional() // Marquez le champ comme facultatif, car un PUT ne nécessite pas tous les champs
  @IsString()
  @MinLength(2)
  name?: string;

  @IsOptional()
  @IsString()
  @MinLength(2)
  localisation?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  @MinLength(2)
  login?: string;

  @IsOptional()
  @IsString()
  password?: string;
}
