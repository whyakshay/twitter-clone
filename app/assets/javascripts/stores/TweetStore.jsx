import React from 'react';
import AppDispatcher from "../dispatcher.jsx"
import ActionTypes from "../constants.jsx"
import AppEventEmitter from "./AppEventEmitter.jsx";

let _tweets = [];

class TweetEventEmitter extends AppEventEmitter {
  getAll(){
    return _tweets.map(tweet => {
      tweet.formattedDate = moment(tweet.created_at).fromNow();
      return tweet;
    })
    return _tweets;
  }
}

let TweetStore = new TweetEventEmitter();

AppDispatcher.register(action => {
  console.log(action.actionType);
  switch (action.actionType) {

    case ActionTypes.RECEIVED_TWEETS:
      console.log(4, "TweetStore");
      _tweets = action.rawTweets;
      TweetStore.emitChange();
      break;
      case ActionTypes.RECEIVED_ONE_TWEET:
        console.log(5, "TweetStore.receivedOneTweet");
        _tweets.unshift(action.rawTweet);
        TweetStore.emitChange();
      break;
    default:

  }
});

export default TweetStore;
