import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import MonitorPage from "./pages/MonitorPage";
import AdminPage from "./pages/AdminPage";
import FileTest from "./pages/FileTest";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MonitorPage} />
        <Route exact path="/admin" component={AdminPage} />
        <Route exact path="/test" component={FileTest} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
