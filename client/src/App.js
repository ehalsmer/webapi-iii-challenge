import React from "react";
import "semantic-ui-css/semantic.min.css"; 
import "./App.scss";
import UserList from "./userList";
import PostList from "./postList";
import Home from './home';
import Nav from "./Nav";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/' component={Nav} />
<Container>
          <Route exact path='/' component={Home} />
          <Route path="/users/" component={UserList} />
          <Route path="/allposts/" component={PostList} />
</Container>
      </div>
    </Router>
  );
}

export default App;
