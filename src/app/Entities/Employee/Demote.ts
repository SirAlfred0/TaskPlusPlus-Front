import { EmployeeEntity } from "./EmployeeEntity";

export interface Demote extends EmployeeEntity{
  BoardId: string,
  roleSessionId: string
}
