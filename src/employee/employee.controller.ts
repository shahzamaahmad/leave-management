import { AuthService } from './../auth/auth.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('employee')
export class EmployeeController {
  constructor(
    private readonly employeeService: EmployeeService,
    private readonly authService: AuthService,
  ) {}
  @Post('login')
  @UseGuards(AuthGuard('local'))
  login(@Body() createEmployeeDto: CreateEmployeeDto, @Request() req) {
    const emp: CreateEmployeeDto = this.employeeService.getEmployeeByUsername(
      createEmployeeDto.username,
    );
    // const token = this.authService.generateToken(req.emp);
    // emp.password = undefined;
    return emp;
    // return this.authService.generateToken(req.emp);
  }
}
