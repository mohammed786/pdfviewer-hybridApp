import { Component } from '@angular/core';
import { NavController, NavParams, Loading } from 'ionic-angular';

import { User } from '../../models/user';

import {  GithubUsers } from '../../providers/github-users';
import { UserDetailsPage } from '../user-details/user-details';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  users: User[]
  msg: any
  originalUsers: User[]
 // popup: Loading
  constructor(public navCtrl: NavController,private navParam: NavParams, private githubUsers: GithubUsers) {
   // this.popup = this.navParam.get('loadingPopup');
    githubUsers.load().subscribe(users => {
      this.users = users;
      this.originalUsers = users;
     // this.popup.dismiss()
    })

    githubUsers.getMessage().subscribe(msg => {
      console.log("This message from Message : " + msg)
    })

    githubUsers
      .searchUsers('scotch').subscribe(users => {
        console.log(users)
      });
  }

  goToDetails(login: string) {
    this.navCtrl.push(UserDetailsPage, {login});
  }

  search(searchEvent) {
    let term = searchEvent.target.value
    // We will only perform the search if we have 3 or more characters
    if (term.trim() === '' || term.trim().length < 3) {
      // Load cached users
      this.users = this.originalUsers;
    } else {
      // Get the searched users from github
      this.githubUsers.searchUsers(term).subscribe(users => {
        this.users = users
      });
    }
  }
}