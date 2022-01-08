import { TaskEntity } from './TaskEntity';

export interface AddTask extends TaskEntity{
  ParentId: string,
  Caption: string
}
