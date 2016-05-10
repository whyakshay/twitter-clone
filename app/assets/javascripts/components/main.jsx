import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import Index from "./Index.jsx"
import Follow from "./Follow.jsx"

class App extends React.Component{
  render(){
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}

let documentReady = () => {
  let reactNode = document.getElementById('root');
  if(reactNode){
    ReactDOM.render(
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Index} />
          <Route path="/follow" component={Follow} />
        </Route>
      </ Router>
    , reactNode);
  }
};

$(documentReady);
