import { BoardEntity } from './BoardEntity';
export interface ShareBoardEntity extends BoardEntity{
    BoardId: string,
    ShareToList: string[]
}
