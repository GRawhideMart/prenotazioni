import React from "react";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Main from "./components/MainComponent";
import { theme } from "./shared/theme";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./rtk/store";

function App() {
  return (
    <Provider store={store}>
      {/* Redux provider */}
      <BrowserRouter>
        {/* React Router */}
        <ThemeProvider theme={theme}>
          {/* Material UI Theme Provider */}
          <Main /> {/* Main component goes here */}
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
