import { ReplyInfo } from './ReplyInfo';
import { CommentEntity } from './CommentEntity';

export interface EditComment extends CommentEntity,ReplyInfo {
  ParentId: string,
}
