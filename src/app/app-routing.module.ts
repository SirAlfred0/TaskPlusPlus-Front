import { SystemMessagesComponent } from './components/system-messages/system-messages.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BoardInfoComponent } from './components/board-info/board-info.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { SettingComponent } from './components/setting/setting.component';
import { CommentsComponent } from './components/comments/comments.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { BoardsComponent } from './components/boards/boards.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginSuccessfulComponent } from './components/login-successful/login-successful.component';
import { SubTasksComponent } from './components/sub-tasks/sub-tasks.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'success', component: LoginSuccessfulComponent, data: {animationState: 'Success'}},
  {path: 'boards' , component: BoardsComponent, data: {animationState: 'Board'}},
  {path: 'task/:parentid', component: TasksComponent, data: {animationState: 'Task'}},
  {path: 'subtask/:parentid', component: SubTasksComponent, data: {animationState: 'SubTask'}},
  {path: 'comments/:parentid', component: CommentsComponent, data: {animationState: 'Comment'}},
  {path: 'setting', component: SettingComponent, data: {animationState: 'Setting'}},
  {path: 'contactlist', component: ContactListComponent, data: {animationState: 'ContactList'}},
  {path: 'boardinfo/:parentid', component: BoardInfoComponent, data: {animationState: 'BoardInfo'}},
  {path: 'profile', component: ProfileComponent, data: {animationState: 'Profile'}},
  {path: 'messages', component: SystemMessagesComponent, data: {animationState: 'Messages'} },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
