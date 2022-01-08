import { RoleEntity } from "./RoleEntity";

export interface AddRole extends RoleEntity
{
  BoardId: string,
  Caption: string,
  Color: string,
  ReadTask: boolean,
  WriteTask: boolean,
  CompleteTask: boolean,
  ReadComment : boolean,
  WriteComment: boolean,
}
