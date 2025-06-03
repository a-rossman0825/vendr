import { AppState } from "../AppState.js";


class ItemsService {
  buyItem(name) {
    let item = AppState.items.find((item) => item.name == name);
      if (AppState.coins < item.price) {
        return;
    } else {
      AppState.coins - item.price;
    }
  }
}

export const itemsService = new ItemsService();