import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '/home/briankc/Documents/REPOSEARCH-APP/REPOSEARCH/src/app/user';
import { Repository } from './repository';
@Injectable({
  providedIn: 'root'
})


export class GetApiService {
  user: import("/home/briankc/Documents/REPOSEARCH-APP/REPOSEARCH/src/app/user").User | undefined;
  repoData: never[] | undefined;
  getUserData(username: string | undefined) {
    throw new Error('Method not implemented.');
  }

  constructor(
     private http:HttpClient
    ) { }
    apiCall(){
      return this.http.get('https://api.github.com/users/${name}/repos');
    }
}
