import { AppState } from "../AppState.js";


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
      console.log(AppState.selection);
    }
  }
  
  compareSelection() {
    if (AppState.selection.length == 2){
    let chosenId = AppState.selection.join('');
    let chosenItem = AppState.items.find((item) => item.id == chosenId);
      if (chosenItem == undefined) {
        AppState.selection = [];
        return;
      }
    console.log(chosenItem.name);
    this.buyItem(chosenItem.price);
    AppState.selection = [];
    }
  }

  clearDisplay() {
    AppState.selection = [];
  }
}

export const itemsService = new ItemsService();