import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { InfoPage } from '../info/info';
import { ClientPage } from '../client/client';



@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController) {

  }
    
newLoad(message){
    let data =
        {
         TextMessage: message

        };
    this.navCtrl.push(InfoPage,data);
}  
    
newList(){
    this.navCtrl.push(ListPage);    
} 
    
}
