import { ThemeControllerService } from './../../Servicies/theme-controller.service';
import { ThemeModel } from './../../Models/ThemeModel';
import { EditTag } from './../../Entities/Tag/EditTag';
import { RemoveTag } from './../../Entities/Tag/RemoveTag';
import { TagModel } from './../../Models/TagModel';
import { AddTag } from './../../Entities/Tag/AddTag';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ValidationService } from './../../Servicies/validation.service';
import { validateMethods } from 'src/app/Enums/ValidateMethods';

@Component({
  selector: 'app-tags-info',
  templateUrl: './tags-info.component.html',
  styleUrls: ['./tags-info.component.scss']
})
export class TagsInfoComponent implements OnInit {

  readonly theme: ThemeModel;

  @Input() activeRequestOn: boolean = false;
  @Input() open = false;
  @Input() parentId: string = '';
  @Input() accessToken: string = '';
  @Input() tags: TagModel[] = [];


  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Output() newTagEvent: EventEmitter<AddTag> = new EventEmitter<AddTag>();
  @Output() removeTagEvent: EventEmitter<RemoveTag> = new EventEmitter<RemoveTag>();
  @Output() EditTagEvent: EventEmitter<EditTag> = new EventEmitter<EditTag>();

  addTag: AddTag = {AccessToken: '',BoardId: '', Caption: ''}
  removeTag: RemoveTag = {AccessToken: '', BoardId: '', Id: '', isUsing: false}

  constructor(private validateService: ValidationService, private themeService: ThemeControllerService) {
    this.theme = this.themeService.GetTheme();
  }

  ngOnInit(): void {
    this.addTag = {AccessToken: this.accessToken, BoardId: this.parentId, Caption: ''};
    this.removeTag = {AccessToken: this.accessToken, BoardId: this.parentId, Id: '', isUsing: false}
  }

  CloseMenu()
  {
    this.open = false;
    this.close.emit();
  }

  AddTag()
  {
    if(this.validateService.validate(this.addTag.Caption,validateMethods.caption) && !this.activeRequestOn)
    this.newTagEvent.emit(this.addTag);
  }

  RemoveTag(id: string,isUsing: boolean)
  {
    this.removeTag.Id = id;
    this.removeTag.isUsing = isUsing;
    if(!this.activeRequestOn)
    this.removeTagEvent.emit(this.removeTag);
  }

  EditTag(id: string,color: string)
  {
    let tag: EditTag = {AccessToken: this.accessToken, BoardId: this.parentId, Id: id, Color: color}

    if(!this.activeRequestOn)
    this.EditTagEvent.emit(tag);
  }
}
