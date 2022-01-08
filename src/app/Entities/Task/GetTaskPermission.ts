import { TaskEntity } from './TaskEntity';
export interface GetTaskPermission extends TaskEntity
{
  ParentId: string
}
