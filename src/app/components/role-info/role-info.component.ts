import { ThemeControllerService } from './../../Servicies/theme-controller.service';
import { ThemeModel } from './../../Models/ThemeModel';
import { EditRole } from './../../Entities/Role/EditRole';
import { RoleModel } from './../../Models/RoleModel';
import { Component, Input, OnInit, Output, EventEmitter, KeyValueDiffers, KeyValueDiffer } from '@angular/core';

@Component({
  selector: 'app-role-info',
  templateUrl: './role-info.component.html',
  styleUrls: ['./role-info.component.scss']
})
export class RoleInfoComponent implements OnInit {

  readonly theme: ThemeModel;

  @Input() activeRequestOn: boolean = false;
  @Input() open = false;
  @Input() accessToken: string = '';
  @Input() boardId: string = '';
  @Input() role: RoleModel = {Id: '', Caption: '', Color: '', ReadTask: false, WriteTask: false, ReadComment: false, WriteComment: false, CompleteTask: false, Tags: [], IsUsing: false};
  @Input() editRoleEntity: EditRole = {AccessToken: '', BoardId: '', Id: '', Color: '', ReadTask: false, WriteTask: false, ReadComment: false, WriteComment: false, CompleteTask: false}
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Output() EditRoleEvent: EventEmitter<EditRole> = new EventEmitter<EditRole>();


  differ: KeyValueDiffer<string, any>;

  constructor(private differs: KeyValueDiffers, private themeService: ThemeControllerService) {
    this.theme = this.themeService.GetTheme();
    this.differ = this.differs.find({}).create();
  }

  ngOnInit(): void {
  }

  ngDoCheck()
  {
    this.editRoleEntity.ReadComment = this.editRoleEntity.ReadComment || this.editRoleEntity.WriteComment;
    this.editRoleEntity.ReadTask = this.editRoleEntity.ReadTask || this.editRoleEntity.WriteTask;


    const change = this.differ.diff(this);
  if (change) {
    change.forEachChangedItem(item => {
      if(item.key == 'role')
      this.editRoleEntity.Color = this.role.Color;
      this.editRoleEntity.ReadTask = this.role.ReadTask;
      this.editRoleEntity.WriteComment = this.role.WriteComment;
      this.editRoleEntity.WriteTask = this.role.WriteTask;
      this.editRoleEntity.ReadComment = this.role.ReadComment;
      this.editRoleEntity.CompleteTask = this.role.CompleteTask;
      this.editRoleEntity.Id = this.role.Id;
    });
  }
  }

  CloseMenu()
  {
    this.close.emit();
  }


  EditRole()
  {
    this.editRoleEntity.ReadComment = this.editRoleEntity.ReadComment || this.editRoleEntity.WriteComment;
    this.editRoleEntity.ReadTask = this.editRoleEntity.ReadTask || this.editRoleEntity.WriteTask;
    this.editRoleEntity.BoardId = this.boardId;
    this.editRoleEntity.AccessToken = this.accessToken;

    if(!this.activeRequestOn)
    {
      this.EditRoleEvent.emit(this.editRoleEntity);

      this.editRoleEntity.ReadComment = false;
      this.editRoleEntity.ReadTask = false;
    }

  }
}
