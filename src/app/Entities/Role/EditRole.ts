import { RoleEntity } from "./RoleEntity";

export interface EditRole extends RoleEntity
{
  Id: string
  BoardId: string,
  Color: string,
  ReadTask: boolean,
  WriteTask: boolean,
  CompleteTask: boolean,
  ReadComment : boolean,
  WriteComment: boolean,
}
