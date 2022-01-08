import { RoleEntity } from "./RoleEntity";

export interface RemoveRole extends RoleEntity{
  BoardId: string,
  Id: string
}
