import { ThemeControllerService } from './../../Servicies/theme-controller.service';
import { ThemeModel } from './../../Models/ThemeModel';
import { Demote } from './../../Entities/Employee/Demote';
import { AsignRole } from './../../Entities/Employee/AsignRole';
import { RoleModel } from './../../Models/RoleModel';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { EmployeeRoleModel } from 'src/app/Models/EmployeeRoleModel';

@Component({
  selector: 'app-asign-role',
  templateUrl: './asign-role.component.html',
  styleUrls: ['./asign-role.component.scss']
})
export class AsignRoleComponent implements OnInit {

  readonly theme: ThemeModel;

  @Input() activeRequestOn: boolean = false;
  @Input() open = false;
  @Input() roles: RoleModel[] = [];
  @Input() accessToken: string = '';
  @Input() boardId: string = '';
  @Input() userId: string = '';
  @Input() employeesRoles: EmployeeRoleModel[] = [];
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Output() AsignRoleEvent: EventEmitter<AsignRole> = new EventEmitter<AsignRole>();
  @Output() DemoteEvent: EventEmitter<Demote> = new EventEmitter<Demote>();


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

  AsignRole(id: string)
  {
    let asign: AsignRole = {RoleId: id, AccessToken: this.accessToken, EmployeeId: this.userId, BoardId: this.boardId};

    if(!this.activeRequestOn)
    this.AsignRoleEvent.emit(asign);
  }

  Demote(id: string)
  {
    let demote: Demote = {AccessToken: this.accessToken, roleSessionId: id, BoardId: this.boardId};

    if(!this.activeRequestOn)
    this.DemoteEvent.emit(demote);
  }

  IsAdded(roleId: string): boolean
  {
    let res: boolean = false;
    this.employeesRoles.forEach(item =>{
      if(item.RoleId == roleId)
        res = true;
    });

    return res;
  }
}
