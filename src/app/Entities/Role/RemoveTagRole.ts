import { RoleEntity } from "./RoleEntity";

export interface RemoveTagRole extends RoleEntity
{
  RoleTagId: string,
  BoardId: string,
}
