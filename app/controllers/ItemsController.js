import { AppState } from "../AppState.js";
import { Item } from "../models/item.js";
import { itemsService } from "../services/ItemsService.js";


export class ItemsController {
  constructor() {
    console.log('ItemsController On');
    this.drawItems();
  }

  drawItems() {
    const items = AppState.items;
    const itemsListElem = document.getElementById('items-list');
    let itemCards = '';
    items.forEach((item) => itemCards += item.itemCardHTMLTemplate);
    console.log(itemCards);
    itemsListElem.innerHTML = itemCards;
  }

  purchaseItem(price) {
    itemsService.buyItem(price);
  }
}