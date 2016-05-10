import React from 'react';
import AppDispatcher from "../dispatcher.jsx";
import ActionTypes from "../constants.jsx";
import AppEventEmitter from "./AppEventEmitter.jsx";

let _users = [];
let _followedIds = [];

class UserEventEmitter extends AppEventEmitter {
  getAll(){
    return _users.map( user => {
       user.following = _followedIds.indexOf(user.id) >= 0;
       return user;
    });
  }
}

let UserStore = new UserEventEmitter();

AppDispatcher.register(action => {
  console.log(action.actionType);
  switch (action.actionType) {
    case ActionTypes.RECEIVED_USERS:
    _users = action.rawUsers;
    UserStore.emitChange();
    break;
    case ActionTypes.RECEIVED_USERS:
      _followedIds.push(action.rawFollower.user_id);
      UserStore.emitChange();
    break;
    default:

  }
});

export default UserStore;
