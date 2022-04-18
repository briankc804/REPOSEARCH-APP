import { Component, OnInit } from '@angular/core';
import {GetApiService} from '../get-api.service';
import {Subscription} from 'rxjs'; 
import { NgForm } from '@angular/forms';
import { User } from '../user';
@Component({
  selector: 'app-repo-form',
  templateUrl: './repo-form.component.html',
  styleUrls: ['./repo-form.component.css']
})
export class RepoFormComponent implements OnInit {
  title: any;
user:User | undefined;
username:string | undefined;
  getApiService!: GetApiService;
public showInput=true;
public showData=false;

submitUsername(){
  this.getApiService.getUserData(this.username); this.showInput = false;
    this.showData = true;

}
showUserInput(hideInput: boolean) {
  this.showInput = hideInput;
  this.showData = false;
}

  constructor(private api: GetApiService) { }

  ngOnInit()
  {
    this.api.apiCall().subscribe((data:any)=>{
      console.warn("get api data",data);
      this.title=data['title'];
    })
  }

}
