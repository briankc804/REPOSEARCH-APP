import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReposearchComponent } from './reposearch/reposearch.component';
import {HttpClientModule} from '@angular/common/http';
import { RepoformComponent } from './repoform/repoform.component';


@NgModule({
  declarations: [
    AppComponent,
    ReposearchComponent,
    RepoformComponent,
    
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
