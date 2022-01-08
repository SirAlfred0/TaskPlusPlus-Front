
import { BoardPermissionModel } from './../../Models/BoardPermissionModel';
import { GetBoardPermission } from './../../Entities/Board/GetBoardPermission';
import { ParentInfoModel } from '../../Models/ParentInfoModel';
import { CacheManagerService } from './../../Servicies/cache-manager.service';
import { ThemeControllerService } from './../../Servicies/theme-controller.service';
import { ThemeModel } from './../../Models/ThemeModel';
import { EditTag } from './../../Entities/Tag/EditTag';
import { RemoveTagRole } from './../../Entities/Role/RemoveTagRole';
import { AsignTagRole } from '../../Entities/Role/AsignTagRole';
import { EditRole } from './../../Entities/Role/EditRole';
import { AsignRole } from './../../Entities/Employee/AsignRole';
import { EmployeeModel } from './../../Models/EmployeeModel';
import { GetEmployee } from './../../Entities/Employee/GetEmployee';
import { RemoveRole } from './../../Entities/Role/RemoveRole';
import { GetRole } from './../../Entities/Role/GetRole';
import { RoleModel } from './../../Models/RoleModel';
import { AddRole } from './../../Entities/Role/AddRole';
import { RemoveTag } from './../../Entities/Tag/RemoveTag';
import { TagModel } from './../../Models/TagModel';
import { GetTag } from './../../Entities/Tag/GetTag';
import { AddTag } from './../../Entities/Tag/AddTag';
import { GetFriendList } from 'src/app/Entities/Friend/GetFriendList';
import { TaskPlusPlusAPIService } from 'src/app/Servicies/task-plus-plus.api.service';
import { ShareBoardEntity } from './../../Entities/Board/ShareBoardEntity';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserActions } from 'src/app/Enums/UserActions';
import { Friend } from 'src/app/Models/Friend';
import { Demote } from 'src/app/Entities/Employee/Demote';
import { EmployeeRoleModel } from 'src/app/Models/EmployeeRoleModel';
import { RemoveEmployee } from 'src/app/Entities/Employee/RemoveEmployee';
import { GetParentInfoEntity } from 'src/app/Entities/GetParentInfoEntity';
import { Errors } from './../../Dictionaries/Dictionaries';

@Component({
  selector: 'app-board-info',
  templateUrl: './board-info.component.html',
  styleUrls: ['./board-info.component.scss']
})
export class BoardInfoComponent implements OnInit {

  readonly theme: ThemeModel;
  errors = Errors;

  menuOpen: boolean = false;

  menu: string = "";
  accessToken: string = '';
  parentId: string = '';
  userId: string = '';
  errorMessage: string = '';

  getFriendListEntity: GetFriendList = {AccessToken: ''};
  getTagEntity: GetTag = {AccessToken: '', BoardId: ''};
  getRoleEntity: GetRole = {AccessToken: '', BoardId: ''};
  getEmployeeEntity: GetEmployee = {AccessToken: '', BoardId: ''};
  getParentInfo: GetParentInfoEntity = {AccessToken: '', ParentId: ''};
  getBoardPermission: GetBoardPermission = {AccessToken: '', ParentId: ''};

  friends: Friend[] = [];
  tags: TagModel[] = [];
  roles: RoleModel[] = [];
  employees: EmployeeModel[] = [];
  employeesRoles: EmployeeRoleModel[] = [];
  ParentInfo: ParentInfoModel = {ParentName: '', CreationDate: '', Owner: '', SubCommentCounts: ''};
  boardPermissions: BoardPermissionModel = {IsOwner: false};

  activeRequest: any = null;

  role: RoleModel = {Id: '', Caption: '', Color: '', ReadTask: false, WriteTask: false, ReadComment: false, WriteComment: false, CompleteTask: false, Tags: [], IsUsing: false};

  constructor(private API: TaskPlusPlusAPIService,
    private activeRoute: ActivatedRoute,
    private themeService: ThemeControllerService,
    private cacheManager: CacheManagerService,) {
    this.theme = this.themeService.GetTheme();
  }

