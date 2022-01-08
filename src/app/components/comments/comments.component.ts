import { Errors } from './../../Dictionaries/Dictionaries';
import { CommentPermissionModel } from './../../Models/CommentPermissionModel';
import { GetCommentPermission } from './../../Entities/Comment/GetCommentPermission';
import { CacheManagerService } from './../../Servicies/cache-manager.service';
import { ThemeControllerService } from './../../Servicies/theme-controller.service';
import { ThemeModel } from './../../Models/ThemeModel';
import { DateStatus } from './../../Entities/DateStatus';
import { ReplyInfo } from './../../Entities/Comment/ReplyInfo';
import { EditCommentEntity } from './../../Entities/Comment/EditCommentEntity';
import { EditComment } from './../../Entities/Comment/EditComment';
import { AddComment } from './../../Entities/Comment/AddComment';
import { DeleteComment } from './../../Entities/Comment/DeleteComment';
import { CommentModel } from './../../Models/CommentModel';
import { GetComment } from './../../Entities/Comment/GetComment';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TaskPlusPlusAPIService } from 'src/app/Servicies/task-plus-plus.api.service';
import { ActivatedRoute } from '@angular/router';
import { UserActions } from 'src/app/Enums/UserActions';
import { validateMethods } from 'src/app/Enums/ValidateMethods';
import { ValidationService } from 'src/app/Servicies/validation.service';
import { GetParentInfoEntity } from 'src/app/Entities/GetParentInfoEntity';
import { ParentInfoModel } from '../../Models/ParentInfoModel';


const colors: string[] = ["#20965d","#881b5d","#6fd696","#ea61ee","#e3744f",
                          "#bdeb38","#738ff4","#4acc02","#6496f7","#86f4c4",
                          "#5ad15a","#da6d4b","#ee027d","#a601cb","#c69af1"];

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})


export class CommentsComponent implements OnInit {

  coloredList: any[] = [{sender: "", color: ""}];
  colorList: string[] = [];

  readonly theme: ThemeModel;
  errors = Errors;

  topMenuOpenStatus: boolean = false;

  @ViewChild('addInput', { static: false }) addInput: ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('focusElement', { static: false }) FE: ElementRef<HTMLInputElement> = {} as ElementRef;

  accessToken: string = '';
  parentId: string = '';
  errorMessage: string = '';

  getComment: GetComment = {AccessToken: '', ParentId: ''};
  deleteComment: DeleteComment = {AccessToken: '', Id: '', ParentId: ''};
  editComment : EditComment = {Id: '', Content: '', AccessToken: '', ParentId: ''};
  editCommentEntity: EditCommentEntity = {Id: '',Content: ''};
  getParentInfo: GetParentInfoEntity = {AccessToken: '', ParentId: ''};
  getCommentPermission: GetCommentPermission = {AccessToken: '',ParentId: ''};

  replyInfo: ReplyInfo = {Id: '', Content: ''};

  comments: CommentModel[] = [];
  commentPermissions: CommentPermissionModel = {IsOwner: false,WriteComment: false,ReadComment: false};
  ParentInfo: ParentInfoModel = {ParentName: '', CreationDate: '', Owner: '', SubCommentCounts: ''};
  dates: DateStatus[] = [];



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

    this.getComment = {ParentId: this.parentId, AccessToken: this.accessToken};
    this.getParentInfo = {AccessToken: this.accessToken, ParentId: this.parentId};
    this.getCommentPermission = {AccessToken: this.accessToken, ParentId: this.parentId};

    this.comments = JSON.parse(this.cacheManager.Get('comments' + this.parentId));

    this.API.Post(UserActions.GetComment,this.getComment).then(data => {
      this.comments = data;
      this.cacheManager.Set('comments' + this.parentId,JSON.stringify(data));
    });

    this.API.Post(UserActions.GetParentInfo,this.getParentInfo).then(data => {
      this.ParentInfo = data;
    });

