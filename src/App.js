import React from "react";
import { Route, useHistory, Redirect } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Nav from "./Nav";
import Callback from "./Callback";
import Auth from "./Auth/Auth";
import Public from "./Public";
import Private from "./Private";
import Courses from "./Courses";

function App() {
  let history = useHistory();
  const auth = new Auth(history);
  return (
    <>
      <Nav auth={auth} />
      <div className="body">
        <Route path="/" exact>
          <Home auth={auth} />
        </Route>
        <Route path="/callback">
          <Callback auth={auth} />
        </Route>
        <Route path="/public">
          <Public />
        </Route>
        <Route path="/private">
          <Private auth={auth} />
        </Route>
        <Route path="/profile" exact>
          {auth.isAuthenticated() ? (
            <Profile auth={auth} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/course" exact>
          {auth.isAuthenticated() && auth.userHasScopes(["read:courses"]) ? (
            <Courses auth={auth} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
      </div>
    </>
  );
}

export default App;
