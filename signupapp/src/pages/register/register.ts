import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage'

import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  fullName:string;
  username:string;
  email:string;
  pass:string;
  key1:string = 'fullName'; 
  key2:string = 'username'; 
  key3:string = 'email'; 
  key4:string = 'pass'; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private storage: Storage
  ) {
    
    
  }

  savData(){
  this.storage.set('this.key1', 'this.fullName');
  this.storage.set('this.key2', 'this.username');
  this.storage.set('this.key3', 'this.email');
  this.storage.set('this.key4', 'this.pass');

   this.navCtrl.push(LoginPage);

  } 

  loadData(){
    this.storage.get(this.key1).then((val) =>{
      console.log('Your username  is', val);
    }
  )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
