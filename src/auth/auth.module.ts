import { EmployeeModule } from './../employee/employee.module';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';

@Module({
  controllers: [],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
  imports: [
    PassportModule,
    EmployeeModule,
    JwtModule.register({
      secret: '!rapid@2542#!',
      signOptions: {
        expiresIn: '60s',
      },
    }),
  ],
})
export class AuthModule {}
