import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { userService } from '../user/user.service';
import { CompanyService } from '../Company/company.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: userService,
    private readonly companyService: CompanyService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findUserByUsername(username);

    if (!user) {
      throw new UnauthorizedException("User not found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException("Invalid password");
    }

    // Remove the 'password' field from the user object
    const { password: userPassword, ...userWithoutPassword } = user;

    return userWithoutPassword;
  }

  async validateCompany(username: string, passwrd: string): Promise<any> {
    const company = await this.companyService.findCompanybyusername(username);

    if (!company) {
      throw new UnauthorizedException("Company not found");
    }

    const isPasswordValid = await bcrypt.compare(passwrd, company.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException("Invalid password");
    }

    // Remove the 'password' field from the company object
    const { password: companyPassword, ...companyWithoutPassword } = company;

    return companyWithoutPassword;
  }

  async login(user: any, userType: string) {
    const payload = { username: user.username, sub: user.id, userType, userRole: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
