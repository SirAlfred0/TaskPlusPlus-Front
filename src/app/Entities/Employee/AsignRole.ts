import { EmployeeEntity } from "./EmployeeEntity";

export interface AsignRole extends EmployeeEntity
{
  EmployeeId: string,
  RoleId: string,
  BoardId: string
}
