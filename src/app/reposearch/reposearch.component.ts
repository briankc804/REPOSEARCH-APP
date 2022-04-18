// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-reposearch',
//   templateUrl: './reposearch.component.html',
//   styleUrls: ['./reposearch.component.css']
// })
// export class ReposearchComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component, OnInit,Output,EventEmitter } from '@angular/core'; 
import { GetApiService } from '../get-api.service';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-reposearch',
  templateUrl: './reposearch.component.html',
  styleUrls: ['./reposearch.component.css']
})

export class GitSearchResultsComponent implements OnInit {

    user:User | undefined; 
    repoDetails = []; 
    GetApiService!: GetApiService;  
    hideInput:boolean; 

  
  	constructor(GetApiService:GetApiService) { 
      this.GetApiService = GetApiService;
    }

    
    @Output() toggleBack = new EventEmitter();

    goBack(){
      this.hideInput = true;
      this.toggleBack.emit(this.hideInput);
    }

    
  	ngOnInit() {
  		this.user = this.GetApiService.user;
      this.repoDetails = this.GetApiService.repoData; 
  	}

}