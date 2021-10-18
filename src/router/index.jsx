import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SideBar from '../components/sidebar/index'
import Home from '../components/content/home/index'
import Search from '../components/content/search/index'
import Library from '../components/content/library/index'
export default function App() {
  return (
    <Router>
      <div className="page_container">
        <SideBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search" render={(props) => (
              <Search {...props} authed={true} />
          )} />
          <Route path="/library">
            <Library />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}