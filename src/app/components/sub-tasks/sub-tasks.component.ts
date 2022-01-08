import { Errors } from './../../Dictionaries/Dictionaries';
import { CacheManagerService } from './../../Servicies/cache-manager.service';
import { ThemeControllerService } from './../../Servicies/theme-controller.service';
import { ThemeModel } from './../../Models/ThemeModel';
import { DateStatus } from './../../Entities/DateStatus';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AddTask } from 'src/app/Entities/Task/AddTask';
import { TaskPlusPlusAPIService } from 'src/app/Servicies/task-plus-plus.api.service';
import { Router , ActivatedRoute } from '@angular/router';
import { GetTask } from 'src/app/Entities/Task/GetTask';
import { TaskModel } from 'src/app/Models/TaskModel';
import { UserActions } from 'src/app/Enums/UserActions';
import { DeleteTask } from 'src/app/Entities/Task/DeleteTask';
import { EditTask } from 'src/app/Entities/Task/EditTask';
import { GetTag } from 'src/app/Entities/Tag/GetTag';
import { TagModel } from 'src/app/Models/TagModel';
import { RemoveAssignment } from 'src/app/Entities/Tag/RemoveAssignment';
import { AsignTag } from 'src/app/Entities/Tag/AsignTag';
import { TagListModel } from 'src/app/Models/TagListModel';
import { validateMethods } from 'src/app/Enums/ValidateMethods';
import { ValidationService } from 'src/app/Servicies/validation.service';
import { GetParentInfoEntity } from 'src/app/Entities/GetParentInfoEntity';
import { ParentInfoModel } from '../../Models/ParentInfoModel';
import { GetTaskPermission } from 'src/app/Entities/Task/GetTaskPermission';
import { TaskPermissionModel } from './../../Models/TaskPermissionModel';

@Component({
  selector: 'app-sub-tasks',
  templateUrl: './sub-tasks.component.html',
  styleUrls: ['./sub-tasks.component.scss']
})
export class SubTasksComponent implements OnInit {

  readonly theme: ThemeModel;
  errors = Errors;

  reName = false;
  selectedIndex = 0;
  menuOpen :boolean = false;

  @ViewChild('addInput', { static: false }) addInput: ElementRef<HTMLInputElement> = {} as ElementRef;

  accessToken: string = '';
  parentId: string = '';
  taskId: string = '';
  errorMessage: string = '';

  getTaskObject: GetTask = {ParentId: '', AccessToken: ''};
  getTagEntity: GetTag = {AccessToken: '', BoardId: ''};
  getParentInfo: GetParentInfoEntity = {AccessToken: '', ParentId: ''};
  getTaskPermission: GetTaskPermission = {AccessToken: '', ParentId: ''};

  tasks: TaskModel[] = [];
  tags: TagListModel[] = [];
  boardTags: TagModel[] = [];
  dates: DateStatus[] = [];
  ParentInfo: ParentInfoModel = {ParentName: '', CreationDate: '', Owner: '',SubCommentCounts: ''};
  taskPermissions: TaskPermissionModel = {IsOwner: false,WriteTask: false,ReadTask: false};

  activeRequest: any = null;

  constructor(private API: TaskPlusPlusAPIService,
    private validateService: ValidationService,
    private activeRoute: ActivatedRoute,
    private themeService: ThemeControllerService,
    private cacheManager: CacheManagerService) {
    this.theme = this.themeService.GetTheme();
  }

  ngOnInit(): void {
    this.accessToken = this.cacheManager.GetLoginDetails();

    this.activeRoute.params.subscribe(params => {
      this.parentId = params['parentid'];
    })

    this.getTaskObject = {ParentId: this.parentId, AccessToken: this.accessToken};
    this.getTagEntity = {AccessToken: this.accessToken, BoardId: this.parentId};
    this.getParentInfo = {AccessToken: this.accessToken, ParentId: this.parentId};
    this.getTaskPermission = {AccessToken: this.accessToken, ParentId: this.parentId};

    this.tasks = JSON.parse(this.cacheManager.Get('tasks' + this.parentId));

    this.activeRequest = this.API.Post(UserActions.GetTask,this.getTaskObject).then(data => {
      this.activeRequest = null;
      this.tasks = data;
      this.cacheManager.Set('tasks' + this.parentId,JSON.stringify(data));
    });

    this.activeRequest = this.API.Post(UserActions.GetBoardTag,this.getTagEntity).then(data =>{
      this.activeRequest = null;
      this.boardTags = data;
    });

    this.activeRequest = this.API.Post(UserActions.GetParentInfo,this.getParentInfo).then(data => {
      this.ParentInfo = data;
      this.activeRequest = null;
    });

    this.activeRequest = this.API.Post(UserActions.GetTaskPermission,this.getTaskPermission).then(data => {
      this.taskPermissions = data;
      this.activeRequest = null;
    });
  }

