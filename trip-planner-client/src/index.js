import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./components/Home";
import * as serviceWorker from "./serviceWorker";

import BaseLayout from "./components/BaseLayout";
import AddTrip from "./components/AddTrip";
import ViewTrip from "./components/ViewTrip";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./store/reducer";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/view" component={ViewTrip} />
          {/* <Route path="/view/:id" component={EditTrip} /> */}
          <Route path="/add" component={AddTrip} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
