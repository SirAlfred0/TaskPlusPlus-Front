import { EmployeeEntity } from "./EmployeeEntity";

export interface RemoveEmployee extends EmployeeEntity{
  BoardId: string,
  ShareId: string
}