    this.API.Post(UserActions.GetCommentPermission,this.getCommentPermission).then(data => {
      this.commentPermissions = data;
    })
  }


  CanShow(d: string): boolean
  {
    let result: boolean = true;
    if(this.dates.length != this.comments.length)
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


  Focus(item: any,input: any)
  {
    item.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    if(window.pageYOffset == 0)
    {
      input.focus();
    }
  }


  Drop(event: any)
  {
    let effectivePull = screen.width / 10;
    if(event.distance.x > effectivePull)
    {
      if(event.item.data.ED)
      if(this.replyInfo.Id == '')
      {
        this.editCommentEntity = {Id: event.item.data.id, Content: event.item.data.content};
        this.FE.nativeElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      }
    }else if(event.distance.x < (-1 * effectivePull))
    {
      if(this.editCommentEntity.Id == '')
      {
        this.replyInfo = {Id: event.item.data.id, Content: event.item.data.content};
        this.FE.nativeElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      }
    }
  }

  MouseHold(id: string, d: boolean)
  {
    if(d)
    {
      this.topMenuOpenStatus = true;
      this.deleteComment = {Id: id, ParentId: this.parentId, AccessToken: this.accessToken};
    }
  }

  CloseMenu()
  {
    this.topMenuOpenStatus = false;
    this.deleteComment = {Id: '', ParentId: '', AccessToken: ''};
  }

  AddComment(content: string)
  {
    if(this.commentPermissions.WriteComment)
    {
      var comment: AddComment = {AccessToken: this.accessToken, ParentId: this.parentId, ReplyTo: this.replyInfo.Id, Content: content};

      if(comment.ReplyTo == '')
        comment.ReplyTo = '00000000-0000-0000-0000-000000000000';

      if(this.validateService.validate(comment.Content,validateMethods.caption))
      this.API.Post(UserActions.AddComment, comment).then(data => {
        if(data.result)
        {
          this.API.Post(UserActions.GetComment,this.getComment).then(datas =>{
            this.comments = datas;
            this.cacheManager.Set('comments' + this.parentId,JSON.stringify(datas));
            this.dates = [];
            this.addInput.nativeElement.value = '';
          });
        }
      });
      this.replyInfo = {Id: '', Content: ''};
    }else{
      this.LogError(this.errors["NotWriteComment"]);
    }
  }

  CancelReply()
  {
    this.replyInfo = {Id: '', Content: ''};
  }

  CancelEdit()
  {
    this.editCommentEntity = {Id: '', Content: ''};
  }


  DeleteComment()
  {
    if(this.deleteComment.Id != '')
    this.API.Post(UserActions.DeleteComment,this.deleteComment).then(data => {
      if(data.result)
      {
        this.API.Post(UserActions.GetComment,this.getComment).then(datas => {
          this.comments = datas;
          this.cacheManager.Set('comments' + this.parentId,JSON.stringify(datas));
          this.dates = [];
        });
      }
    });
    this.topMenuOpenStatus = false;
  }

  EditComment(content: string)
  {
    this.editComment = {Id: this.editCommentEntity.Id, Content: content, ParentId: this.parentId, AccessToken: this.accessToken};

    if(this.validateService.validate(this.editComment.Content,validateMethods.caption))
      this.API.Post(UserActions.EditComment, this.editComment).then(data => {
        if(data.result)
        {
          this.API.Post(UserActions.GetComment, this.getComment).then(datas =>{
            this.comments = datas;
            this.cacheManager.Set('comments' + this.parentId,JSON.stringify(datas));
            this.addInput.nativeElement.value = '';
          });
        }
      });

      this.editCommentEntity = {Id: '',Content: ''};
  }

  SetColor(sender: string)
  {
    for(let item of this.coloredList)
    {
      if(item.sender === sender) return item.color;
    }

    if(this.colorList.length == 0) this.colorList = colors;
    let clr = this.colorList[this.colorList.length - 1];
    this.colorList.pop();
    this.coloredList.push({sender: sender, color: clr});

    return clr;
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