  CanShow(d: string): boolean
  {
    let result: boolean = true;
    if(this.dates.length != this.tasks.length)
    {
      let spliteDate = d.split('T');
      let yearAndMonth = spliteDate[0]

      for(let item of this.dates)
      {
        if(item.Date == d)
        {
          result = true;
        }else{
          let itemSpliteDate = item.Date.split('T');
          let itemYearAndMonth = itemSpliteDate[0];

          if(itemYearAndMonth == yearAndMonth)
          {
            result = false;
            break;
          }else{
            result = true;
          }
        }
      }

      let Exists: boolean = false;
      this.dates.forEach((item) => {
        if(item.Date == d)
        {
          Exists = true;
        }
      });
      if(!Exists)
      {
        this.dates.push({Date: d, LastStatus: result});
      }
    }else{
      this.dates.forEach((item) =>{
        if(item.Date == d)
        {
          result = item.LastStatus;
        }
      });
    }

    return result;
  }


  Rename(index: number,eI: HTMLInputElement,checkBox: HTMLInputElement)
  {
    this.reName = !this.reName;
    this.selectedIndex = index;

    if(index != 0)
    {
      setTimeout(() => {
        eI.select();
      }, 100);
    }else{
      checkBox.checked = false;
    }
  }


  Drop(t: any) {
    let effectivePull = screen.width / 10;
    if(t.distance.x > effectivePull)
    {
      var deleteTaskItem: DeleteTask = {AccessToken: this.accessToken, Id: t.item.data.id};

      if(t.item.data.deleteLicense)
      this.activeRequest = this.API.Post(UserActions.DeleteTask,deleteTaskItem).then(data => {
        this.activeRequest = null;
        if(data.result)
        {
          this.activeRequest = this.API.Post(UserActions.GetTask,this.getTaskObject).then(datas => {
            this.activeRequest = null;
            this.cacheManager.Set('tasks' + this.parentId,JSON.stringify(datas));
            this.tasks = datas;
            this.dates = [];
          });
        }
        });
    }else if(t.distance.x < (-1 * effectivePull))
    {
      if(!this.reName)
      {
        this.menuOpen = true;
        this.taskId = t.item.data.id;
        this.tags = t.item.data.tags;
      }
    }
  }

  CloseMenu()
  {
    this.menuOpen = false;
    this.taskId = '';
  }

  Focus(item: any,input: any)
  {
    item.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    if(window.pageYOffset == 0)
    {
      input.focus();
    }
  }


  AddTask(caption: string)
  {
    var task: AddTask = {AccessToken: this.accessToken,ParentId: this.parentId, Caption: caption};

    if(this.validateService.validate(task.Caption,validateMethods.caption))
    this.activeRequest = this.API.Post(UserActions.AddSubTask,task).then(data => {
      this.activeRequest = null;
      if(data.result)
      {
        this.activeRequest = this.API.Post(UserActions.GetTask,this.getTaskObject).then(datas => {
          this.activeRequest = null;
          this.tasks = datas;
          this.cacheManager.Set('tasks' + this.parentId,JSON.stringify(datas));
          this.addInput.nativeElement.value = '';
          this.dates = [];
        });
      }
    });
  }


  EditTask(id: string,oldCaption:string,newCaption: string,editLicense: boolean)
  {
    var object: EditTask = {Id: id, Caption: newCaption, AccessToken: this.accessToken, Star: false}

      if(editLicense)
      if(this.validateService.validate(object.Caption,validateMethods.caption))
        this.activeRequest = this.API.Post(UserActions.EditSubTask, object).then(data => {
        this.activeRequest = null;
        if(data.result)
          {
            this.activeRequest = this.API.Post(UserActions.GetTask,this.getTaskObject).then(datas =>{
              this.tasks = datas;
              this.cacheManager.Set('tasks' + this.parentId,JSON.stringify(datas));
              this.activeRequest = null;
            });
           }
        });
  }
  AsignTag(event: AsignTag)
  {
    let tag: AsignTag = event;

    this.activeRequest = this.API.Post(UserActions.AsignTagToTask,tag).then(data => {
      this.activeRequest = null;
      if(data.result)
      {
        this.activeRequest = this.API.Post(UserActions.GetTask,this.getTaskObject).then(datas =>{
          this.activeRequest = null;
          this.cacheManager.Set('tasks' + this.parentId,JSON.stringify(datas));
          this.tasks = datas;
          this.tasks.forEach((item)=> {
            if(item.Id == this.taskId)
            {
              this.tags = item.Tags;
            }
          })
        });
      }
    })
  }

  RemoveAsign(event: RemoveAssignment)
  {
    let tag: RemoveAssignment = event;

    this.activeRequest = this.API.Post(UserActions.RemoveTagFromTask,tag).then(data => {
      this.activeRequest = null;
      if(data.result)
      {
        this.activeRequest = this.API.Post(UserActions.GetTask,this.getTaskObject).then(datas =>{
          this.activeRequest = null;
          this.cacheManager.Set('tasks' + this.parentId,JSON.stringify(datas));
          this.tasks = datas;
          this.tasks.forEach((item)=> {
            if(item.Id == this.taskId)
            {
              this.tags = item.Tags;
            }
          })
        });
      }
    })
  }

  ActiveRequestOn()
  {
    if(this.activeRequest == null) return false;

    return true;
  }

  LogError(e: string)
  {
    if(this.errorMessage == '')
    {
      this.errorMessage = e;
      setTimeout(() => {
        this.errorMessage = '';
      }, 2000);
    }
  }

}
