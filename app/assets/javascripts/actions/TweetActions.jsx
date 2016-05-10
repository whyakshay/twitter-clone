import React from 'react';
import API from "../API.jsx"
export default{

  getAllTweets(){
    console.log(1, "TweetActions");
    API.getAllTweets();
  },
  sendTweet(body){
    API.createTweet(body);
  }
}
