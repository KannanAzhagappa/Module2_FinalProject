import React from "react";
import "normalize.css";
import { render } from "react-dom";
import { App } from "./App";
import { GlobalStyles } from "./global-styles";
import { firebase } from "./lib/firebase.prod";
import { FirebaseContext } from "./context/firebase";
import reducer, { initialState } from "./rawcss-components/reducer";
import { StateProvider } from "./rawcss-components/StateProvider";

render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <GlobalStyles />
        <App />
      </StateProvider>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
