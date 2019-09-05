import React from "react";
import "./App.scss";
import UserList from "./userList";
import PostList from "./postList";
import Home from './home';
import Nav from "./Nav";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/' component={Nav} />
        <Route exact path='/' component={Home} />
        <Route path="/users/" component={UserList} />
        <Route path="/allposts/" component={PostList} />
      </div>
    </Router>
  );
}

export default App;
