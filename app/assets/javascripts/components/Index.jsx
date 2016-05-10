import React from 'react';
import TweetActions from "../actions/TweetActions.jsx"
import TweetStore from "../stores/TweetStore.jsx"
import TweetBox from "./TweetBox.jsx"
import TweetsList from "./TweetsList.jsx";
import {Link} from 'react-router';


let getAppState = () => {
  return { tweetsList: TweetStore.getAll() };
}

export default class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount(){
    TweetActions.getAllTweets();
    TweetStore.addChangeListner(this._onChange);
  }
  componentWillUnMount(){
    TweetStore.removeChangeListner(this._onChange);
  }
  _onChange(){
    console.log(5, "Main._onChange");
    this.setState(getAppState());
  }
  render(){
    return(
      <div id="container">
        <Link to="/follow">Who to Follow?</Link>
        <TweetBox />
        <TweetsList tweets={ this.state.tweetsList }/>
      </div>
    );
  }
}
