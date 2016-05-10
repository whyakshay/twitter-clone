import React from 'react';
import API from "../API.jsx"

export default{

  getAllUsers(){
    API.getAllUsers();
  },
  followUser(userId){
    API.followUser(userId);
  }
}
