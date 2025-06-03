import { AppState } from "../AppState.js";
import { coinsService } from "../services/CoinsService.js";


export class CoinsController {
  constructor(){
    console.log('Coins Controller On');
    AppState.on('coins', this.drawCoins);
  }

  addCoin() {
    coinsService.increaseCoins();
  }

  drawCoins() {
    const coinsElm = document.getElementById('coin-count');
    coinsElm.innerText = AppState.coins.toFixed(2).toString();
  }
}