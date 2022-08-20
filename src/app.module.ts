import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
// import { ManagerModule } from './manager/manager.module';
// import { AdminModule } from './admin/admin.module';

@Module({
  imports: [EmployeeModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
