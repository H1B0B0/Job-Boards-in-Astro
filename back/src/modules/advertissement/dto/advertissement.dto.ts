import {
    IsEmail,
    IsNotEmpty,
    IsString,
    MinLength,
    IsOptional
  } from 'class-validator';
import { Company } from '../../Company/company.entity'; // Assurez-vous d'importer le modèle Company
  
export class AdvertissementDto {
    @IsString()
    @MinLength(2)
    @IsNotEmpty()
    title: string;

    @IsString()
    @MinLength(2)
    description: string;

    @IsString()
    @MinLength(2)
    num: string;
  
    @IsString()
    @MinLength(2)
    @IsNotEmpty()
    localisation: string;
  
    @IsNotEmpty()
    @IsEmail()
    poste: string;
  
    @IsNotEmpty()
    @MinLength(2)
    typeContrat: string;
  
    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    horraires: string;
  
    @IsString()
    @IsNotEmpty()
    pay: string;
  
    @IsNotEmpty()
    company: Company;

    @IsOptional()
    @IsString()
    IdList: number[];
  }
  