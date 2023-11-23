// Company.controller.ts
import { Controller, Get, Param , Delete, Put, Post, Body} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from "./dto/create-company.dto";
import { UpdateCompanyDto } from './dto/update-company.dto';


@Controller('company')
export class CompanyController {
constructor(private readonly companyService: CompanyService) {}

  @Get('/:id')
    findCompany(@Param('id') id: number) {
        const all = this.companyService.findCompany(id);
        return all;
  }

  @Get('/login/:username')
  findCompanybyusername(@Param('username') username: string) {
      const all = this.companyService.findCompanybyusername(username);
      return all;
}

  @Get()
    findAllCompany() {
        const all = this.companyService.findAllCompany();
        return all;
  }

  @Post()
    AddNewCompany(@Body() createCompanyDto: CreateCompanyDto){
      return this.companyService.addNewCompany(createCompanyDto);
    }

  @Delete('/:id')
    async deleteCompany(@Param('id') id: number) {
    const deletedCompany = await this.companyService.deleteCompany(id);
    return deletedCompany;
    }
  
  @Put('/:id')
    async updateCompany(@Param('id') id: number, @Body() updateCompanyDto: UpdateCompanyDto) {
    const updatedCompany = await this.companyService.updateCompany(id, updateCompanyDto);
    return updatedCompany;
    }
  
}
