import { AppState } from "../AppState.js";


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
}