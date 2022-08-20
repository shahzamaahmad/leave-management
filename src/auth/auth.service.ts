import { Employee } from './../employee/entities/employee.entity';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  generateToken(payload: Employee): string {
    return this.jwtService.sign(payload);
  }
}
