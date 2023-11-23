import { IsOptional, IsString, IsEmail, MinLength, IsNotEmpty } from 'class-validator';
import { Company } from '../../Company/company.entity';

export class UpdateAdvertissementDto {
  @IsOptional()
  @IsString()
  @MinLength(2)
  title?: string;

  @IsOptional()
  @IsString()
  @MinLength(2)
  localisation?: string;

  @IsOptional()
  @IsString()
  @MinLength(2)
  description?: string;

  @IsOptional()
  @IsString()
  @MinLength(2)
  num?: string;

  @IsOptional()
  @IsEmail()
  poste?: string;

  @IsOptional()
  @MinLength(2)
  typeContrat?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  horraires?: string;

  @IsOptional()
  @IsString()
  pay?: string;

  @IsOptional()
  @IsNotEmpty()
  company?: Company;

  @IsOptional()
  @IsString()
  IdList?: Number[];
}
