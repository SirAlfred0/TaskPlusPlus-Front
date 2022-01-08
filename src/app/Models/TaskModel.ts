import { TagListModel } from './TagListModel';

export interface TaskModel{
  Id: string,
  Caption: string,
  Star: string,
  CreationAt: string,
  LastModifiedBy: string,
  Tags: TagListModel[],
  Compeleted: string,
  SubTasksCount: string,
  SubCommentsCount: string,
  License: boolean,
}
