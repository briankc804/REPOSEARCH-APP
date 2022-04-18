import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReposearchComponent } from './reposearch/reposearch.component';
import {HttpClientModule} from '@angular/common/http';
import { RepoformComponent } from './repoform/repoform.component';
import { RepositoryComponent } from './repository/repository.component';
import { UserComponent } from './user/user.component';
import { RepoFormComponent } from './repo-form/repo-form.component';
import { RepositoryDetailsComponent } from './repository-details/repository-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ReposearchComponent,
    RepoformComponent,
    RepositoryComponent,
    UserComponent,
    RepoFormComponent,
    RepositoryDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
