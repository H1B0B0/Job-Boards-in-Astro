import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { userService } from '../user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { Company } from '../Company/company.entity';
import { CompanyModule } from '../Company/company.module';
import { CompanyService } from '../Company/company.service';
import { LocalStrategyUser } from './local.strategy';
import { LocalStrategyCompany } from './local.strategy';

@Module({
  imports: [
    UserModule,
    CompanyModule,
    PassportModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '60s' },
    }),
    TypeOrmModule.forFeature([User, Company]),
  ],
  providers: [AuthService, userService, LocalStrategyUser, CompanyService, LocalStrategyCompany],
  controllers: [AuthController],
})
export class AuthModule {}
