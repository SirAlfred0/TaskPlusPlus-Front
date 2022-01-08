import { TagEntity } from './TagEntity';


export interface RemoveTag extends TagEntity{
  BoardId: string,
  Id: string,
  isUsing: boolean,
}
