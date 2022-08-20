import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  public employee: Employee[] = [
    {
      name: 'Shahzama Ahmad',
      username: 'ahmad',
      password: 'shahzama',
      email: 'shahzamaahmad@rapidinnovation.dev',
      empID: 402,
      role: 'employee',
      desg: 'Node Intern',
      availableLeave: 12,
      takenLeave: 0,
      approveLeave: 0,
      rejectLeave: 0,
      pendingLeave: 0,
      leave: [
        {
          status: '',
          comment: '',
          leaveDate: new Date(),
        },
      ],
    },
    {
      name: 'Mohd Zaid',
      username: 'zaid',
      password: 'mohdzaid',
      email: 'mohdzaid@rapidinnovation.dev',
      empID: 401,
      role: 'employee',
      desg: 'Node Intern',
      availableLeave: 12,
      takenLeave: 0,
      approveLeave: 0,
      rejectLeave: 0,
      pendingLeave: 0,
      leave: [
        {
          status: '',
          comment: '',
          leaveDate: new Date(),
        },
      ],
    },
    {
      name: 'Debi Mishra',
      username: 'debi',
      password: 'debimishra',
      email: 'debimishra@rapidinnovation.dev',
      empID: 300,
      role: 'employee',
      desg: 'Backend Developer',
      availableLeave: 12,
      takenLeave: 0,
      approveLeave: 0,
      rejectLeave: 0,
      pendingLeave: 0,
      leave: [
        {
          status: '',
          comment: '',
          leaveDate: new Date(),
        },
      ],
    },
  ];
  getEmployeeByUsername(username: string): Employee {
    return this.employee.find((emp) => {
      console.log(emp.username === username);

      return emp.username === username;
    });
  }

  // signUp(createEmployeeDto: CreateEmployeeDto) {
  //   return 'This action adds a new employee';
  // }

  // login() {
  //   return `This action returns all employee`;
  // }

  // takeLeave(id: number) {
  //   return `This action returns a #${id} employee`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} employee`;
  // }
}
