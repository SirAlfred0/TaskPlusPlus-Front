import { ThemeControllerService } from './../../Servicies/theme-controller.service';
import { ThemeModel } from './../../Models/ThemeModel';
import { RemoveTagRole } from './../../Entities/Role/RemoveTagRole';
import { AsignTagRole } from '../../Entities/Role/AsignTagRole';
import { RoleTagModel } from './../../Models/RoleTagModel';
import { TagModel } from 'src/app/Models/TagModel';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-role-tags-info',
  templateUrl: './role-tags-info.component.html',
  styleUrls: ['./role-tags-info.component.scss']
})
export class RoleTagsInfoComponent implements OnInit {

  readonly theme: ThemeModel;

  @Input() activeRequestOn: boolean = false;
  @Input() open = false;
  @Input() accessToken: string = '';
  @Input() boardId: string = '';
  @Input() roleId: string = '';
  @Input() boardTags: TagModel[] = [];
  @Input() tags: RoleTagModel[] = [];
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Output() AsignTagToRoleEvent: EventEmitter<AsignTagRole> = new EventEmitter<AsignTagRole>()
  @Output() RemoveTagFromRoleEvent: EventEmitter<RemoveTagRole> = new EventEmitter<RemoveTagRole>()

  constructor(private themeService: ThemeControllerService) {
    this.theme = this.themeService.GetTheme();
  }

  ngOnInit(): void {
  }

  CloseMenu()
  {
    this.close.emit();
  }

  IsAdded(tagId: string): boolean
  {
    let res: boolean = false;
    this.tags.forEach(item =>{
      if(item.TagId == tagId)
        res = true;
    });

    return res;
  }

  AsignTag(id: string)
  {
    let roleTag: AsignTagRole = {AccessToken: this.accessToken, BoardId: this.boardId, RoleId: this.roleId, TagId: id};

    if(!this.activeRequestOn)
    this.AsignTagToRoleEvent.emit(roleTag);
  }

  RemoveTag(id: string)
  {
    let roleTag: RemoveTagRole = {AccessToken: this.accessToken, BoardId: this.boardId, RoleTagId: id};

    if(!this.activeRequestOn)
    this.RemoveTagFromRoleEvent.emit(roleTag);
  }
}
