import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { MainPage } from '../main/main';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  @ViewChild('phone') phone;
  @ViewChild('pass') pass;
  navpage(){
  	this.navCtrl.push(LoginPage)
  }
  navpag(){
    this.navCtrl.push(MainPage)
    console.log(this.phone.value)
  }

}
