import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReposearchComponent } from './reposearch/reposearch.component';
import { RepoFormComponent } from './repo-form/repo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ReposearchComponent,
    RepoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
