import { ThemeControllerService } from './../../Servicies/theme-controller.service';
import { ThemeModel } from './../../Models/ThemeModel';

import { ShareBoardEntity } from './../../Entities/Board/ShareBoardEntity';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Friend } from 'src/app/Models/Friend';

@Component({
  selector: 'app-share-board',
  templateUrl: './share-board.component.html',
  styleUrls: ['./share-board.component.scss']
})
export class ShareBoardComponent implements OnInit {

  readonly theme: ThemeModel;

  @Input() activeRequestOn: boolean = false;
  @Input() open = false;
  @Input() parentId: string = '';
  @Input() accessToken: string = '';
  @Input() friends: Friend[] = [];
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Output() shareBoardEvent: EventEmitter<ShareBoardEntity> = new EventEmitter<ShareBoardEntity>();

  shareInfo : ShareBoardEntity = {AccessToken: '', BoardId: '',ShareToList: []};



  constructor(private themeSerivce: ThemeControllerService) {
    this.theme = this.themeSerivce.GetTheme();
  }

  ngOnInit(): void {

    this.shareInfo = {AccessToken: this.accessToken, BoardId: this.parentId, ShareToList: []}

  }


  OnCheck(event: any)
  {
    let shareItem: string = event.target.value;

    if(event.target.checked)
    {
      this.shareInfo.ShareToList.push(shareItem);
    }else{
      this.shareInfo.ShareToList.forEach((item,index) => {
        if(item == shareItem)
        this.shareInfo.ShareToList.splice(index,1);
      })
    }
  }

  Share()
  {
    if(!this.activeRequestOn)
    this.shareBoardEvent.emit(this.shareInfo);
  }

  CloseMenu()
  {
    this.open = false;
    this.close.emit();
  }
}
