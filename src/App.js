import React from 'react';
import './App.css';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import Main from './components/MainComponent';
import { theme } from './shared/theme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Main /> 
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;