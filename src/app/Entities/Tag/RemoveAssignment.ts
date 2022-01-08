import { TagEntity } from "./TagEntity";

export interface RemoveAssignment extends TagEntity
{
  TaskId: string,
  TaskTagId: string
}
