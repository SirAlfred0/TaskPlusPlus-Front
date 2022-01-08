import { TagEntity } from "./TagEntity";

export interface AddTag extends TagEntity
{
  BoardId: string,
  Caption: string
}
