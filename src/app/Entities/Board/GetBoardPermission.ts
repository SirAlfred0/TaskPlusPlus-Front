import { BoardEntity } from './BoardEntity';

export interface GetBoardPermission extends BoardEntity
{
  ParentId: string
}
