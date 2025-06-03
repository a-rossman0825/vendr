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
}

export const itemsService = new ItemsService();