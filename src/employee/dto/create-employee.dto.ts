import { IsEmail, IsInt, IsString } from 'class-validator';
export class CreateEmployeeDto {
  @IsString()
  name: string;
  @IsString()
  username: string;
  @IsString()
  password: string;
  @IsEmail()
  email: string;
  @IsInt()
  empID: number;
  @IsString()
  role: string;
  @IsString()
  desg: string;
  @IsInt()
  availableLeave: number;
  @IsInt()
  takenLeave: number;
  @IsInt()
  approveLeave: number;
  @IsInt()
  rejectLeave: number;
  @IsInt()
  pendingLeave: number;
}
