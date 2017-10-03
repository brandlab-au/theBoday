import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { ListPage } from '../list/list';
import { InfoPage } from '../info/info';
import { ClientPage } from '../client/client';



@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
    
    user: String;
    ///age: String;
    
  constructor(public navCtrl: NavController,public events: Events) {

  }
    
newLoad(user){
    this.events.publish('user:created', user, Date.now());
    this.navCtrl.push(InfoPage);
    console.log('User created!'+this.user); 
}  
    
newList(){
    this.navCtrl.push(ListPage);    
} 
    
}
