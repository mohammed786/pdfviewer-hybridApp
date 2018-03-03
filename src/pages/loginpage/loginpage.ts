import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { UsersPage } from '../users/users';
/**
 * Generated class for the LoginpagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-loginpage',
  templateUrl: 'loginpage.html',
})
export class LoginpagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }
  // Create the popup
  loadingPopup = this.loadingCtrl.create({
    content: 'Please Wait..'
  })

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginpagePage');
  }

  openUser(){
   // this.loadingPopup.present(); 
    this.navCtrl.setRoot(UsersPage,this.loadingPopup);
  }
}
