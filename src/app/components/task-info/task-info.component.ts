import { ThemeControllerService } from './../../Servicies/theme-controller.service';
import { ThemeModel } from './../../Models/ThemeModel';
import { RemoveAssignment } from './../../Entities/Tag/RemoveAssignment';
import { AsignTag } from './../../Entities/Tag/AsignTag';
import { TagModel } from './../../Models/TagModel';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TagListModel } from 'src/app/Models/TagListModel';

@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.scss']
})
export class TaskInfoComponent implements OnInit {

  readonly theme: ThemeModel;

  @Input() activeRequestOn: boolean = false;
  @Input() open = false;
  @Input() boardTags: TagModel[] = [];
  @Input() tags: TagListModel[] = [];
  @Input() parentId: string = '';
  @Input() accessToken: string = '';

  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Output() newTagAsignEvent: EventEmitter<AsignTag> = new EventEmitter<AsignTag>();
  @Output() RemoveAsignEvent: EventEmitter<RemoveAssignment> = new EventEmitter<RemoveAssignment>();

  constructor(private themeService: ThemeControllerService) {
    this.theme = this.themeService.GetTheme();
  }

  ngOnInit(): void {
  }

  CloseMenu()
  {
    this.open = false;
    this.close.emit();
  }

  AsignTag(id: string)
  {
    let tag: AsignTag = {AccessToken: this.accessToken, TaskId: this.parentId, Id: id};

    if(tag.TaskId != '' && !this.activeRequestOn)
    this.newTagAsignEvent.emit(tag);
  }

  RemoveAsign(id: string)
  {
    let tag: RemoveAssignment = {AccessToken: this.accessToken, TaskId: this.parentId, TaskTagId: id};

    if(tag.TaskId != '' && !this.activeRequestOn)
    this.RemoveAsignEvent.emit(tag);
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
}
