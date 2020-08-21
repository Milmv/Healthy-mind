import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route  } from "react-router-dom";

import store from "./redux/store";

ReactDOM.render(
    <Router>
      <Provider store={store}>
      <Route path="/" component={App } exact />
      </Provider>
    </Router>,
  document.getElementById("root")
);
