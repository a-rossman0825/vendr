import { AppState } from "../AppState.js";


class CoinsService {
  increaseCoins() {
    AppState.coins++;
  }
}

export const coinsService = new CoinsService();