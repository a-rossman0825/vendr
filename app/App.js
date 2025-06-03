import { CoinsController } from "./controllers/CoinsController.js";
import { ItemsController } from "./controllers/ItemsController.js"


class App {

  // ExampleController = new ExampleController() // ☑️ you can remove this - example only
itemsController = new ItemsController();
coinsController = new CoinsController();
}

window['app'] = new App()


