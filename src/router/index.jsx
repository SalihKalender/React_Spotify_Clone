import React, { useState } from "react";
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";

import SideBar from '../components/sidebar/index'
import Home from '../components/content/home/index'
import Search from '../components/content/search/index'
import Library from '../components/content/library/index'
import Playing from '../components/playing_music/index'
import ElementContext from "../components/context";

export default function App() {
  const [ PlayListContainer, setPlayListContainer ] = useState(null)

  return (
    <Router>
      <div className="page_container">
        <SideBar />
          <ElementContext.Provider value={{PlayListContainer, setPlayListContainer}}>
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
          </ElementContext.Provider>
          <Playing />
      </div>
    </Router>
  );
}