import { RoleTagModel } from "./RoleTagModel";

export interface RoleModel{
  Id: string,
  Caption: string,
  Color: string,
  ReadTask: boolean,
  WriteTask: boolean,
  ReadComment: boolean,
  WriteComment: boolean,
  CompleteTask: boolean,
  Tags: RoleTagModel[],
  IsUsing: boolean,
}
