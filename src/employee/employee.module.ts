import { AuthService } from './../auth/auth.service';
import { AuthModule } from './../auth/auth.module';
import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { AppModule } from 'src/app.module';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService],
  exports: [EmployeeService],
  // imports: [AppModule],
})
export class EmployeeModule {}
