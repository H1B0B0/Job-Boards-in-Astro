import { Injectable, NotAcceptableException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';


@Injectable()
export class LocalStrategyUser extends PassportStrategy(Strategy, 'user') {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const login = await this.authService.validateUser(username, password);

    return login;
  }
}

@Injectable()
export class LocalStrategyCompany extends PassportStrategy(Strategy, 'company') {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const login = await this.authService.validateCompany(username, password);

    return login;
  }
}

