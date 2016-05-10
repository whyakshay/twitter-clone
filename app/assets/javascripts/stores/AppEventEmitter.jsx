import {EventEmitter} from "events";
const CHANGE_EVENT = "CHANGE";

export default class AppEventEmitter extends EventEmitter {

  emitChange(){
    this.emit(CHANGE_EVENT);
  }
  addChangeListner(callback){
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListner(callback){
    this.removeChangeListner(CHANGE_EVENT, callback);
  }
}
