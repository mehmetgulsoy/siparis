import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
import "semantic-ui-less/semantic.less";
import { createBrowserHistory } from "history";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./state/reducers";
import App from "./App";

const history = createBrowserHistory();
const store = configureStore({
  reducer: rootReducer(history),
});

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  );
};

render();

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./App", () => render());
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
