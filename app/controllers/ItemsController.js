import { AppState } from "../AppState.js";
import { Item } from "../models/item.js";
import { itemsService } from "../services/ItemsService.js";


export class ItemsController {
  constructor() {
    console.log('ItemsController On');
    this.drawItems();
    this.drawSelection;
    AppState.on('selection', this.drawSelection);
    AppState.on('items', this.drawItems);
  }

  drawItems() {
    const items = AppState.items;
    const itemsListElm = document.getElementById('items-list');
    let itemCards = '';
    items.forEach((item) => itemCards += item.itemCardHTMLTemplate);
    // console.log(itemCards);
    itemsListElm.innerHTML = itemCards;
  }

  purchaseItem(price) {
    itemsService.buyItem(price);
  }

  makeSelection(input){
    itemsService.chooseItemButton(input);
  }

  drawSelection(){
    let selection = '##';
    const selectionElm = document.getElementById('selection-display');
    if (AppState.selection.length == 1) {
      selection = `${AppState.selection[0]}#`;
    }
    if (AppState.selection.length == 2) {
      selection = AppState.selection.join('');

    }
    selectionElm.innerText = selection;
  }

  enterSelection() {
    itemsService.compareSelection();
  }

  clearSelection() {
    itemsService.clearDisplay();
  }

  openDoor() {
    let chosenItem = AppState.chosenItem;
    if (chosenItem) {
    itemsService.showItem(chosenItem);
    AppState.chosenItem = null;
    }
  }
}