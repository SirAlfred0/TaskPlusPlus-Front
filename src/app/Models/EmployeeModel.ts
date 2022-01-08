import { EmployeeRoleModel } from './EmployeeRoleModel';
export interface EmployeeModel
{
  ShareId: string,
  Id: string,
  FirstName: string,
  LastName:string,
  Bio:string,
  Image:string,
  Roles: EmployeeRoleModel[],
}
