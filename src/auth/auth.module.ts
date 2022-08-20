import { EmployeeModule } from './../employee/employee.module';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Module({
  controllers: [],
  providers: [LocalStrategy],
  exports: [],
  imports: [PassportModule, EmployeeModule],
})
export class AuthModule {}
