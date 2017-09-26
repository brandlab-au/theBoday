import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import { ItemDetailsPage } from '../item-details/item-details';
/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
   
     
    test=
                         {
                           name:'Schwarzenegger',
                           image: 'http://upload.wikimedia.org/wikipedia/commons/8/8b/Kenneth_Schwarzenegger.jpg',
                           category: 'mains',
                           label:'Hot', 
                           price:'4.99',
                           description:'Arnold Alois Schwarzenegger is an Austrian-American actor, producer, businessman, investor, author, philanthropist, activist, politician, and former professional .',
                           comment: ''
                        }
    
    dishes=[
                         {
                           name:'Steve Reves',
                           image: 'http://static.goal.com/4323400/4323432_news.jpg',
                           category: 'mains',
                           label:'Hot',
                           price:'4.99',
                           description:'Stephen Lester "Steve" Reeves was an American professional bodybuilder, actor, and philanthropist. He traveled to Italy in the mid-1950s to star in a series of Italian-made peplum films featuring.',
                           comment: ''
                        },
                        {
                           name:'Zucchipakoda',
                           image: 'http://static.goal.com/4323400/4323432_news.jpg',
                           category: 'appetizer',
                           label:'',
                           price:'1.99',
                           description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
                           comment: ''
                        },
                        {
                           name:'Claudia Schiffer',
                           image: 'http://static.goal.com/4323400/4323432_news.jpg',
                           category: 'appetizer',
                           label:'New',
                           price:'1.99',
                           description:'Claudia Maria Schiffer is a German supermodel, actress and fashion designer. She rose to fame in the early 1990s as one of the world s most successful models. In her early career, she was compared to Brigitte Bardot',
                           comment: ''
                        },
                        {
                           name:'Usain Bolt',
                           image: 'http://static.goal.com/4323400/4323432_news.jpg',
                           category: 'dessert',
                           label:'',
                           price:'2.99',
                           description:'Usain St Leo Bolt OJ, CD is a retired Jamaican sprinter. He is the first person to hold both the 100 metres and 200 metres world records since fully automatic time became mandatory',
                           comment: ''
                        },
                        {
                           name:'Cristiano Ronaldo',
                           image: 'http://static.goal.com/4323400/4323432_news.jpg',
                           category: 'dessert',
                           label:'',
                           price:'2.99',
                           description:'Cristiano Ronaldo dos Santos Aveiro GOIH, ComM is a Portuguese professional footballer who plays as a forward for Spanish club Real Madrid and the Portugal national team',
                           comment: ''
                        }
                        ]
  incommingMessage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.incommingMessage = navParams.get('TextMessage' );
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
    
      
  }
    
    
      /* itemTapped(event, dish) {
    this.navCtrl.push(ItemDetailsPage, {
      dish: dish.name
    });
  }*/

}
