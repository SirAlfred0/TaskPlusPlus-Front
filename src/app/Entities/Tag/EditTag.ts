import { TagEntity } from "./TagEntity";

export interface EditTag extends TagEntity
{
  BoardId: string,
  Id: string,
  Color: string
}
