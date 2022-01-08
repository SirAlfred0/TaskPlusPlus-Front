import { TaskEntity } from './TaskEntity';

export interface EditTask extends TaskEntity{
  Id: string,
  Caption: string,
  Star: boolean,
}
