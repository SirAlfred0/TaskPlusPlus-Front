import { TaskEntity } from './TaskEntity';
export interface GetTask extends TaskEntity{
  ParentId: string
}
