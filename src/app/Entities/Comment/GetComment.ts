import { CommentEntity } from './CommentEntity';

export interface GetComment extends CommentEntity {
  ParentId: string
}
