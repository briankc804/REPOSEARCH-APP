import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { GetApiService } from '../get-api.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  name = new FormControl('');
  user:User;
  getApiService:GetApiService;

  constructor(getapiService:GetApiService) {
    this.getApiService = getapiService
    this.user = new User("","","",0,0,0,new Date());
  }

  ngOnInit(): void {
  }
  searchGithub(){
    console.log(this.name.value)
  } 

  async getInfoWithPromise(username:string){
    await this.getApiService.getUserInfor(username).then((data:any) => {
      this.user.name = data.name;
      this.user.avatar_url = data.avatar_url;
      this.user.public_repos = data.public_repos;
      this.user.following = data.following;
      this.user.followers = data.followers;
      this.user.created_at = data.created_at;
    })

  }


}
