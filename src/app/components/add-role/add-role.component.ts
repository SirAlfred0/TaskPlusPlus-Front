import { ThemeControllerService } from './../../Servicies/theme-controller.service';
import { ThemeModel } from './../../Models/ThemeModel';
import { ValidationService } from './../../Servicies/validation.service';
import { validateMethods } from 'src/app/Enums/ValidateMethods';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AddRole } from 'src/app/Entities/Role/AddRole';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {
  readonly theme: ThemeModel;

  @Input() activeRequestOn: boolean = false;
  @Input() open = false;
  @Input() boardId = '';
  @Input() accessToken = '';
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Output() newRoleEvent: EventEmitter<AddRole> = new EventEmitter<AddRole>();

  writeTask: boolean = false;
  writeComment: boolean = false;


  newRole: AddRole = {AccessToken: '', BoardId: '', Caption: '', Color: '', ReadTask: false, WriteTask: false, CompleteTask: false, ReadComment: false, WriteComment: false};

  constructor(private validateService: ValidationService,private themeService:ThemeControllerService) {
    this.theme = this.themeService.GetTheme();
  }

  ngOnInit(): void {
  }

  AddRole()
  {
    this.newRole.ReadComment = this.newRole.ReadComment || this.newRole.WriteComment;
    this.newRole.ReadTask = this.newRole.ReadTask || this.newRole.WriteTask;
    this.newRole.BoardId = this.boardId;
    this.newRole.AccessToken = this.accessToken;

    if(this.validateService.validate(this.newRole.Caption,validateMethods.caption) && !this.activeRequestOn)
    this.newRoleEvent.emit(this.newRole);

    this.newRole.ReadComment = false;
    this.newRole.ReadTask = false;
  }

  CloseMenu()
  {
    this.close.emit();
  }
}