  ngOnInit(): void {
    this.accessToken = this.cacheManager.GetLoginDetails();
    this.activeRoute.params.subscribe(params => {
      this.parentId = params['parentid'];
    })

    this.getFriendListEntity = {AccessToken: this.accessToken};
    this.getTagEntity = {AccessToken: this.accessToken, BoardId: this.parentId};
    this.getRoleEntity = {AccessToken: this.accessToken, BoardId: this.parentId};
    this.getEmployeeEntity = {AccessToken: this.accessToken, BoardId: this.parentId};
    this.getParentInfo = {AccessToken: this.accessToken, ParentId: this.parentId};
    this.getBoardPermission = {AccessToken: this.accessToken, ParentId: this.parentId};

    this.activeRequest = this.API.Post(UserActions.GetFriendList,this.getFriendListEntity).then(data =>{
      this.friends = data;
      this.activeRequest = null;
    });

    this.activeRequest = this.API.Post(UserActions.GetBoardTag,this.getTagEntity).then(data =>{
      this.tags = data;
      this.activeRequest = null;
    });

    this.activeRequest = this.API.Post(UserActions.GetRole,this.getRoleEntity).then(data =>{
      this.roles = data;
      this.activeRequest = null;
    });

    this.activeRequest = this.API.Post(UserActions.GetEmployees,this.getEmployeeEntity).then(data =>{
      this.employees = data;
      this.activeRequest = null;
    });

    this.activeRequest = this.API.Post(UserActions.GetParentInfo,this.getParentInfo).then(data => {
      this.ParentInfo = data;
      this.activeRequest = null;
    });

    this.activeRequest = this.API.Post(UserActions.GetBoardPermission,this.getBoardPermission).then(data => {
      this.boardPermissions = data;
      this.activeRequest = null;
    });
  }


  OpenMenu(m: string)
  {
    this.menuOpen = true;
    this.menu = m;
  }


  CloseMenu()
  {
    this.menuOpen = false;
    this.menu = "";
    this.userId = '';
    this.employeesRoles = [];
  }

  ShareBoard(event: ShareBoardEntity)
  {

    let shareInfo: ShareBoardEntity = event;

    this.activeRequest = this.API.Post(UserActions.ShareBoard,shareInfo).then(data => {
      this.activeRequest = null
      if(data.result)
      {
        this.menuOpen = false;
        this.menu = "";
        this.activeRequest = this.API.Post(UserActions.GetEmployees,this.getEmployeeEntity).then(data =>{
          this.employees = data;
          this.activeRequest = null;
        })
      }
    });
  }

  AddTag(event: AddTag)
  {
    let tag: AddTag = event;

    this.activeRequest = this.API.Post(UserActions.AddTag,tag).then(data => {
      this.activeRequest = null;
      if(data.result)
      {
        this.activeRequest = this.API.Post(UserActions.GetBoardTag,this.getTagEntity).then(datas =>{
          this.tags = datas;
          this.activeRequest = null;
        });
      }
    });
  }

  RemoveTag(event: RemoveTag)
  {
    if(!event.isUsing)
    {
      let tag: RemoveTag = event;
      this.activeRequest = this.API.Post(UserActions.RemoveTagFromBoard,tag).then(data => {
        this.activeRequest = null;
        if(data.result)
        {
          this.activeRequest = this.API.Post(UserActions.GetBoardTag,this.getTagEntity).then(datas =>{
            this.tags = datas;
            this.activeRequest = null;
          });
        }
      });
    }else{
      this.LogError(this.errors["Using"])
    }
  }

  EditTag(item: EditTag)
  {
    this.activeRequest = this.API.Post(UserActions.EditTag,item).then(data => {
      this.activeRequest = null;
      if(data.result)
      {
        this.activeRequest = this.API.Post(UserActions.GetBoardTag,this.getTagEntity).then(datas =>{
        this.tags = datas;
        this.activeRequest = null;
        });
        this.activeRequest = this.API.Post(UserActions.GetRole,this.getRoleEntity).then(data =>{
          this.roles = data;
          this.activeRequest = null;
        });
      }
    });
  }

  AddRole(event: AddRole)
  {
    let role: AddRole = event;
    this.activeRequest = this.API.Post(UserActions.AddRole,role).then(data => {
      this.activeRequest = null;
      if(data.result)
      {
        this.menuOpen = false;
        this.menu = "";
        this.activeRequest = this.API.Post(UserActions.GetRole,this.getRoleEntity).then(datas =>{
          this.roles = datas;
          this.activeRequest = null;
        });
      }
    });
  }

  DropRole(event: any)
  {
    let effectivePull = screen.width / 10;
    if(event.distance.x > effectivePull)
    {
      if(this.boardPermissions.IsOwner)
      {
        if(!event.item.data.isUsing)
        {
          let deleteRoleEnitity: RemoveRole = {Id: event.item.data.id, AccessToken: this.accessToken, BoardId: this.parentId};
          this.activeRequest = this.API.Post(UserActions.RemoveRole,deleteRoleEnitity).then(data => {
          this.activeRequest = null;
          if(data.result)
            {
              this.activeRequest = this.API.Post(UserActions.GetRole,this.getRoleEntity).then(datas =>{
                this.roles = datas;
                this.activeRequest = null;
              });
            }
          })
        }else{
          this.LogError(this.errors["Using"]);
        }
      }
    }
  }

