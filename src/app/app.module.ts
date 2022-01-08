import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginSuccessfulComponent } from './components/login-successful/login-successful.component';
import { BoardsComponent } from './components/boards/boards.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { SubTasksComponent } from './components/sub-tasks/sub-tasks.component';
import { CommentsComponent } from './components/comments/comments.component';
import { BoardInfoComponent } from './components/board-info/board-info.component';
import { DarkenComponent } from './components/darken/darken.component';
import { HoldElementDirective } from './Directives/hold-element.directive';
import { NavBoardComponent } from './components/nav-board/nav-board.component';
import { NavTasksComponent } from './components/nav-tasks/nav-tasks.component';
import { NavSubTasksComponent } from './components/nav-sub-tasks/nav-sub-tasks.component';
import { NavCommentsComponent } from './components/nav-comments/nav-comments.component';
import { NavBoardInfoComponent } from './components/nav-board-info/nav-board-info.component';
import { TaskInfoComponent } from './components/task-info/task-info.component';
import { ShareBoardComponent } from './components/share-board/share-board.component';
import { AsignRoleComponent } from './components/asign-role/asign-role.component';
import { TagsInfoComponent } from './components/tags-info/tags-info.component';
import { RoleInfoComponent } from './components/role-info/role-info.component';
import { AddRoleComponent } from './components/add-role/add-role.component';
import { SettingComponent } from './components/setting/setting.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { NavContactListComponent } from './components/nav-contact-list/nav-contact-list.component';
import { ScrollEffectDirective } from './Directives/scroll-effect.directive';
import { FormsModule } from '@angular/forms';
import { CommentTopMenuComponent } from './components/comment-top-menu/comment-top-menu.component';
import { CaptionPipe } from './Pipes/caption.pipe';
import { CountControlPipe } from './Pipes/count-control.pipe';
import { SetBgColorDirective } from './Directives/set-bg-color.directive';
import { RoleTagsInfoComponent } from './components/role-tags-info/role-tags-info.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavProfileComponent } from './components/nav-profile/nav-profile.component';
import { SystemMessagesComponent } from './components/system-messages/system-messages.component';
import { NavSystemMessagesComponent } from './components/nav-system-messages/nav-system-messages.component';
import { SelectDirective } from './Directives/select.directive';
import { QuitAPP } from './Directives/QuitAPP.directive';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from './components/loading/loading.component';
import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './route-reuse';
import { ErrorBoxComponent } from './components/error-box/error-box.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginSuccessfulComponent,
    BoardsComponent,
    TasksComponent,
    SubTasksComponent,
    CommentsComponent,
    BoardInfoComponent,
    DarkenComponent,
    HoldElementDirective,
    NavBoardComponent,
    NavTasksComponent,
    NavSubTasksComponent,
    NavCommentsComponent,
    NavBoardInfoComponent,
    TaskInfoComponent,
    ShareBoardComponent,
    AsignRoleComponent,
    TagsInfoComponent,
    RoleInfoComponent,
    AddRoleComponent,
    SettingComponent,
    ContactListComponent,
    NavContactListComponent,
    ScrollEffectDirective,
    CommentTopMenuComponent,
    CaptionPipe,
    CountControlPipe,
    SetBgColorDirective,
    RoleTagsInfoComponent,
    ProfileComponent,
    NavProfileComponent,
    SystemMessagesComponent,
    NavSystemMessagesComponent,
    SelectDirective,
    QuitAPP,
    LoadingComponent,
    ErrorBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
  ],
  exports: [
    CaptionPipe,
    CountControlPipe,
  ],
  providers: [{provide: RouteReuseStrategy, useClass: CustomReuseStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
