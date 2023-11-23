// Company.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './company.entity';
import { CreateCompanyDto } from "./dto/create-company.dto";
import { UpdateCompanyDto } from './dto/update-company.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly CompanyRepository: Repository<Company>,
  ) { }

  async findCompany(id: number): Promise<Company> {
    const company = await this.CompanyRepository
      .createQueryBuilder('company')
      .leftJoinAndSelect('company.advertissements', 'advertissement')
      .where('company.id = :id', { id })
      .getOne();

    if (!company) {
      throw new NotFoundException(`Company avec l'ID ${id} non trouvée`);
    }

    return company;
  }

  async findCompanybyusername(username: string): Promise<Company> {
    const company = await this.CompanyRepository.findOne({ where: { login: String(username) } });

    if (!company) {
      throw new NotFoundException(`Company avec le nom ${username} non trouvée`);
    }

    return company;
  }

  async addNewCompany(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const company: Company = new Company();
    company.name = createCompanyDto.name;
    company.localisation = createCompanyDto.localisation;
    company.email = createCompanyDto.email;
    company.login = createCompanyDto.login;
    const saltRounds = 10; // Le nombre de tours de hachage
    const hashedPassword = await bcrypt.hash(createCompanyDto.password, saltRounds);
    company.password = hashedPassword;

    return this.CompanyRepository.save(company);
  }

  async findAllCompany(): Promise<Company[]> {
    const Company = await this.CompanyRepository.find();
    return Company;
  }

  async deleteCompany(id: number): Promise<Company> {
    const deletedCompany = await this.CompanyRepository.findOne({ where: { id: Number(id) } });
    if (deletedCompany) {
      await this.CompanyRepository.remove(deletedCompany);
      return deletedCompany;
    } else {
      throw new NotFoundException(`This Company ${id} not found.`);
    }
  }

  async updateCompany(id: number, updateCompanyDto: UpdateCompanyDto): Promise<Company> {
    const company = await this.CompanyRepository.findOne({ where: { id: Number(id) } });

    if (!company) {
      throw new NotFoundException(`Company with id ${id} not found`);
    }

    const { name, localisation, email, login, password } = updateCompanyDto;

    company.name = name;
    company.localisation = localisation;
    company.email = email;
    company.login = login;

    if (password) {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      company.password = hashedPassword;
    }

    return this.CompanyRepository.save(company);
  }
}
