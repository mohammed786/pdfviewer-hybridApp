import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { LoginpagePage } from '../pages/loginpage/loginpage';
import { PdfViwerPage } from '../pages/pdf-viwer/pdf-viwer';
import { GithubUsers } from '../providers/github-users';


@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    UserDetailsPage,
    LoginpagePage,
    PdfViwerPage,
    PdfViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    UserDetailsPage,
    LoginpagePage,
    PdfViwerPage
  ],
  providers: [GithubUsers]
})
export class AppModule {}
