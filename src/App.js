import React from "react";
import { Route, Switch } from "react-router";
import Signin from "./Components/Signup/Singin and signup/Signin";
import Home from "./Components/Signup/Home/Home";
import Signup from "./Components/Signup/Singin and signup/Signup";
import MobileNumber from './Components/Signup/Singin and signup/MobileNumber';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-in">
          <Signin />
        </Route>
        <Route path="/sign-up">
          <Signup />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
