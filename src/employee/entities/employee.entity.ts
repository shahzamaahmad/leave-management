export class Employee {
  name: string;
  username: string;
  password: string;
  email: string;
  empID: number;
  role: string;
  desg: string;
  availableLeave: number;
  takenLeave: number;
  approveLeave: number;
  rejectLeave: number;
  pendingLeave: number;
  leave: [
    {
      status: string;
      leaveDate: Date;
      comment: string;
    },
  ];
}
