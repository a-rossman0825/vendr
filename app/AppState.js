import { Item } from './models/item.js';
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  coins = 0;
  selection = [];
  chosenItem = null;

  //STUB for new Item({name: '', id: '', image: '', price: 0.00}),
  //id= ("A-J""0-9");
  items = [
    new Item({ name: 'CLASSIC CHIPS', id: 'A1', image: 'https://images.unsplash.com/photo-1741520149946-d2e652514b5a?q=80&w=994&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: 5.00 }),
    new Item({ name: 'BBQ CHIPS', id: 'A2', image: 'https://images.unsplash.com/photo-1718385016727-667220315ac9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: 2.50 }),
    
  
    
  ];
}

export const AppState = createObservableProxy(new ObservableAppState())