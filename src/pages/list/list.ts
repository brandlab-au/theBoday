import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  sport: string[];
  icons: string[];
  color: string[];
  items: Array<{title: string, note: string, icon: string,color: string}>;
   

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
      
      this.sport = ['Bodybuilding', 'Strength', 'Running', 'Football', 'Basketball', 'Ridding',
    'American-football', 'Triathlons', 'Swimming', 'CrossFit','Boxing'];
      
      
      this.color = ['background-color: red', 'background-color: blue', 'background-color: green', 'background-color: black', 'background-color: orange', 'background-color: red',
    'background-color: gray', 'background-color: yellow', 'background-color: green', 'background-color: pink','background-color: brown'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: this.sport[i]+' '+ i,
        note: 'See more' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)],
        color: this.color[i]
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
