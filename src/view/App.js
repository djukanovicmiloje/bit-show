import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import ShowPage from "./show_page/ShowPage";
import MainPage from "./MainPage/MainPage";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/show/:id" component={ShowPage} />
    </Switch>
  );
}

export default App;
