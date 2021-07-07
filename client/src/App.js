import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.scss";
import PostList from "./postList";
import Home from "./home";
import Nav from "./Nav";
import User from "./user";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Nav} />
        <Container>
          <Route exact path="/" component={Home} />
          <Route path="/allposts/" component={PostList} />
          <Route path="/user/:id/" render={props => <User {...props}/>}/>
        </Container>
      </div>
    </Router>
  );
}

export default App;
