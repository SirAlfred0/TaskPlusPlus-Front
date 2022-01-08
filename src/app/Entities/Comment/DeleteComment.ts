import { CommentEntity } from './CommentEntity';

export interface DeleteComment extends CommentEntity {
  Id: string,
  ParentId: string,
}
