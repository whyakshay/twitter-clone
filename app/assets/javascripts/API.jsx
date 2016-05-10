import React from 'react';
import ServerActions from "./actions/ServerActions.jsx"
export default{
  getAllTweets() {
    console.log(2, "API.getAllTweets")
    $.get("/tweets")
    .success( rawTweets => ServerActions.receivedTweets(rawTweets))
    .error( error => console.log(error));
  },
  createTweet(body){
      $.post("/tweets", {body})
      .success(rawTweet =>  ServerActions.receivedOneTweet(rawTweet))
      .error(error => console.log(error));

  },
  getAllUsers() {
    console.log(2, "API.getAllUsers")
    $.get("/followers/random")
    .success( rawUsers => ServerActions.receivedUsers(rawUsers))
    .error( error => console.log(error));
  },
  followUser(userId){
    $.post("/followers/create", { user_id: userId})
    .success( rawFollower => ServerActions.receivedOneFollower(rawFollower))
    .error(error => console.log(error));
  }
}
