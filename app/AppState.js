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
    new Item({name: 'SARDINES', id: 'A3', image: 'https://images.unsplash.com/photo-1585769448445-efca2df879e6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmludGFnZSUyMHNuYWNrc3xlbnwwfHwwfHx8MA%3D%3D', price: 1.50}),
    new Item({name: 'DIRTY SOCKS', id: 'A4', image: 'https://images.unsplash.com/photo-1640026199235-c24aa417b552?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29ja3N8ZW58MHx8MHx8fDA%3D', price: 6.25}),
    new Item({name: 'KIT-KAT', id: 'B1', image: 'https://images.unsplash.com/flagged/photo-1567708044252-66de978ef021?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbmR5JTIwYmFyfGVufDB8fDB8fHww', price: 0.75}),
    new Item({name: 'GAS MASK', id: 'B2', image: 'https://images.unsplash.com/photo-1582178538120-06a684adaec5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNraSUyMG1hc2t8ZW58MHx8MHx8fDA%3D', price: 14.75}),
    new Item({name: 'COLD BEVERAGE', id: 'B3', image: 'https://images.unsplash.com/photo-1647185072241-a1cc40d82a82?q=80&w=3135&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: 3.00}),
    new Item({name: 'CLEAN AIR', id: 'B4', image: 'https://media.istockphoto.com/id/118060247/photo/altitude-sickness.webp?a=1&b=1&s=612x612&w=0&k=20&c=MdElt8psA1qEgzc8ngwklAid_XiXSv5kS-nDOuzRXOk=', price: 25.00}),
    new Item({name: '7 NAILS (Hammer not included)', id: 'C1', image: 'https://images.unsplash.com/photo-1588619461335-b81119fee1b5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEhhbW1lcnxlbnwwfHwwfHx8MA%3D%3D', price: 2.00}),
    new Item({name: 'LOSING SCRATCH CARD', id: 'C2', image: 'https://media.istockphoto.com/id/1743935151/photo/scratchcard-you-did-not-win.webp?a=1&b=1&s=612x612&w=0&k=20&c=3RuhaMTESosvQ1MI1fKfa586nW3x-MHpHV8nQRUZ6ZY=', price: 13.50}),
    new Item({name: 'EMPTY VENDING MACHINE COIL', id: 'C3', image: './assets/img/empty.jpg', price: 0.00}),
    new Item({name: 'ONE QUARTER', id: 'C4', image: 'https://images.unsplash.com/photo-1644733079435-35c20e35290c?q=80&w=3274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: 0.50}),
    
  ];
}

export const AppState = createObservableProxy(new ObservableAppState())