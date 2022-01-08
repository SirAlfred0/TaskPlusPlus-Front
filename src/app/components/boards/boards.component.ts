import { CacheManagerService } from './../../Servicies/cache-manager.service';
import { ThemeModel } from './../../Models/ThemeModel';
import { ThemeControllerService } from './../../Servicies/theme-controller.service';
import { DateStatus } from './../../Entities/DateStatus';
import { GetBoard } from './../../Entities/Board/GetBoard';
import { DeleteBoard } from './../../Entities/Board/DeleteBoard';
import { EditBoard } from '../../Entities/Board/EditBoard';
import { BoardModel } from './../../Models/BoardModel';
import { AddBoard } from 'src/app/Entities/Board/AddBoard';
import { validateMethods } from './../../Enums/ValidateMethods';
import { ValidationService } from './../../Servicies/validation.service';
import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { TaskPlusPlusAPIService } from 'src/app/Servicies/task-plus-plus.api.service';
import { UserActions } from 'src/app/Enums/UserActions';


@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  readonly theme: ThemeModel;

  @ViewChild('addInput', { static: false }) addInput: ElementRef<HTMLInputElement> = {} as ElementRef;

  boards: BoardModel[] = [];
  dates: DateStatus[] = [];

  accessToken: GetBoard = {AccessToken: ""};

  selected = false;
  index = 0;



  constructor(private router: Router, private API: TaskPlusPlusAPIService,
    private validateService: ValidationService,
    private themeService: ThemeControllerService,
    private cacheManager: CacheManagerService) {
    this.theme = this.themeService.GetTheme();
  }


  ngOnInit(): void {

    this.accessToken = {AccessToken: this.cacheManager.GetLoginDetails()};

    this.boards = JSON.parse(this.cacheManager.Get('boards' + this.accessToken.AccessToken));

    this.API.Post(UserActions.GetBoards,this.accessToken).then(data =>{
      this.boards = data;
      this.cacheManager.Set('boards' + this.accessToken.AccessToken,JSON.stringify(data));
    });
  }

  CanShow(d: string): boolean
  {
    let result: boolean = true;
    if(this.dates.length != this.boards.length)
    {
      let spliteDate = d.split('-');
      let yearAndMonth = spliteDate[0] + spliteDate[1];

      for(let item of this.dates)
      {
        if(item.Date == d)
        {
          result = true;
        }else{
          let itemSpliteDate = item.Date.split('-');
          let itemYearAndMonth = itemSpliteDate[0] + itemSpliteDate[1];

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

  Drop(t: any) {
    let effectivePull = screen.width / 10;
    if(t.distance.x > effectivePull)
    {
      var object: DeleteBoard = {Id: t.item.data.id, AccessToken: this.accessToken.AccessToken};
      this.API.Post(UserActions.DeleteBoard,object).then(data => {
          if(data.result)
          {
            this.API.Post(UserActions.GetBoards,this.accessToken).then(datas =>{
              this.boards = datas;
              this.cacheManager.Set('boards' + this.accessToken.AccessToken,JSON.stringify(datas));
              this.dates = [];
            });
          }
        });
    }else if(t.distance.x < (-1 * effectivePull))
    {
      this.router.navigate(['/boardinfo/' + t.item.data.id]);
    }
  }

  Rename(i: number,eI: HTMLInputElement,checkBox: HTMLInputElement)
  {
    this.selected = !this.selected;
    this.index = i;

    if(i != 0)
    {
      setTimeout(() => {
        eI.select();
      }, 100);
    }else{
      checkBox.checked = false;
    }
  }

  Focus(item: any,input: any)
  {
    item.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    if(window.pageYOffset == 0)
    {
      input.focus();
    }
  }


  AddBoard(caption: string)
  {
    var board: AddBoard = {AccessToken: this.cacheManager.GetLoginDetails(), Caption: caption};

    if(this.validateService.validate(caption,validateMethods.caption))
    this.API.Post(UserActions.AddBoard,board).then(data => {
      if(data.result)
      {
        this.API.Post(UserActions.GetBoards,this.accessToken).then(datas =>{
          this.boards = datas;
          this.cacheManager.Set('boards' + this.accessToken.AccessToken,JSON.stringify(datas));
          this.dates = [];
        });
        this.addInput.nativeElement.value = '';
      }
    });
  }

  EditBoard(boardId: string, oldCaption:string, newCaption: string, isOwner: boolean)
  {
    var object: EditBoard = {Id: boardId, Caption: newCaption, AccessToken: this.accessToken.AccessToken};

      if(isOwner)
      {
        if(this.validateService.validate(object.Caption,validateMethods.caption))
        {
          this.API.Post(UserActions.EditBoard, object).then(data => {
            if(data.result)
            {
              this.API.Post(UserActions.GetBoards,this.accessToken).then(datas =>{
                this.boards = datas;
                this.cacheManager.Set('boards' + this.accessToken.AccessToken,JSON.stringify(datas));
              });
            }
          });
        }
      }
  }
}
