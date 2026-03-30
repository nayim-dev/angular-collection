import { Component, signal } from '@angular/core';
import { styleText } from 'util';
import { CollectionItemCard } from './components/collection-item-card/collection-item-card';
import { CollectionItem } from './models/collection-item';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [CollectionItemCard]
})
export class App {
  coin: CollectionItem;
  constructor(){
    this.coin = new CollectionItem();
    this.coin.name = 'Piece de 1972';
    this.coin.description = 'Piece de 5000 fcfa';
    this.coin.rarity = 'commune';
    this.coin.image = '/img/coin.png'
    this.coin.price = 100000;
    
  
    
  }
}
