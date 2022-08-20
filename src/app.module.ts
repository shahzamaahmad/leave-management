// import { Module } from '@nestjs/common';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { AuthModule } from './auth/auth.module';
// import { EmployeeModule } from './employee/employee.module';
// @Module({
//   imports: [
//     TypeOrmModule.forRootAsync({
//       imports: [
//         ConfigModule.forRoot({
//           isGlobal: true,
//           envFilePath: '.local.env',
//           // envFilePath:".prod.env"
//         }),
//       ],
//       useFactory: (configService: ConfigService) => ({
//         type: 'postgres',
//         host: configService.get('DB_HOST'),
//         port: +configService.get<number>('DB_PORT'),
//         username: configService.get('DB_USERNAME'),
//         password: configService.get('DB_PASSWORD'),
//         database: configService.get('DB_DATABASE'),
//         synchronize: configService.get<boolean>('DB_SYNC'),
//         entities: [__dirname + '/**/*.entity.{ts,js}'],
//         logging: true,
//       }),
//       inject: [ConfigService],
//     }),
//     EmployeeModule,
//     AuthModule,
//   ],
//   controllers: [],
//   providers: [],
// })
// export class AppModule {}

import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { AuthService } from './auth/auth.service';
// import { ManagerModule } from './manager/manager.module';
// import { AdminModule } from './admin/admin.module';

@Module({
  imports: [EmployeeModule, AuthModule],
  controllers: [],
  providers: [],
  // exports: [AuthService, AuthModule],
})
export class AppModule {}
