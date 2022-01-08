import { CommentEntity } from './CommentEntity';

export interface AddComment extends CommentEntity{
  ParentId: string,
  ReplyTo: string,
  Content: string
}
