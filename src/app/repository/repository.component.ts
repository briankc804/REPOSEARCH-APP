
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Repository } from '../repository';
import { GetApiService } from '../get-api.service';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  GetApiService!: GetApiService;
  repos:Repository[] = [];
  username = new FormControl("")

  
  

  constructor(getApiService:GetApiService) {
    this.GetApiService= getApiService
  }

   
    ngOnInit(): void {
    }

   async getPublicRepositories(username:string) {
      await this.GetApiService.fetchRepo(username).then((info:any) => {
      for(let x=0; x<=info.length;x +=1){
        let cover = new Repository( info [x].name, info[x].description, info[x].html_url, info[x].created_at)
        this.repos.push(cover)
        console.log(this.repos)
      }
      console.log(info)
      })
      
    }

    

    search(){
      console.log(this.username.value)
      this.getPublicRepositories(this.username.value)
      
    }

}