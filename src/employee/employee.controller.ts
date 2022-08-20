import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post('login')
  @UseGuards(AuthGuard('local'))
  login(@Body() createEmployeeDto: CreateEmployeeDto): CreateEmployeeDto {
    return createEmployeeDto;
  }
}
