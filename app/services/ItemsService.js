import { AppState } from "../AppState.js";
import { ItemsController } from "../controllers/ItemsController.js";
import { Item } from "../models/item.js";


class ItemsService {


  buyItem(price) {
    if (AppState.coins < price) {
      return;
    }
      AppState.coins -= price;
      console.log(price);
      console.log(AppState.coins);
  }

  chooseItemButton(input) {
    if (AppState.selection.length <= 2) {
      AppState.selection.push(input);
      const boughtItemElm = document.getElementById('bought-item');
      boughtItemElm.innerHTML = '';
      AppState.items.forEach((item) => item.bought = false);
      console.log(AppState.selection);
    }
  }
  
  compareSelection() {
    if (AppState.selection.length == 2){
    let chosenId = AppState.selection.join('');
    let chosenItem = AppState.items.find((item) => item.id == chosenId);
    AppState.selection = [];
      if (chosenItem == undefined) {
        AppState.chosenItem = null;
        return;
      }
    console.log(chosenItem.name);
    this.buyItem(chosenItem.price);
    chosenItem.bought = true;
    AppState.chosenItem = chosenItem;
    return chosenItem;
    }
  }

  clearDisplay() {
    AppState.selection = [];
  }
  showItem(item) {
    const boughtItemElm = document.getElementById('bought-item');
    boughtItemElm.innerHTML = `
      <img src="${item.image}" alt="${item.name}" 
            style="width:70px; z-index: 1; transform: 
            translateY(28px) rotate(30deg); height: 90px; object-fit: cover; 
            object-position: top;">
    `
  }
}

export const itemsService = new ItemsService();