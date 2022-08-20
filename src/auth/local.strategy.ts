import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { EmployeeService } from 'src/employee/employee.service';
import { Employee } from 'src/employee/entities/employee.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly employeeService: EmployeeService) {
    super();
  }
  validate(username: string, password: string): Employee {
    const emp: Employee = this.employeeService.getEmployeeByUsername(username);
    // console.log(emp);
    // return emp;
    if (username === undefined) {
      throw new UnauthorizedException();
    }
    if (emp.username === username && emp.password === password) {
      return emp;
    } else {
      throw new UnauthorizedException();
    }
  }
}
