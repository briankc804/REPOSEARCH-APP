import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-repo-form',
  templateUrl: './repo-form.component.html',
  styleUrls: ['./repo-form.component.css']
})
export class RepoFormComponent implements OnInit {

  @Output() inputValue = new EventEmitter<string>();
  name = new FormControl('',Validators.required);

  searchGithub(name:string){
    this.inputValue.emit(name);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
