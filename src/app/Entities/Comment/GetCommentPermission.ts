import { CommentEntity } from './CommentEntity';
export interface GetCommentPermission extends CommentEntity
{
  ParentId: string,
}
