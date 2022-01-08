import { RoleEntity } from "./RoleEntity";

export interface AsignTagRole extends RoleEntity
{
  BoardId: string,
  RoleId: string,
  TagId: string,
}
