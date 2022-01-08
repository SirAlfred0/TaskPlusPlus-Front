import { CacheManagerService } from './cache-manager.service';
import { LoadingManagerService } from './loading-manager.service';
import { UserActions } from '../Enums/UserActions';
import { Login } from './../Models/Login';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//

const headers = {
  "Content-Type": "application/json",
};

//http://localhost:51044/api/
const apiUrl = "https://taskpp.ir/api/";

@Injectable({
  providedIn: 'root'
})


export class TaskPlusPlusAPIService {


  constructor(private http: HttpClient,private loadingService: LoadingManagerService,private cacheManager: CacheManagerService) { }


   Post(action: UserActions,propertise: any) : Promise<any>
  {
    let subURL = apiUrl;
    let result = null;
    switch(action)
    {
      case UserActions.SignIn:
        subURL += 'signin';
        result = this.Fetch(subURL,JSON.stringify(propertise));
          break;
      case UserActions.AddBoard:
        subURL += 'addboard';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.GetBoards:
        subURL += 'getboards';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.EditBoard:
        subURL += 'editboard';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.DeleteBoard:
        subURL += 'deleteboard';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.AddTask:
        subURL += 'addtask';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.GetTask:
        subURL += 'gettasks';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.EditTask:
        subURL += 'edittask';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.DeleteTask:
        subURL += 'deletetask';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.AddSubTask:
        subURL += 'addsubtask';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.EditSubTask:
        subURL += 'editsubtask';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.AddComment:
        subURL += 'addcomment';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.GetComment:
        subURL += 'getcomments';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.EditComment:
        subURL += 'editcomment';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.DeleteComment:
        subURL += 'deletecomment';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.AddFriend:
        subURL += 'addfriend';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.GetFriendRequest:
        subURL += 'getfriendrequests';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.ApplyFriendRequestResponce:
        subURL += 'applyrequestresponce';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.GetFriendList:
        subURL += 'getfriends';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.RemoveFriend:
        subURL += 'removefriend';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.ShareBoard:
        subURL += 'shareboard';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.AddTag:
        subURL += 'addtag';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.GetBoardTag:
        subURL += 'getboardstag';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.RemoveTagFromBoard:
        subURL += 'removetag';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.AsignTagToTask:
        subURL += 'asigntag';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.RemoveTagFromTask:
        subURL += 'removeassignment';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.AddRole:
        subURL += 'addrole';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.GetRole:
        subURL += 'getboardroles';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.RemoveRole:
        subURL += 'removerole';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.GetEmployees:
        subURL += 'getemployees';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.AsignRole:
        subURL += 'asignrole';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.Demote:
        subURL += 'demote';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.EditRole:
        subURL += 'editrole';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.AsignTagToRole:
        subURL += 'asigntagtorole';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.RemoveTagFromRole:
        subURL += 'removetagfromrole';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.EditTag:
        subURL += 'edittag';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.RemoveEmployee:
        subURL += 'removeshare';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.GetProfile:
        subURL += 'getprofile';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.ChangeProfile:
        subURL += 'changeprofile';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.GetSystemMessages:
        subURL += 'getsystemmessages';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.GetRecentChanges:
        subURL += 'getrecentchanges';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.GetParentInfo:
        subURL += 'getparentinfo';
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.GetBoardPermission:
        subURL += "getboardpermissions";
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.GetTaskPermission:
        subURL += "gettaskpermissions";
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
      case UserActions.GetCommentPermission:
        subURL += "getcommentpermissions";
        result = this.Fetch(subURL,JSON.stringify(propertise));
        break;
    }

    return result;
  }


  private async Fetch(url: string,data: any)
  {
    this.loadingService.SetLoader();
    let res =  await this.http.post<any>(url,data,{headers: headers}).toPromise();
    this.loadingService.ResetLoader();

    return res;
  }
}
