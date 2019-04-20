import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {Storage} from '@ionic/storage'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  username:string;
  pass:string;
 
  key2:string = 'username'; 
  key4:string = 'pass'; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private storage: Storage
  ) {
    this.username = navParams.get("fullName");
    this.pass = navParams.get("fullName");
  } 

  logIn(){
    this.storage.get(this.key2);
    this.storage.get(this.key4);

    this.navCtrl.setRoot(HomePage)

  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
