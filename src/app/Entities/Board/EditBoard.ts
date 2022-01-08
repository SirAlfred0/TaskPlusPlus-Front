import { BoardEntity } from './BoardEntity';
export interface EditBoard extends BoardEntity
{
  Id: string,
  Caption: string,
}
