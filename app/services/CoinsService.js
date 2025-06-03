import { AppState } from "../AppState.js";


class CoinsService {
  increaseCoins() {
    AppState.coins += 0.25;
    console.log(AppState.coins)
  }
}

export const coinsService = new CoinsService();