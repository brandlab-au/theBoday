import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events } from 'ionic-angular';

/**
 * Generated class for the ClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client',
  templateUrl: 'client.html',
})
export class ClientPage {
userName : String;
    
  constructor(public navCtrl: NavController, public navParams: NavParams,public event:Events) {
      
      event.subscribe('user:created', (user, time) => {
    // user and time are the same arguments passed in `events.publish(user, time)`
          this.userName = user;
          
    console.log('Welcome', user, 'at', time);
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientPage');
  }

}
