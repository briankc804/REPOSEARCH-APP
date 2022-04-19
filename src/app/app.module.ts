import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { RepositoryComponent } from './repository/repository.component';
import { UserComponent } from './user/user.component';
import { RepoFormComponent } from './repo-form/repo-form.component';
import { RepositoryDetailsComponent } from './repository-details/repository-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    RepoFormComponent,
    RepositoryComponent,
    UserComponent,
    RepositoryDetailsComponent,
    UserDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
