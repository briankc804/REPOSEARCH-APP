
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Repository } from '../repository';
import { GetApiService } from '../get-api.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  GetApiService!: GetApiService;
  repos:Repository[] = [];

  mySubscription: Subscription = new Subscription;
  

  constructor(getApiService:GetApiService) {
    this.GetApiService= getApiService
  }

   ngOnDestroy():void{
    this.mySubscription.unsubscribe();
   }

    ngOnInit(): void {
    }

    getPublicRepositories(username:string) {
      this.mySubscription.add(this.GetApiService.fetchRepo(username).subscribe((reposArray:any) => {
        // this.repos = repos; add repos object to the array
        for(let i=0;i<=reposArray.length; i++) {
          let repoInfor = new Repository(reposArray[i].name,reposArray[i].description, reposArray[i].html_url,reposArray[i].created_at);
          this.repos.push(repoInfor)
        }
      })
      )
    }

    githubSearch(inputValue: string) {
      this.getPublicRepositories(inputValue)
      return false
    }



}