  AddUserInfo(id: string)
  {
    this.userId = id;
    this.employees.forEach((item) => {
      if(item.Id == id)
      {
        this.employeesRoles = item.Roles;
      }
    });
  }

  GetRoleInfo(item: RoleModel)
  {
    this.role = item;
  }

  EditRole(item: EditRole)
  {
    this.activeRequest = this.API.Post(UserActions.EditRole,item).then(data =>{
      this.activeRequest = null;
      if(data.result)
      {
        this.activeRequest = this.API.Post(UserActions.GetRole,this.getRoleEntity).then(datas =>{
          this.roles = datas;
          this.activeRequest = null;
        });
        this.activeRequest = this.API.Post(UserActions.GetEmployees,this.getEmployeeEntity).then(data =>{
          this.employees = data;
          this.activeRequest = null;
        })
        this.menuOpen = false;
      }
    })
  }

  AsignTagToRole(item: AsignTagRole)
  {
    this.activeRequest = this.API.Post(UserActions.AsignTagToRole,item).then(data =>{
      this.activeRequest = null;
      if(data.result)
      {
        this.activeRequest = this.API.Post(UserActions.GetRole,this.getRoleEntity).then(datas =>{
          this.roles = datas;
          this.roles.forEach((item) => {
            if(item.Id == this.role.Id)
            this.role = item;
          });
          this.activeRequest = null;
          this.activeRequest = this.API.Post(UserActions.GetBoardTag,this.getTagEntity).then(data =>{
            this.tags = data;
            this.activeRequest = null;
          });
        });
      }
    });
  }

  RemoveTagFromRole(item: RemoveTagRole)
  {
    this.activeRequest = this.API.Post(UserActions.RemoveTagFromRole,item).then(data => {
      this.activeRequest = null;
      if(data.result)
      {
        this.activeRequest = this.API.Post(UserActions.GetRole,this.getRoleEntity).then(datas =>{
          this.roles = datas;
          this.roles.forEach((item) => {
            if(item.Id == this.role.Id)
            this.role = item;
          });
          this.activeRequest = null;
          this.activeRequest = this.API.Post(UserActions.GetBoardTag,this.getTagEntity).then(data =>{
            this.tags = data;
            this.activeRequest = null;
          });
        });
      }
    });
  }

  AsignRole(item: AsignRole)
  {
    this.activeRequest = this.API.Post(UserActions.AsignRole,item).then(data => {
      this.activeRequest = null;
      if(data.result)
      {
        this.activeRequest = this.API.Post(UserActions.GetRole,this.getRoleEntity).then(data =>{
          this.roles = data;
          this.activeRequest = null;
        });
        this.activeRequest = this.API.Post(UserActions.GetEmployees,this.getEmployeeEntity).then(data =>{
          this.employees = data;
          this.employees.forEach((item) => {
            if(item.Id == this.userId)
            {
              this.employeesRoles = item.Roles;
            }
          });
          this.activeRequest = null;
        })
      }
    })
  }

  Demote(item: Demote)
  {
    this.activeRequest = this.API.Post(UserActions.Demote,item).then(data => {
      this.activeRequest = null;
      if(data.result)
      {
        this.activeRequest = this.API.Post(UserActions.GetRole,this.getRoleEntity).then(data =>{
          this.roles = data;
          this.activeRequest = null;
        });
        this.activeRequest = this.API.Post(UserActions.GetEmployees,this.getEmployeeEntity).then(data =>{
          this.employees = data;
          this.employees.forEach((item) => {
            if(item.Id == this.userId)
            {
              this.employeesRoles = item.Roles;
            }
          });
          this.activeRequest = null;
        })
      }
    })
  }

  DropEmployee(event: any)
  {
    let effectivePull = screen.width / 10;
    if(event.distance.x > effectivePull)
    {
      if(this.boardPermissions.IsOwner)
      {
        let removeEmployee: RemoveEmployee = {AccessToken: this.accessToken, BoardId: this.parentId, ShareId: event.item.data};
        this.activeRequest = this.API.Post(UserActions.RemoveEmployee, removeEmployee).then(data => {
          this.activeRequest = null;
          if(data.result)
          {
            this.activeRequest = this.API.Post(UserActions.GetEmployees,this.getEmployeeEntity).then(datas =>{
              this.employees = datas;
              this.activeRequest = null;
            });
            this.activeRequest = this.API.Post(UserActions.GetRole,this.getRoleEntity).then(data =>{
              this.roles = data;
              this.activeRequest = null;
            });
          }
        });
      }
    }
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
