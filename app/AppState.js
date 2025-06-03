import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  coins = 0;
  items = [

  ];
}

export const AppState = createObservableProxy(new ObservableAppState())